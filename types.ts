
export interface TimelineEvent {
  id: string;
  year: string; // Can be a specific date or year
  title: string;
  description: string;
  imageUrl: string;
  phase?: string;
  type?: 'event' | 'phase_marker';
}

export interface GeneratedEventData {
  year: string;
  title: string;
  description: string;
  imageKeyword?: string;
}

export interface TimelineHandle {
  scrollToPhase: (phaseId: string) => void;
}
