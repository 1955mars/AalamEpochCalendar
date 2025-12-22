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

### 2. Gather Events (Storytelling)
- **Goal**: Curate a list of events that narrate a connected story.
- **Action**: Check `data/allEvents.ts` first.
    - If events exist, note their `id`.
    - If not, create new `TimelineEvent` objects in `allEvents.ts`.
    - **Crucial**: Ensure each event has a descriptive `title` and `description` that fits the narrative.

### 3. Define Scope & Narrative (Deep Dive)
- **Goal**: Decide on the length and depth.
    - **Short Story**: 5-10 events (High-level overview).
    - **Deep Dive**: 15-20+ events (Detailed exploration).
- **Action**: Update the `Journey` object in `data/journeys.ts`.
    - `title`: Catchy title.
    - `description`: Brief summary of the journey.
    - `eventIds`: Ordered list of event IDs.
    - **Overrides (New)**: If an event's generic description doesn't fit your specific story, use the `overrides` property in the `Journey` object to rename it or rewrite the description JUST for this journey.

### 4. Media Preparation (The "Localize" Protocol)
- **Goal**: ensure every event has a visual, but AVOID rate limits and external dependencies in production.
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
    5.  **Verify**: Visit the live site and ensure your new journey works.

## Protocol: Infinite Expansion (When the Tracker is Empty)
If `docs/PROJECT_TRACKER.md` has no "ToDo" items:
1.  **Autonomous Research**: Identify a gap in the timeline (e.g., "We have Art and Tech, but what about the History of Medicine?").
2.  **Propose**: Create a new entry in `docs/PROJECT_TRACKER.md` with status 🔴 (Todo).
3.  **Execute**: Follow the 5-step Creation Workflow to build it.
4.  **Connect**: Find at least 3 connections between your new journey and existing events to strengthen the "Golden Thread".


