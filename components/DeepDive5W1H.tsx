import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { X, ChevronRight, Sparkles, MessageCircle, ArrowLeft, Send } from 'lucide-react';

interface DeepDive5W1HProps {
    event: TimelineEvent | null;
    isOpen: boolean;
    onClose: () => void;
    onSpinoff?: (journeyTitle: string) => void;
}

interface ExplorationPath {
    id: string;
    question: string;
    icon: string;
    content: string;
    spinoff?: { title: string; description: string; };
}

interface EventExploration {
    paths: ExplorationPath[];
}

// Pre-populated demo content — each event gets 3 curated paths
const DEMO_CONTENT: Record<string, EventExploration> = {
    'mate-pill': {
        paths: [
            {
                id: 'why',
                question: 'Why did this change everything?',
                icon: '💡',
                content: `The Pill wasn't just contraception — it was a revolution in female autonomy.

**Before the Pill:**
• Women had 3-4 children on average
• Marriage age was 20, college was rare for women
• "Career woman" was an oddity

**After the Pill:**
• Birth rates dropped 50% by 1980
• Women's workforce participation jumped from 34% to 57%
• Average marriage age rose to 25
• Women earned more degrees than men by 2000

The Pill didn't just prevent pregnancy — it created the modern woman.`,
                spinoff: { title: 'The Reproductive Revolution', description: 'From the Pill to IVF' }
            },
            {
                id: 'who',
                question: 'Who made this possible?',
                icon: '👥',
                content: `Four unlikely allies created the Pill:

**Margaret Sanger** — The 70-year-old activist who'd been fighting for birth control since 1914. She had the vision.

**Katharine McCormick** — The millionaire heiress who smuggled diaphragms from Europe. She had the money ($2M+).

**Gregory Pincus** — The disgraced scientist who'd been fired for "playing God" with test-tube rabbits. He had the science.

**John Rock** — The devout Catholic doctor who believed the Pill was "natural." He had the credibility.

Together, they did what seemed impossible.`
            },
            {
                id: 'how',
                question: 'How did they test it?',
                icon: '🔬',
                content: `The trials were conducted in Puerto Rico — and the ethics were questionable.

**Why Puerto Rico?**
• Contraception was legal there (illegal in most US states)
• Large population of poor women in housing projects
• Researchers could access "motivated" subjects

**The Problems:**
• Women weren't told they were in an experiment
• Side effects (nausea, blood clots) were downplayed
• Three women died during trials — largely ignored
• Doses were 10x higher than necessary

The Pill saved millions of women — but its creation came at a cost.`,
                spinoff: { title: 'Medical Ethics', description: 'The dark side of pharmaceutical trials' }
            }
        ]
    },
    'p1-1': { // Big Bang
        paths: [
            {
                id: 'what',
                question: 'What actually happened?',
                icon: '💥',
                content: `In the first second, the entire universe was smaller than an atom — infinitely hot, infinitely dense.

**0 to 10⁻⁴³ seconds:** Physics breaks down. We don't know what happened.

**10⁻³⁶ seconds:** The universe inflates faster than light. A grain of sand becomes larger than the observable universe.

**1 second:** Protons and neutrons form. The universe is a quark soup at 10 billion degrees.

**3 minutes:** Hydrogen and helium nuclei form. The universe is still too hot for atoms.

**380,000 years:** Finally cool enough for atoms. Light breaks free. This is the "baby picture" we see today as cosmic microwave background.

Everything you've ever seen — stars, planets, people — came from this.`
            },
            {
                id: 'before',
                question: 'What came before?',
                icon: '❓',
                content: `This is the deepest question in physics — and we don't have an answer.

**The problem:** Time itself began with the Big Bang. Asking "what came before" may be like asking "what's north of the North Pole."

**Theories:**
• **Quantum fluctuation** — The universe popped into existence from nothing, allowed by quantum mechanics
• **Cyclic universe** — Big Bangs happen repeatedly, universe expands then contracts
• **Multiverse** — Our universe is one bubble in an infinite foam of universes
• **Simulation** — (Seriously proposed) We're a computation in something else

The honest answer: We don't know. And we may never know.`,
                spinoff: { title: 'The Fabric of Reality', description: 'Theories of everything' }
            },
            {
                id: 'how-know',
                question: 'How do we know this happened?',
                icon: '🔭',
                content: `Three pieces of evidence convinced almost all scientists:

**1. The Universe is Expanding (1929)**
Edwin Hubble showed that galaxies are moving away from us — and from each other. Run the film backward, and everything converges to a single point.

**2. Cosmic Microwave Background (1965)**
Penzias and Wilson accidentally discovered radiation coming from everywhere — the "afterglow" of the Big Bang, still visible 13.8 billion years later.

**3. Element Abundances**
The universe is 75% hydrogen, 25% helium — exactly what Big Bang nucleosynthesis predicts. No other theory explains this.

The Big Bang isn't speculation. It's the only theory that fits all the evidence.`
            }
        ]
    },
    'mate-stonewall': {
        paths: [
            {
                id: 'why-then',
                question: 'Why did they fight back that night?',
                icon: '⚡',
                content: `Gay bars were raided all the time. Why was June 28, 1969 different?

**The Judy Garland Factor:**
Her funeral was that afternoon. Thousands mourned. Many Stonewall patrons went from the funeral to the bar, already emotional.

**The Heat:**
Summer 1969 was brutal. Tensions were high. The counterculture was peaking.

**The Crowd:**
That night's patrons were mostly street kids, drag queens, and people with nothing to lose. Not the "respectable" gays who'd followed the Mattachine Society's quiet strategy.

**The Tipping Point:**
When cops shoved a handcuffed lesbian into a paddy wagon, she shouted: "Why don't you guys do something?" 

They did.`
            },
            {
                id: 'who-led',
                question: 'Who led the resistance?',
                icon: '✊',
                content: `The rebellion was led by the most marginalized — and history nearly forgot them.

**Marsha P. Johnson** — Black trans woman, 24 years old. She said she threw the first brick. (Some dispute this.) After Stonewall, she co-founded STAR to help homeless queer youth.

**Sylvia Rivera** — Latina trans woman, 17 years old. Fighting police at 2am. She spent the rest of her life advocating for trans rights.

**Stormé DeLarverie** — Biracial butch lesbian, possibly 47. Some say her arrest and shout sparked the uprising.

For decades, mainstream gay rights organizations downplayed their role. "Straight-acting" gays were more palatable. These women were almost erased.

Pride exists because they fought.`,
                spinoff: { title: 'Trans History', description: 'The forgotten pioneers' }
            },
            {
                id: 'what-changed',
                question: 'What changed after?',
                icon: '🌈',
                content: `Before Stonewall, the strategy was assimilation. After, it was liberation.

**Within a month:**
The Gay Liberation Front formed — radical, confrontational, proud.

**One year later (June 1970):**
The first Pride marches in NYC, LA, San Francisco, and Chicago. Not parades — protests.

**Legal changes:**
• 1973: Homosexuality removed from DSM
• 1974: First openly gay elected official (Kathy Kozachenko)
• 2003: Lawrence v. Texas decriminalizes gay sex nationwide
• 2015: Obergefell v. Hodges legalizes same-sex marriage

The arc is 46 years from riot to marriage equality.`
            }
        ]
    }
};

type ViewState = 'paths' | 'content' | 'ask';

const DeepDive5W1H: React.FC<DeepDive5W1HProps> = ({ event, isOpen, onClose, onSpinoff }) => {
    const [view, setView] = useState<ViewState>('paths');
    const [selectedPath, setSelectedPath] = useState<ExplorationPath | null>(null);
    const [userQuestion, setUserQuestion] = useState('');

    if (!isOpen || !event) return null;

    const exploration = DEMO_CONTENT[event.id];
    const hasContent = exploration !== undefined;

    const handlePathClick = (path: ExplorationPath) => {
        setSelectedPath(path);
        setView('content');
    };

    const handleBack = () => {
        setView('paths');
        setSelectedPath(null);
    };

    const handleAskSubmit = () => {
        // For prototype, just show a placeholder response
        alert(`Great question! In the full version, AI will answer:\n\n"${userQuestion}"\n\nThis feature is coming soon.`);
        setUserQuestion('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">

                {/* Header */}
                <div className="relative shrink-0 p-6 border-b border-white/10">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-1">
                                {event.year} • Deep Dive
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                                {event.title}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Back button when viewing content */}
                    {view !== 'paths' && (
                        <button
                            onClick={handleBack}
                            className="mt-4 flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Back to questions
                        </button>
                    )}
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">

                    {/* Paths View - 3 curated questions + 1 open prompt */}
                    {view === 'paths' && (
                        <div className="space-y-4">
                            {hasContent ? (
                                <>
                                    <p className="text-white/60 text-sm mb-6">Choose a question to explore:</p>

                                    {/* 3 Curated Paths */}
                                    {exploration.paths.map((path) => (
                                        <button
                                            key={path.id}
                                            onClick={() => handlePathClick(path)}
                                            className="w-full text-left p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group flex items-center gap-4"
                                        >
                                            <span className="text-3xl">{path.icon}</span>
                                            <span className="flex-1 text-white font-medium text-lg">{path.question}</span>
                                            <ChevronRight size={20} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                                        </button>
                                    ))}

                                    {/* Open Prompt */}
                                    <button
                                        onClick={() => setView('ask')}
                                        className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-purple-500/20 hover:border-purple-500/40 transition-all group flex items-center gap-4"
                                    >
                                        <span className="text-3xl">🤔</span>
                                        <span className="flex-1">
                                            <span className="text-white font-medium text-lg block">Ask your own question</span>
                                            <span className="text-white/40 text-sm">AI-powered exploration</span>
                                        </span>
                                        <MessageCircle size={20} className="text-purple-400/50 group-hover:text-purple-400 transition-all" />
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-64 text-white/50">
                                    <Sparkles size={48} className="mb-4 opacity-30" />
                                    <p className="text-lg font-medium">Deep Dive Coming Soon</p>
                                    <p className="text-sm mt-2">AI-powered exploration for this event</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Content View - Show answer to selected path */}
                    {view === 'content' && selectedPath && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">{selectedPath.icon}</span>
                                <h3 className="text-xl font-bold text-white">{selectedPath.question}</h3>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none">
                                {selectedPath.content.split('\n\n').map((paragraph, i) => {
                                    // Handle markdown-style bold
                                    const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                    // Handle bullet points
                                    if (paragraph.startsWith('•')) {
                                        return (
                                            <ul key={i} className="list-none space-y-1 my-4">
                                                {paragraph.split('\n').map((line, j) => (
                                                    <li key={j} className="flex items-start gap-2 text-white/70">
                                                        <span className="text-blue-400 mt-1.5">•</span>
                                                        <span dangerouslySetInnerHTML={{ __html: line.replace('• ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return (
                                        <p key={i} className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
                                    );
                                })}
                            </div>

                            {/* Spinoff suggestion */}
                            {selectedPath.spinoff && (
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Sparkles size={14} /> Continue Exploring
                                    </div>
                                    <button
                                        onClick={() => onSpinoff?.(selectedPath.spinoff!.title)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all group w-full text-left"
                                    >
                                        <span className="text-2xl">🚀</span>
                                        <span className="flex-1">
                                            <span className="text-white font-medium block">{selectedPath.spinoff.title}</span>
                                            <span className="text-white/40 text-sm">{selectedPath.spinoff.description}</span>
                                        </span>
                                        <ChevronRight size={20} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Ask View - Open prompt */}
                    {view === 'ask' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">🤔</span>
                                <h3 className="text-xl font-bold text-white">Ask anything about this event</h3>
                            </div>

                            <p className="text-white/60 mb-6">
                                What would you like to know about <strong className="text-white">{event.title}</strong>?
                            </p>

                            <div className="relative">
                                <textarea
                                    value={userQuestion}
                                    onChange={(e) => setUserQuestion(e.target.value)}
                                    placeholder="e.g., What were the long-term consequences? Who opposed this? How is this relevant today?"
                                    className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 resize-none"
                                />
                                <button
                                    onClick={handleAskSubmit}
                                    disabled={!userQuestion.trim()}
                                    className="absolute bottom-4 right-4 p-2 bg-purple-500 hover:bg-purple-400 disabled:bg-white/10 disabled:text-white/30 text-white rounded-lg transition-all"
                                >
                                    <Send size={18} />
                                </button>
                            </div>

                            <p className="text-white/40 text-sm mt-4">
                                <Sparkles size={14} className="inline mr-1" />
                                Powered by AI — answers are generated in real-time
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DeepDive5W1H;
