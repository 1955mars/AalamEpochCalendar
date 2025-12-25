# Journey Creation & Verification Guide

This document captures learnings from the December 2023 content audit and provides a comprehensive guide for creating and verifying new journeys.

---

## 1. Journey Structure

A journey consists of:

```typescript
{
  id: 'journey-id',           // kebab-case unique identifier
  title: 'Display Title',      // User-facing title
  description: 'Description',  // One-liner for homepage card
  thumbnailUrl: 'images/xxx.jpg',
  eventIds: ['event-1', ...],  // Ordered list of event IDs
  connections: CONNECTIONS.filter(c => c.id.startsWith('prefix-')),
  overrides: {}                // Optional event-specific title/description overrides
}
```

### Connection Types
- `caused`: Direct causation (A led to B)
- `preceded`: Temporal sequence (A came before B)
- `related`: Thematic/parallel connection

---

## 2. Quality Checklist for New Journeys

### ✅ Narrative Quality
- [ ] Every event has a cinematic "So What?" description (not just facts)
- [ ] Descriptions answer: "Why should the viewer care?"
- [ ] Opening events are especially strong (they set the hook)
- [ ] No orphan events (every event must be connected)

### ✅ Temporal Cohesion
- [ ] No unexplained time gaps > 500 years (medieval era gap was 880 years—bad)
- [ ] Events flow logically from cause to effect
- [ ] Connection types accurately reflect relationships

### ✅ Image Validation
- [ ] Every event has an existing image file (> 5KB)
- [ ] **CRITICAL: Images must visually match the event content**
  - Example failure: "Formation of First Oceans" had a dinosaur image
  - Automated tests check file size, NOT semantic accuracy
- [ ] Images should be cinematic, high-quality (> 20KB typical)

### ✅ Geographic/Cultural Balance
- [ ] Journey includes global perspectives (not just Western history)
- [ ] Major civilizations represented: China, India, Middle East, Africa, Americas

---

## 3. Verification Commands

```bash
# Quick verify (data + narrative tests)
npm run verify

# Full verify (tests + build)
npm run verify:full

# Validate images (missing, size, duplicates)
npm run verify:images
npm run verify:images cosmic-origins  # specific journey

# Generate visual atlas for manual review
npm run verify:atlas <journey-id>

# Regenerate images
npm run regenerate:images <journey-id>       # all images for journey
npm run regenerate:images <event-id> [...]   # specific events
npm run regenerate:images --missing          # only missing/corrupt
```

---

## 4. Common Pitfalls

### ❌ Time Gaps
**Problem:** Rise of Civilizations jumped from 570 CE (Muhammad) to 1450 CE (Printing Press)  
**Solution:** Added medieval events (Umayyad, Crusades, Mongols, Black Death)

### ❌ Wrong Images
**Problem:** cosmic-25.jpg showed dinosaurs for "Formation of First Oceans" (4.4 BY ago)  
**Solution:** Regenerated with accurate early Earth imagery  
**Lesson:** Always manually spot-check images for semantic accuracy

### ❌ Weak Descriptions
**Problem:** "Aristotle creates formal logic" (who cares?)  
**Solution:** "A Greek man invents a system for distinguishing truth from nonsense—a machine for thought."

### ❌ Orphan Events
**Problem:** Events added to `eventIds` but not to `connections`  
**Solution:** Every new event needs at least one connection

---

## 5. Image Generation Guidelines

When regenerating images, use prompts that include:

1. **Time period accuracy**: "4.4 billion years ago, before any life"
2. **No anachronisms**: "no dinosaurs, no plants, no humans"
3. **Visual style**: "cinematic astronomical art style" or "historical illustration"
4. **Specific imagery**: "volcanic rocks, steam, torrential rain"

Example prompt:
```
Early Earth 4.4 billion years ago, formation of first oceans, 
ancient barren rocky landscape with steam rising, dark storms 
overhead with torrential rain falling onto hot volcanic rocks, 
water beginning to pool in basins, primordial Earth before any life, 
no dinosaurs, no plants, just rock and water and steam, 
dramatic lighting, cinematic astronomical art style
```

---

## 6. Adding a New Journey

1. **Design phase**
   - Select events from `allEvents.ts` that tell a coherent story
   - Ensure no time gaps > 500 years without justification
   - Plan connections (minimum: linear chain through all events)

2. **Implementation**
   - Add `eventIds` array to `journeys.ts`
   - Add connections with unique prefix (e.g., `myj-1`, `myj-2`)
   - Set appropriate connection types

3. **Verification**
   - Run `npx vitest run tests/narrative.test.ts`
   - Run `npx tsx scripts/stitch_atlas.ts <journey-id>`
   - **Manually review atlas for image relevancy**
   - Test in browser with documentary mode

4. **Commit with message format**
   ```
   feat(content): Add <Journey Name> journey (<N> events)
   ```

---

## 7. Phase Reference

| Phase | Era | Years |
|:------|:----|:------|
| 1 | Cosmic Origins | 13.8 BY - 3.8 BY ago |
| 2 | Evolution of Life | 3.8 BY - 66 MY ago |
| 3 | Age of Mammals | 66 MY - 300,000 years ago |
| 4 | Ancient Prehistory | 300,000 - 3000 BCE |
| 5 | Bronze Age | 3000 - 1200 BCE |
| 6 | Classical Antiquity | 1200 BCE - 500 CE |
| 7 | Medieval Period | 500 - 1500 CE |
| 8 | Age of Exploration | 1400 - 1750 CE |
| 9 | Age of Revolutions | 1750 - 1914 CE |
| 10 | World Wars | 1914 - 1945 |
| 11 | Cold War | 1945 - 1991 |
| 12 | Digital Age | 1991 - Present |

---

## 8. Best Practices & Learnings
(Added Dec 2023)

### 🖼️ Asset Management
- **Thumbnails**: Always check `journey.thumbnailUrl` separately from event lists. The `regenerate_images.ts` script now auto-generates them as "Journey Cover" items, but they must be defined in `journeys.ts` first.
- **Verification**: Trust `npm run verify:images` over manual checks. It validates file existence, size (>5KB), and duplicates.
- **Placeholders**: If an image API fails repeatedly (e.g., 502 errors), use an existing relevant image as a temporary placeholder to unblock testing, but document it as a "Known Issue" in your walkthrough/PR.

### 🛠️ Tooling
- **`regenerate_images.ts`**: 
  - Iterates over `journey.eventIds`.
  - NOW includes `journey.thumbnailUrl` in the queue.
  - Supports `--missing` flag to fix gaps without re-doing everything.
- **`verify:images`**: Failing checks here will break CI/CD. Ensure it passes before pushing.

### 📝 Content Quality Checks
- **Review Narrative Flow**: After implementation, inspect `npx tsx scripts/print_journey_narrative.ts <journey-id>` output.
- **Remove Off-Topic Events**: If an event breaks thematic flow (e.g., Copernicus in a medical journey), remove it.
- **Rewrite Weak Descriptions**: Look for terse descriptions like "Global lockdowns and vaccines" and expand them with the "Big History Narrator" voice.

### 🏠 Homepage Order
- Journeys appear in the order they are defined in the `JOURNEYS` array.
- **Recommended order**: Chronological by scope (Cosmic → Life → Civilizations → Modern).
- Newly added journeys go at the **end** of the array unless you deliberately reorder.

### ✨ Journey Overrides (Added Dec 23, 2025)
When reusing existing events in a new journey, their descriptions may not fit the narrative. Use `overrides` in the journey definition:

```typescript
{
    id: 'gods-mortals',
    eventIds: ['p6-16', 'p7-2', ...],
    overrides: {
        'p6-16': { 
            title: 'The Buddha Awakens',
            description: 'The Middle Way. A prince abandons his palace...' 
        },
        'p7-2': { 
            title: 'The Crucifixion',
            description: 'Death Becomes Life. A Jewish rabbi is executed...' 
        }
    }
}
```

**When to use overrides:**
- Existing event description is too terse (e.g., "Foundational event of Christianity")
- Event title doesn't fit the journey's narrative angle  
- Description lacks the "Big History Narrator" voice

### 🔍 Two-Pass Narrative Review (Required Before Deployment)

> ⚠️ **MANDATORY**: Every new journey MUST go through a two-pass narrative review before being considered complete. Do NOT deploy after only one pass.

#### The Two-Pass Review Process

```
Pass 1: Review → Fix weak descriptions
Pass 2: Review again → Fix remaining issues (chronology, flow, etc.)
Deploy only after Pass 2 is clean
```

---

#### Pass 1: Initial Narrative Review

**Step 1.1: Print the Narrative**
```bash
npx tsx scripts/print_journey_narrative.ts <journey-id>
```

**Step 1.2: Identify Issues**

| Issue Type | Example | Fix |
|:-----------|:--------|:----|
| **Too terse** | "Bloody trench warfare battle" | Rewrite with narrative voice |
| **No "So What?"** | "Allies land in Normandy" | Add historical significance |
| **Generic title** | "First Crusade Called" | Use expressive title: "Holy War Begins" |
| **Chronological error** | 1847 event after 1854 event | Reorder in eventIds |

**Step 1.3: Apply Fixes**
- Reused events → Use `overrides` in journey definition
- New events → Edit directly in `allEvents.ts`
- Commit with message: `fix(<journey>): Improve narrative quality`

---

#### Pass 2: Verification Review

**Step 2.1: Print Narrative Again**
```bash
npx tsx scripts/print_journey_narrative.ts <journey-id>
```

**Step 2.2: Check for Remaining Issues**
- Confirm all weak descriptions are fixed
- Verify chronological order is correct
- Ensure no orphan events or missing connections

**Step 2.3: Final Verification**
```bash
npm run verify  # All 13 tests must pass
```

---

#### Deploy Only After Clean Pass 2

```bash
git push && npx gh-pages -d dist --no-history
```

**Example from Art of War journey:**
- Pass 1: Fixed 18 weak descriptions (Somme, D-Day, Pearl Harbor, etc.)
- Pass 2: Confirmed all fixes applied correctly
- Deployed after both passes clean

**Example from Pandemics & Plagues journey:**
- Pass 1: All descriptions already strong (good)
- Pass 2: Found chronological error (Semmelweis 1847 after Cholera 1854)
- Fixed and deployed after both passes

---

#### Writing Good Descriptions

Good descriptions follow this pattern:
```
[Hook/Tagline]. [The story]. [Why it matters].
```

**Examples:**
```
❌ "Allies land in Normandy"
✅ "The Longest Day. 150,000 Allied troops storm Normandy's beaches—the largest amphibious invasion in history begins the liberation of Europe."

❌ "Bloody trench warfare battle"
✅ "The Somme: Industrialized Death. 60,000 casualties in one day. British soldiers walk into machine gun fire, proving that courage is no match for technology."
```

---

*Last updated: December 24, 2025*

---

## 9. Agentic Workflow Tips (Dec 2025)

Learnings from building journeys in an agentic workflow:

### 🔢 Minimum Event Requirements

Tests enforce a **30-event minimum** per journey:
```bash
# This test will fail if journey has < 30 events:
# FAIL: Journey "Power Trip" has only 27 events
```

> [!IMPORTANT]
> **30 is the floor, not the target.** Let the narrative dictate the scope. Some topics naturally demand more events:
> - A cinema history journey might need 40+ events (silent era → talkies → global cinema → streaming)
> - A music history journey could hit 50+ events (bone flutes → Bach → streaming algorithms)
> 
> Don't artificially constrain to exactly 30—add events where the story needs them.

**Solution:** If you're short, add transitional events that strengthen the narrative (e.g., Oil Lamp between Fire and Water Wheel).

### 🔄 Image Generation Retry Strategy

The Pollinations API can return 502 errors. The `regenerate_images.ts` script has built-in retry (3 attempts per image), but some may still fail.

**Workflow:**
```bash
# Initial generation (may have failures)
npx tsx scripts/regenerate_images.ts power-trip

# Retry only failed/missing images
npx tsx scripts/regenerate_images.ts power-trip --missing
```

### 🔗 Connection ID Convention

Use a consistent prefix and sequential numbering:

```typescript
// Journey prefix: power-
{ id: 'power-1', fromEventId: 'power-fire', toEventId: 'power-hearth', type: 'preceded' },
{ id: 'power-2', fromEventId: 'power-hearth', toEventId: 'power-lamp', type: 'preceded' },
// ... continue numbering
```

**Tip:** When adding events mid-journey, you may need to renumber connections. It's easier to keep a gap (e.g., `power-1` through `power-30`) than to insert between existing IDs.

### 📋 Agentic Checklist Pattern

For consistent execution, follow this checklist structure:

```
## Planning
- [ ] Research existing events to reuse
- [ ] Create implementation plan
- [ ] Get user approval

## Execution  
- [ ] Add new events to allEvents.ts
- [ ] Add connections to journeys.ts
- [ ] Add journey definition
- [ ] Generate images (event + thumbnail)

## Verification
- [ ] npm run verify (all tests pass)
- [ ] Two-pass narrative review
- [ ] Update plannedJourneys.ts

## Deployment
- [ ] Commit changes
- [ ] Deploy to production
- [ ] Verify live site
```

### 📝 Event ID Naming

Use descriptive, prefixed IDs for easy filtering:

| Journey | Prefix | Example |
|---------|--------|---------|
| Power Trip | `power-` | `power-fire`, `power-watt` |
| Trade | `trade-` | `trade-obsidian`, `trade-voc` |
| Money | `money-` | `money-lydia`, `money-fed` |

This makes connection filtering trivial:
```typescript
connections: CONNECTIONS.filter(c => c.id.startsWith('power-'))
```
