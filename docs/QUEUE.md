# Content Queue

This file tracks journey topics to be built. Agents should process items in order.

## Status Legend
- `[ ]` Not started
- `[/]` In progress
- `[x]` Completed (journey + carousel generated)

---

## Ready to Build

<!-- Add new journey topics here -->

## In Progress

<!-- Move topics here when an agent starts working on them -->

## ✅ Completed (26 Journeys)

- [x] cosmic-origins
- [x] evolution-of-life
- [x] ancestry-of-ai
- [x] history-of-art
- [x] money-illusion
- [x] to-the-stars
- [x] rise-of-civilizations
- [x] evolution-of-technology
- [x] gods-and-mortals
- [x] war-and-weapons
- [x] pandemics-and-plagues
- [x] women-who-changed-history
- [x] empires-of-trade
- [x] science-revolutions
- [x] philosophy-through-ages
- [x] silver-screen
- [x] level-up
- [x] food-on-your-plate
- [x] games-of-power
- [x] love-and-marriage
- [x] how-computer-works

---

## Adding New Topics

To add a new journey topic:

1. Add to "Ready to Build" section:
   ```markdown
   - [ ] topic-slug | Topic Title | Brief description
   ```

2. Agent workflow:
   - Follow `JOURNEY_GUIDE.md` to build the journey
   - Run tests: `npm test`
   - Generate carousel: `npx tsx scripts/generate-social.ts topic-slug`
   - Move to "Completed" when done
