# Agent Context: The Museum of Infinite Connections

## Vision: The Living Engine of Causality
**The Goal**: We are not just building a calendar; we are building a **procedural documentary generator** for the entire history of the universe.
- **Infinite Context**: We map the causal links between *everything*—from the Big Bang to the transistor.
- **Self-Expanding**: When the known "To-Do" list is empty, *you* (the Agent) are responsible for researching new topics, finding hidden connections, and weaving them into the master timeline.
- **Playable History**: We turn data into an emotive, cinematic narrative.

## 🚦 Start Here: Agent Onboarding
**Welcome, Agent.** To effectively contribute, identify your current role and follow the links:

## 🚦 Start Here: Agent Onboarding
**Welcome, Agent.** To effectively contribute, identify your current role and follow the links:

| Role | Responsibility | Starting Point |
| :--- | :--- | :--- |
| **Architect / Manager** | Task prioritization, status tracking, release planning. | [Project Tracker](file:///Users/mansoor/Aalam/Dev/EpochCalendar/docs/PROJECT_TRACKER.md) |
| **Content Creator** | Researching, writing, and implementing new Journeys. | [Content Plan](file:///Users/mansoor/Aalam/Dev/EpochCalendar/docs/RELEASE_CONTENT_PLAN.md) |
| **Developer** | Core engine, performance, mobile UX, component Refactoring. | `App.tsx` & `Timeline.tsx` |

## 🤝 Multi-Agent Collaboration Protocols
To prevent conflicts and ensure stability when multiple agents are working in parallel:

1.  **File Ownership**:
    - **`allEvents.ts`**: Shared file. *Append only* unless refactoring. Check for ID collisions.
    - **`journeys.ts`**: Shared file. Respect other agents' Journey objects.
    - **`Timeline.tsx`**: Critical Path. *Do not modify* without running core unit tests.

2.  **Conflict Resolution**:
    - **Run Validation First**: Always run `npx tsx scripts/validateData.ts` *before* starting work to ensure the repo is clean.
    - **Run Validation Last**: Always run the script again *after* changes to prove you didn't break referential integrity.
    - **Unit Tests**: Run `npm run test` (or `node tests/core.test.ts`) if touching core logic.

3.  **Communication**:
    - Update the [Project Tracker](file:///Users/mansoor/Aalam/Dev/EpochCalendar/docs/PROJECT_TRACKER.md) status columns (🔴 -> 🟡 -> 🟢) when you pick up a task.

## Core Data Architecture
The system uses a **Unified Data Model** centered around a single source of truth.

### 1. Events (`data/allEvents.ts`)
- **Single Source of Truth**: All events, from the Big Bang to the future, live here.
- **Key Property**: `yearNumeric`. This is used for all sorting and phase bucketing.
    - Negative = BC / Ago (e.g. -13800000000 for 13.8 BYA)
    - Positive = AD / CE
- **Tags**: Use semantic tags (e.g., `["communication", "invention"]`) to link ideas.

### 2. Phases (`constants.ts`)
- **Dynamic Bucketing**: Events are automatically grouped into Phases (e.g., "Cosmic & Primordial Earth") based on their `yearNumeric`.
- **Do NOT** hardcode phases on events anymore. If you add an event with `yearNumeric: 1969`, it will automatically land in "The Cold War Era".

### 3. Journeys (`data/journeys.ts`)
- **Curated Narratives**: A "Journey" is a specific story told through a subset of events.
- **How to Create**:
    - Define a new `Journey` object in `JOURNEYS`.
    - valid `eventIds` must be present in `ALL_EVENTS`.
    - Define `CONNECTIONS` to draw the "Golden Thread" between them.

## Best Practices for Agents
1.  **Adding Events**:
    - Always check if a similar event exists.
    - Calculate `yearNumeric` carefully (1 Billion = 1,000,000,000).
    - Use `(import.meta.env?.BASE_URL || '/') + 'images/...'` for images.

2.  **Modifying Code**:
    - **Timeline.tsx** is complex. It handles virtualization and dynamic scrolling. Be careful with hooks.
    - **Types**: Always respect `types.ts`.

    - Run `npx tsx scripts/validateData.ts` after modifying data to ensure no IDs are broken.

## Agent Workflow: Creating a New Journey (Timeline)
To create a new "Journey" (a specific narrative timeline), follow these 5 steps:

### 1. Research & Topic Selection
- **Goal**: Identify a compelling theme (e.g., "The Evolution of Flight" or "History of Mathematics").
- **Action**: detailed search for pivotal moments that define this topic.
- **Constraint**: Ensure the topic spans enough time to be visually interesting on the timeline.

### Step 2: Content Selection (The "So What?" Rule)
**CRITICAL:** We do not want a "Wikipedia summary" timeline. We want a narrative.
- **Selection**: Choose event IDs from `allEvents.ts`. If an event is missing, create it.
- **Narrative Arc**: Ensure the sequence tells a story (e.g., "Invention -> Adoption -> Consequence").
- **Quality Check**: For every event you select, check the description. Does it pass the **"So What?" Test**?
    - *Fail:* "The Printing Press was invented involved movable type."
    - *Pass:* "The Printing Press broke the church's monopoly on knowledge, fueling the Reformation and the Scientific Revolution."
    - **Action**: If an event description is dry, **REWRITE IT** in `allEvents.ts`.

### Step 3: Define Connections
- **File**: `data/journeys.ts`
- **Format**: Add entries to the `CONNECTIONS` array.
- **Philosophy**: Connections are the "synapses" of our brain. They explain *causality*.
    - Use `caused` for direct links (Fire -> Cooking).
    - Use `preceded` for loose chronological flow.
    - Use `related` for thematic parallels.
- **Naming**: Prefix connection IDs with the journey initials (e.g., `eot-1`, `roc-5`).

### Step 4: Add Journey Metadata
- **File**: `data/journeys.ts`
- **Structure**: Add a `Journey` object to the `JOURNEYS` array.
- **Fields**:
  - `id`: explicit slug (e.g., `evolution-of-technology`).
  - `title`: evocative and grand (e.g., "Wires & Waves").
  - `description`: a hook that promises an insight.
  - `thumbnailUrl`: path to a representative image (e.g., `images/p12-29.jpg`).
  - `eventIds`: order matters!
  - `connections`: filter the global list (e.g., `.filter(c => c.id.startsWith('eot-'))`.

### Step 5: Journey Thumbnail
- **Action**: Select a high-quality, evocative image from `public/images/` that represents the *essence* of the journey.
- **Implementation**: Add the `thumbnailUrl` property to the journey object in `journeys.ts`.
- **Verify**: Check the Home Menu to ensure the text is readable over the chosen image.

### Step 8: Verification
- **Visual**: Verify the timeline in the browser (`npm run dev`).
- **Data**: Check for missing images or broken connections.
- **Deploy**: Run `npm run deploy` to push to `gh-pages`.

### Step 7: Clean Up
- **Code**: Remove any "Coming Soon" placeholders in `HomeMenu.tsx`.
- **Docs**: Ensure `task.md` is complete.

## Content Guidelines: The "Aalam Voice"

To maintain quality, all agents must adhere to these writing standards:

1.  **Active Voice**: "Gutenberg invented the press" > "The press was invented by Gutenberg."
2.  **The "Insight" Ratio**: 20% Fact, 80% Consequence.
    - *Bad:* "Agriculture began 10,000 years ago."
    - *Good:* "Agriculture trapped humans in sedentary labor, but produced the caloric surplus needed to build the Pyramids."
3.  **Grandeur**: Use language that reflects the epic scale of deep time. Words like *shatter, ignite, forge, collapse, birth* are preferred over *start, make, end*.
4.  **Narrative Consistency (The "Connective Tissue" Rule)**:
    - A timeline fails if it alternates between "Epic" and "Textbook" sounds (the "Tone Stutter").
    - When you rewrite a key event, you must also check the events *immediately before and after it*.
    - **Action**: Smooth the transitions. If you write an epic description for the "Atomic Bomb", you typically must also rewrite the "UN Founded" event to match that gravity (e.g., "Humanity's response to the bomb" vs "A global organization").

### 4. Media Preparation (The "Localize" Protocol)
- **Goal**: ensure every every event has a visual, but AVOID rate limits and external dependencies in production.
- **Action**:
    1.  **Generate**: Use `generate_image` tool.
    2.  **Workaround (if Rate Limited)**: Use dynamic URLs in `data/allEvents.ts`:
        - `https://image.pollinations.ai/prompt/Your%20Prompt%20Here`
    3.  **Localize (MANDATORY)**: Before deployment, you MUST run a script to download these images to `public/images/`.
        - If script exists: `npx tsx scripts/downloadImages.ts`
        - If not: Create it.
    4.  **Reference**: Update `allEvents.ts` to use: `(import.meta.env?.BASE_URL || '/') + 'images/your-image.jpg'`.
    5.  **Journey Thumbnail**: Select a representative image for the journey card on the home page. Update `thumbnailUrl` in `journeys.ts`.

### 5. Inter-connections (The Golden Thread)
- **Goal**: Visually link the events to show cause-and-effect or thematic continuity.
- **Action**: Update `CONNECTIONS` in `data/journeys.ts`.
    - Define `source` (start event ID) and `target` (end event ID).
    - This renders the glowing lines on the customized timeline.
    - Run `npx tsx scripts/validateData.ts` to confirm all connections are valid.

### 6. End-User Simulation & Feedback (The Critic)
- **Goal**: Verify the "feel" and narrative flow from a user's perspective.
- **Action**:
    - **Persona**: Adopt the persona of a curious museum visitor.
    - **Simulate**: "Watch" the journey (read the events in order).
    - **Critique**:
        - Is the pacing right? (Too many dates in one decade? Too big a gap?)
        - Is the "Golden Thread" logic sound?
        - Are the visuals distinct?
    - **Iterate**: If the "User" finds boredom or confusion, go back to Step 2 or 5 and fix it.

### 7. Cleanup & Polish
- **Goal**: Ensure the UI is clean and professional.
- **Action**:
    - **Remove Duplicates**: Check `components/HomeMenu.tsx`. If you implemented a journey that was previously in the "Planned" list, **DELETE** the placeholder object from `PLANNED_JOURNEYS`.
    - **Validation**: Run `npx tsx scripts/validateData.ts` one last time.

### 8. Deployment (The "Go Live" Protocol)
- **Goal**: Publish your changes to the world (`aalam.xyz`).
- **Action**:
    1.  **Commit**: `git add . && git commit -m "feat: description"`
    2.  **Sync**: `git push origin main`
    3.  **Build**: `npm run build`
    4.  **Deploy**: `npm run deploy` (deploys to `gh-pages`)
    5.  **Verify & Polish**
        - Run `npm run verify-assets` to ensure all images are present.
        - Run `npm run build` and `npm run preview`.
        - Check the new journey in the browser.
        - Run the "Content Audit" on the new events.

## Protocol: Infinite Expansion (When the Tracker is Empty)
If `docs/PROJECT_TRACKER.md` has no "ToDo" items:
1.  **Autonomous Research**: Identify a gap in the timeline (e.g., "We have Art and Tech, but what about the History of Medicine?").
2.  **Propose**: Create a new entry in `docs/PROJECT_TRACKER.md` with status 🔴 (Todo).
3.  **Execute**: Follow the 5-step Creation Workflow to build it.

