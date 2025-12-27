# Social Automation Workflow

This document describes how to generate social media content from journeys.

## Prerequisites

- Node.js 18+
- Journey must exist in `data/journeys.ts`
- Journey events must exist in `data/allEvents.ts`
- Event images must exist in `public/images/`

## Quick Start

```bash
# Generate carousel for a single journey
npx tsx scripts/generate-social.ts <journeyId>

# Example
npx tsx scripts/generate-social.ts cosmic-origins
```

## Output

Each journey generates 6 files in `public/social/<journeyId>/`:

| File | Content |
|------|---------|
| `slide-1.png` | Thumbnail (journey title + description) |
| `slide-2.png` | Event 1 (first event) |
| `slide-3.png` | Event 2 (~33% through timeline) |
| `slide-4.png` | Event 3 (~66% through timeline) |
| `slide-5.png` | Event 4 (last event) |
| `slide-6.png` | CTA (link to documentary mode) |
| `caption.txt` | Ready-to-post caption with hashtags |

## Caption Generation

```bash
# Generate caption for all carousels that exist
npx tsx scripts/generate-caption.ts

# Or for a specific journey
npx tsx scripts/generate-caption.ts cosmic-origins
```

## Batch Generation

```bash
# Generate carousels for ALL journeys
npx tsx scripts/generate-all-social.ts
```

## Posting Workflow

### Manual (Current)
1. Open `public/social/<journeyId>/`
2. Upload slides 1-6 as Instagram carousel
3. Copy caption from `caption.txt`
4. Post

### Automated (Future)
- Meta Business Suite for scheduled posts
- Buffer API integration (requires Pro plan)

## File Locations

```
scripts/
├── generate-social.ts      # Main carousel generator
├── generate-all-social.ts  # Batch generator
└── generate-caption.ts     # Caption generator

public/
├── social/                 # Generated carousels
│   ├── cosmic-origins/
│   ├── evolution-of-life/
│   └── ...
└── fonts/
    └── Inter-Bold.ttf      # Required font
```

## Adding New Journeys

After creating a journey following `JOURNEY_GUIDE.md`:

1. Generate carousel:
   ```bash
   npx tsx scripts/generate-social.ts <new-journey-id>
   ```

2. Generate caption:
   ```bash
   npx tsx scripts/generate-caption.ts <new-journey-id>
   ```

3. Update `QUEUE.md` to mark as completed
