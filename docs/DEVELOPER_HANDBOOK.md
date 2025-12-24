# Aalam Developer Handbook

> "A museum of infinite connections."

Welcome to the engineering guide for **Aalam Epoch Calendar**. This document bridges the gap between the AI-generated codebase and human understanding, explaining *why* it was built this way and *how* to maintain it.

---

## 1. System Architecture: The "Brain"

The application is a Single Page Application (SPA) built with the modern React stack.

### Tech Stack
-   **Framework**: React 19 + Vite (Fast, modular).
-   **Language**: TypeScript (Strict typing for 3,000+ years of history).
-   **Styling**: Tailwind CSS (Utility-first).
-   **3D Engine**: Three.js / React-Three-Fiber (For the "Warp Speed" cosmic background).
-   **Testing**: Vitest + JSDOM.

### Key Components
-   `App.tsx`: The conductor. Manages the global state (current year, active phase, active journey).
-   `Timeline.tsx`: The vertical scrolling engine. It does not use standard scrolling; it uses a virtualized coordinate system to handle deep time.
-   `CinematicHUD.tsx`: The "Documentary Mode" overlay. Handles the dynamic text updates and "Netflix-style" progress bars.
-   `TimeScaleEngine.ts`: **The Core Algorithm** (See below).

---

## 2. The Core Challenge: The Scale of Time

How do you show the Big Bang (13.8 Billion Years Ago) and the iPhone (2007) on the same screen?
If you used a linear scale, and 1 pixel = 1 year:
-   The timeline would be **13.8 billion pixels long**.
-   You would scroll for 100 years and still be in empty space.

### The Solution: `TimeScaleEngine.ts`
We use a **Hybrid Logarithmic-Linear Scale**:

1.  **The Deep Time Zone** (13.8 BYA -> 12,000 Years Ago)
    -   Uses a **Logarithmic Scale**.
    -   Compresses billions of years into the top 20% of the screen.
    -   This allows the "Cosmic Origins" and "Evolution" events to fit visibly.
    
2.  **The Human History Zone** (12,000 Years Ago -> Present)
    -   Uses a **Linear Scale**.
    -   Occupies the bottom 80% of the screen.
    -   This preserves the density and relative spacing of civilization, ensuring the Roman Empire and WWII don't feel "rushed."

**Takeaway**: When debugging scroll positions, always check `TimeScaleEngine.ts`.

---

## 3. The "Factory": Content Pipeline

We moved from manually editing 3,000 lines of code to a semi-automated pipeline.

### The Workflow
1.  **Draft**: Humans (or AI) write a simple JSON draft in `content/drafts/`.
    ```json
    {
      "journeyId": "medicine",
      "title": "The Cure",
      "events": [...]
    }
    ```
2.  **Scaffold**: Run the CLI tool.
    ```bash
    npx tsx scripts/scaffold.ts content/drafts/medicine.json
    ```
    -   Start strictly typed events in `data/allEvents.ts`.
    -   Generates ID-based connection logic.
    -   **Auto-Generates Image Placeholders** so the build never fails on missing assets.

3.  **Deploy**: The CI pipeline validates everything.

---

## 4. Reliability & CI

We enforce quality through code, not just policy.

### The "Inspector" (CI Pipeline)
Located in `.github/workflows/ci.yml`. It runs on every push.

**The 5 Golden Rules Enforced by Tests:**
1.  **The "30-Event" Rule**: Every journey MUST have at least 30 events.
2.  **The "No Ghost" Rule**: Every event MUST have a corresponding image file on disk.
3.  **The "No Clone" Rule**: No two events in the same journey can reuse the same image file.
4.  **The "Thumbnail" Rule**: Every journey MUST have a cover image.
5.  **The "Complete Data" Rule**: Events must have a valid `phase` and `category` from the allowed list.
6.  **The "Causality" Rule**: Journeys must have a valid `connections` array linking events together.
7.  **The "Visual Integrity" Rule**: All journeys must pass the offline atlas generation test (`tests/visual.test.ts`).

### Visual Verification (Offline Atlas)
We generate composite "Atlases" (long strips of all event images) to verify narrative flow without clicking through the UI.
-   **Run**: `npx vitest tests/visual.test.ts`
-   **Output**: `verification_artifacts/[journey-id]_composite.jpg`
-   **Audit**: Review these artifacts to catch missing images or context mismatches.

To run these checks locally:
```bash
npm test
```

---

## 6. Deployment to Production

The site is deployed to [aalam.xyz](https://aalam.xyz) via GitHub Pages.

### Quick Deploy
```bash
npm run deploy
```

This builds the production bundle and pushes to the `gh-pages` branch.

### Robust Deployment with Verification

For critical deployments, use the workflow `/deploy` which includes verification:

1. **Build & Deploy**: Run `npm run deploy`
2. **Wait**: Allow 45-60 seconds for GitHub Pages to update
3. **Verify deployment registered**:
   ```bash
   gh api repos/1955mars/AalamEpochCalendar/deployments --jq '.[0] | {created_at, sha: .sha[0:7]}'
   ```
4. **Verify live site responds**:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" https://aalam.xyz/
   ```
   Should return `200`.

### Common Deployment Issues

| Issue | Solution |
| :--- | :--- |
| Old deployment timestamp in API | `gh-pages` pushes directly to branch; GitHub Pages picks it up within 1-2 minutes |
| Site returns old content | Hard refresh (Cmd+Shift+R) or clear CDN cache; wait 2-3 minutes |
| Deployment not triggering | Check `gh-pages` branch: `git log origin/gh-pages -1` |
| Build fails | Run `npm run build` first to catch errors before deploying |

### All-in-One Verification Command
```bash
npm run deploy && sleep 45 && curl -s -o /dev/null -w "Site: %{http_code}\n" https://aalam.xyz/ && gh api repos/1955mars/AalamEpochCalendar/deployments --jq '"Deploy: " + .[0].created_at'
```

---

## 7. Maintenance Cheatsheet

| I want to... | Do this... |
| :--- | :--- |
| **Add a Journey** | Create a JSON draft and run `scaffold.ts`. |
| **Fix a Typos** | Edit `data/allEvents.ts` directly (Ctrl+F is your friend). |
| **Change the Era Colors** | properties are in `constants.ts` (PHASES array). |
| **Debug Scrolling** | Look at `utils/TimeScaleEngine.ts` (getPosition). |
| **Deploy** | Run `npm run deploy` or use `/deploy` workflow for verification. |

---

*Generated by Antigravity Agent for Human Reviewers.*
