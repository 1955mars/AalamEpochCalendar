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

### 🔍 Narrative Review Workflow (Added Dec 23, 2025)
After implementing a journey, always run a narrative review:

1. **Print narrative**: `npx tsx scripts/print_journey_narrative.ts <journey-id>`
2. **Look for**:
   - Weak descriptions (< 20 words, no "So What?")
   - Events with generic titles
   - Off-topic events that break thematic flow
3. **Fix using**: Journey `overrides` for reused events, or edit `allEvents.ts` for new events
4. **Commit separately**: Use `fix(journey): Improve narrative quality` commit message

---

*Last updated: December 23, 2025*

