# Aalam Engineering Review: Content Pipeline & Scalability

## 1. Executive Summary
The project has successfully launched with a solid core engine (`Timeline`, `CinematicHUD`) and high-quality initial content (~150 events). However, the current "hand-crafted" approach to adding content is hitting a scalability wall.
To achieve the goal of 30+ events per journey across 100+ planned journeys (3,000+ events), we must transition from manual TypeScript editing to a **Data-Driven Pipeline**.

## 2. Current Architecture & Bottlenecks

### 2.1 Data Management (🔴 High Friction)
- **Current State**: All events are hardcoded in `data/allEvents.ts` (3000+ lines). Journeys are manually defined in `data/journeys.ts`.
- **Bottlenecks**:
    - **Merge Conflicts**: Multiple journeys editing the same huge file.
    - **Fragility**: One missing comma breaks the build.
    - **Manual ID Management**: Risk of duplicate IDs or broken references.

### 2.2 Asset Workflow (🔴 Critical Bottleneck)
- **Current State**: Images are manually named (e.g., `money-cowrie.jpg`) and placed in `public/images/`.
- **Bottlenecks**:
    - **Synchronization**: `imageUrl` in code must strictly match the filename. Mismatches cause 404s.
    - **Placeholder Hell**: When generating images hits rate limits, manual copying/renaming of valid placeholders is tedious.
    - **No Audit**: `verify_assets.ts` is currently broken (Import errors).

### 2.3 Verification (🟡 Medium)
- **Current State**: `scripts/validateData.ts` checks for ID uniqueness and connection validity.
- **Gaps**: Does not verify image existence on disk. Does not verify "Quality" (min length of description, etc.).

## 3. Proposed Pipeline: "The Factory"

We will implement a semi-automated pipeline to accelerate content creation by 10x.

### Phase 1: Structured Input (JSON)
Instead of writing TS, we will define new journeys in a standardized JSON format.
**Example**: `content/drafts/history-of-medicine.json`
```json
{
  "journeyId": "medicine",
  "title": "The Cure",
  "events": [
    {
      "yearNumeric": -400,
      "title": "Hippocrates",
      "description": "...",
      "imagePrompt": "Ancient greek physician..."
    }
  ]
}
```

### Phase 2: The Scaffolder (`scripts/scaffold.ts`)
A new CLI tool that:
1.  **Ingests** the JSON draft.
2.  **Generates IDs** automatically (e.g., `medicine-hippocrates`).
3.  **Appends** strictly typed objects to `data/allEvents.ts` (using AST or clean string injection).
4.  **Assets**:
    -   Checks if `public/images/medicine-hippocrates.jpg` exists.
    -   If NO, creates a **visual placeholder** (with text overlay) or copies a generic fallback instantly.
5.  **Journey Def**: Appends the new journey to `data/journeys.ts`.

### Phase 3: Automated Verification
Fix and expand `scripts/validateData.ts` to:
-   Check `public/images/` for every single event.
-   Warn on short descriptions or missing categories.

## 4. Action Plan

1.  **Fix Toolchain**: Repair `scripts/verify_assets.ts` immediately.
2.  **Create Scaffolder**: Build `scripts/scaffoldJourney.ts` to handle the repetitive tasks.
3.  **Migrate to JSON (Optional)**: Eventually, move `ALL_EVENTS` to a JSON file loaded at runtime or build time to decouple data from logic.

## 5. Decision Required
Do you approve the creation of the **Scaffolder Tool** and the **Asset Repair** task?
