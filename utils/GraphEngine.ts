import { ALL_CONNECTIONS } from '../data/allConnections';
import { ALL_EVENTS } from '../data/allEvents';
import { GlobalConnection, TimelineEvent } from '../types';

export class GraphEngine {
    private adjacencyList: Map<string, GlobalConnection[]> = new Map();
    private reverseAdjacencyList: Map<string, GlobalConnection[]> = new Map();
    private eventMap: Map<string, TimelineEvent> = new Map();

    constructor() {
        this.buildGraph();
    }

    private buildGraph() {
        // Index Events
        ALL_EVENTS.forEach(e => this.eventMap.set(e.id, e));

        // Index Connections
        ALL_CONNECTIONS.forEach(conn => {
            // Forward (Causes -> Effects)
            if (!this.adjacencyList.has(conn.fromEventId)) {
                this.adjacencyList.set(conn.fromEventId, []);
            }
            this.adjacencyList.get(conn.fromEventId)?.push(conn);

            // Reverse (Effects -> Causes)
            if (!this.reverseAdjacencyList.has(conn.toEventId)) {
                this.reverseAdjacencyList.set(conn.toEventId, []);
            }
            this.reverseAdjacencyList.get(conn.toEventId)?.push(conn);
        });
    }

    /**
     * What did this event cause? (Downstream)
     */
    public getEffects(eventId: string): { event: TimelineEvent, connection: GlobalConnection }[] {
        const connections = this.adjacencyList.get(eventId) || [];
        return connections
            .map(conn => {
                const event = this.eventMap.get(conn.toEventId);
                return event ? { event, connection: conn } : null;
            })
            .filter((item): item is { event: TimelineEvent, connection: GlobalConnection } => item !== null);
    }

    /**
     * What caused this event? (Upstream)
     */
    public getCauses(eventId: string): { event: TimelineEvent, connection: GlobalConnection }[] {
        const connections = this.reverseAdjacencyList.get(eventId) || [];
        return connections
            .map(conn => {
                const event = this.eventMap.get(conn.fromEventId);
                return event ? { event, connection: conn } : null;
            })
            .filter((item): item is { event: TimelineEvent, connection: GlobalConnection } => item !== null);
    }

    /**
     * Trace the causal chain back to the root (Recursive up to depth)
     */
    public traceAncestry(eventId: string, depth: number = 5): TimelineEvent[] {
        if (depth === 0) return [];

        const causes = this.getCauses(eventId);
        if (causes.length === 0) return [];

        // Simple DFS taking the first strong cause for linear lineage
        // Full graph traversal would return a tree, here we return a path example
        const primaryCause = causes[0];

        return [
            primaryCause.event,
            ...this.traceAncestry(primaryCause.event.id, depth - 1)
        ];
    }

    /**
     * Find the shortest path between two events using BFS.
     */
    public findPath(startId: string, endId: string): TimelineEvent[] | null {
        if (!this.eventMap.has(startId) || !this.eventMap.has(endId)) return null;
        if (startId === endId) return [this.eventMap.get(startId)!];

        const queue: { id: string, path: TimelineEvent[] }[] = [{
            id: startId,
            path: [this.eventMap.get(startId)!]
        }];
        const visited = new Set<string>([startId]);

        while (queue.length > 0) {
            const { id, path } = queue.shift()!;

            // Get effects (downstream)
            const effects = this.getEffects(id);
            for (const { event } of effects) {
                if (!visited.has(event.id)) {
                    visited.add(event.id);
                    const newPath = [...path, event];
                    if (event.id === endId) {
                        return newPath;
                    }
                    queue.push({ id: event.id, path: newPath });
                }
            }
        }
        return null;
    }
}
