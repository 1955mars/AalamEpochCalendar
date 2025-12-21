import { Journey } from './types'; // Kept generic or remove if unused. PHASES uses nothing from types.
// Ensuring we don't break types if PHASES relies on implicit types?
// Actually PHASES is just an array.
// But wait, allow me to check if I can just remove imports line entirely if unused.
import { } from './types';

export const PHASES = [
  { id: 'Phase 1', title: 'Cosmic & Primordial Earth', bg: 'bg-slate-200', startYear: -14000000000, endYear: -541000000 },
  { id: 'Phase 2', title: 'The Age of Ancient Life', bg: 'bg-orange-100', startYear: -541000000, endYear: -65000000 },
  { id: 'Phase 3', title: 'Hominid Evolution', bg: 'bg-emerald-100', startYear: -65000000, endYear: -10000 },
  { id: 'Phase 4', title: 'The Neolithic Revolution', bg: 'bg-amber-100', startYear: -10000, endYear: -3100 },
  { id: 'Phase 5', title: 'The Bronze Age', bg: 'bg-yellow-100', startYear: -3100, endYear: -1200 },
  { id: 'Phase 6', title: 'The Iron Age & Classical Age', bg: 'bg-rose-100', startYear: -1200, endYear: 6 },
  { id: 'Phase 7', title: 'The Post-Classical World', bg: 'bg-purple-100', startYear: 6, endYear: 1405 },
  { id: 'Phase 8', title: 'The Age of Exploration', bg: 'bg-blue-100', startYear: 1405, endYear: 1765 },
  { id: 'Phase 9', title: 'The Age of Revolutions', bg: 'bg-indigo-100', startYear: 1765, endYear: 1914 },
  { id: 'Phase 10', title: 'The Early 20th Century', bg: 'bg-teal-100', startYear: 1914, endYear: 1945 },
  { id: 'Phase 11', title: 'The Cold War Era', bg: 'bg-cyan-100', startYear: 1945, endYear: 1991 },
  { id: 'Phase 12', title: 'The Modern Digital Age', bg: 'bg-fuchsia-100', startYear: 1991, endYear: 2100 },
];


