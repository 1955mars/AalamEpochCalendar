# Architecture Audit: Connectivity & Future Expansion

## 1. Current State
We have a **Hybrid Linear-Graph** system.
- **Linear**: Journeys are primarily ordered lists of events (`eventIds`).
- **Graph**: We have a `connections` array in `types.ts` that defines edges (`caused`, `preceded`).

### Strengths
- **Simple**: Easy to author and debug.
- **Narrative-Driven**: Perfect for storytelling ("The History of Money").

### Weaknesses
- **Siloed Semantic Data**: `tags` exist on events but are unstructured strings (e.g., "Technology" vs "Tech").
- **Local Connectivity**: Connections are defined *per journey*. If "The Wheel" causes "Chariots" in the "War" journey, that link is not automatically visible in the "Transport" journey.
- **No Global Graph**: We cannot currently query "What are all the *effects* of the Printing Press?" across all journeys efficiently.

---

## 2. Recommendation: The "Semantic Web" Upgrade

To support future use cases like "Dynamic Exploration" or "AI-Generated Journeys", we need to upgrade the data model.

### A. Global Connection Index
Move connections out of `Journey` and into a global `data/allConnections.ts`.
```typescript
interface GlobalConnection {
  from: string; // Event ID
  to: string;   // Event ID
  type: 'caused' | 'influenced' | 'enabled';
  weight: number; // 0-1 strength of connection
  context?: string; // "crucial for"
}
```

### B. Structured Ontology (Tags)
Replace string[] tags with a strictly typed ontology.
```typescript
type Tag = 
  | { type: 'Topic', value: 'War' | 'Art' }
  | { type: 'Location', value: 'Europe' | 'Asia' }
  | { type: 'Entity', value: 'Rome' | 'Google' };
```

### C. "Smart" Journeys
Instead of hardcoding `eventIds`, future journeys could be queries:
```typescript
const industrialRevolution = queryEvents({
  timeRange: [1750, 1850],
  tags: ['Industry', 'Economics'],
  includeConnections: 'strong'
});
```

---

## 3. Verdict
**The system is structurally sound but "connectively silent."**
It supports manual curation well. To support "expanding use cases" (meaning discovery and non-linear exploration), we must prioritize **A. Global Connection Index** next.
