
export interface TimelineEvent {
  id: string;
  year: string;
  yearNumeric: number; // Negative for BC/Ago, Positive for AD/Future. e.g. -13800000000 (13.8 BYA) or 2024
  title: string;
  description: string;
  imageUrl?: string;
  type?: 'event' | 'phase_marker';
  category?: EventCategory;
  phase?: string; // Legacy/Migration
  tags?: string[]; // For semantic relationships and search
}

export type EventCategory = 'Cosmology' | 'Life' | 'Humanity' | 'Civilization' | 'Science' | 'Technology' | 'Communications' | 'Transport' | 'Art' | 'Philosophy';

export interface PhaseDefinition {
  id: string;
  title: string;
  bg: string;
  startYear: number;
  endYear: number;
}


export interface Connection {
  id: string;
  fromEventId: string;
  toEventId: string;
  type: 'caused' | 'preceded' | 'related';
  description?: string;
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  eventIds: string[]; // The ordered list of events in this journey
  connections: Connection[]; // Specific connections to highlight in this journey
  overrides?: Record<string, {
    title?: string;
    description?: string;
  }>;
}

export interface GeneratedEventData {
  year: string;
  title: string;
  description: string;
  imageKeyword?: string;
}

export interface TimelineHandle {
  scrollToPhase: (phaseId: string) => void;
  scrollToEvent: (eventId: string) => void;
}
