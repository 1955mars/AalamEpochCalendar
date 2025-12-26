import React, { useState, useRef, useEffect } from 'react';
import { TimelineEvent } from '../types';
import { ChevronRight, Sparkles, MessageCircle, ArrowLeft, Send, X } from 'lucide-react';

interface ExploreDropupProps {
    event: TimelineEvent | null;
    isOpen: boolean;
    onClose: () => void;
    onSpinoff?: (journeyId: string, journeyTitle: string) => void;
}

interface ExplorationPath {
    id: string;
    question: string;
    icon: string;
    content: string;
    spinoff?: { id: string; title: string; description: string; };
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
                spinoff: { id: 'women-of-history', title: 'Women of History', description: 'From suffrage to CEO' }
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

The Pill saved millions of women — but its creation came at a cost.`
            }
        ]
    },
    'mate-pair-bonding': {
        paths: [
            {
                id: 'why',
                question: 'Why did pair bonding evolve?',
                icon: '💡',
                content: `Human children are uniquely helpless. A baby deer walks within hours. A human baby can't walk for a year. Can't feed itself for years. Can't survive alone for over a decade.

**The Problem:**
• Human brains are huge (1400cc vs 400cc for chimps)
• Big brains need long development time
• Long development means extended helplessness

**The Solution:**
Two parents caring for offspring dramatically improved survival rates. Pair bonding wasn't about romance — it was about keeping babies alive.

**The Evidence:**
• Cultures with pair bonding have lower infant mortality
• Children with two caregivers have better outcomes
• Hormones like oxytocin reinforce the bond`,
                spinoff: { id: 'the-mating-game', title: 'The Mating Game', description: 'Evolution of love and family' }
            },
            {
                id: 'who',
                question: 'Who studied this phenomenon?',
                icon: '👥',
                content: `**Charles Darwin (1871)** first proposed sexual selection theory — that mate choice shapes evolution.

**Desmond Morris (1967)** wrote "The Naked Ape," arguing pair bonding was central to human evolution.

**Helen Fisher (1992)** — Anthropologist who identified the brain chemistry of love through MRI studies. Found that romantic love activates the same circuits as addiction.

**Robin Dunbar** — Proposed that human pair bonding evolved alongside larger social groups (Dunbar's Number: 150 stable relationships).`
            },
            {
                id: 'how',
                question: 'How does pair bonding work biologically?',
                icon: '🔬',
                content: `Your brain has a sophisticated system for creating and maintaining pair bonds:

**Phase 1: Attraction (dopamine)**
• Obsessive thoughts about partner
• Euphoria, energy, focus
• Similar to cocaine's effects

**Phase 2: Attachment (oxytocin + vasopressin)**
• Released during physical touch, sex, childbirth
• Creates calm, security, comfort
• Reduces cortisol (stress)

**Prairie voles vs Montane voles:**
Prairie voles are monogamous; montane voles are promiscuous. The difference? Prairie voles have more oxytocin receptors. Scientists injected montane voles with oxytocin genes — they became monogamous.

We're not so different from voles.`
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
• **Quantum fluctuation** — The universe popped into existence from nothing
• **Cyclic universe** — Big Bangs happen repeatedly
• **Multiverse** — Our universe is one bubble in infinite foam
• **Simulation** — We're a computation in something else

The honest answer: We don't know. And we may never know.`,
                spinoff: { id: 'cosmic-origins', title: 'Cosmic Origins', description: 'From Big Bang to first galaxies' }
            },
            {
                id: 'how-know',
                question: 'How do we know this happened?',
                icon: '🔭',
                content: `Three pieces of evidence convinced almost all scientists:

**1. The Universe is Expanding (1929)**
Edwin Hubble showed galaxies are moving away from us — and from each other. Run the film backward, and everything converges to a single point.

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
That night's patrons were mostly street kids, drag queens, and people with nothing to lose.

**The Tipping Point:**
When cops shoved a handcuffed lesbian into a paddy wagon, she shouted: "Why don't you guys do something?"

They did.`
            },
            {
                id: 'who-led',
                question: 'Who led the resistance?',
                icon: '✊',
                content: `The rebellion was led by the most marginalized — and history nearly forgot them.

**Marsha P. Johnson** — Black trans woman, 24 years old. She said she threw the first brick. After Stonewall, she co-founded STAR to help homeless queer youth.

**Sylvia Rivera** — Latina trans woman, 17 years old. Fighting police at 2am. She spent the rest of her life advocating for trans rights.

**Stormé DeLarverie** — Biracial butch lesbian. Some say her arrest and shout sparked the uprising.

For decades, mainstream gay rights organizations downplayed their role. Pride exists because they fought.`
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
• 2003: Lawrence v. Texas decriminalizes gay sex
• 2015: Obergefell v. Hodges legalizes same-sex marriage

The arc is 46 years from riot to marriage equality.`
            }
        ]
    },
    'computer-transistor': {
        paths: [
            {
                id: 'why',
                question: 'Why did this change everything?',
                icon: '💡',
                content: `Before transistors, computers used vacuum tubes—hot, fragile glass bulbs the size of light bulbs.

**ENIAC (1945):**
• 18,000 vacuum tubes
• Filled an entire room
• 150 kilowatts of power
• Burned out tubes constantly

**The Transistor Revolution:**
• Same function in a fingernail-sized chip
• Nearly indestructible
• Fraction of the power
• Can be miniaturized indefinitely

**The Numbers Tell the Story:**
• iPhone 15: 15 billion transistors
• All on a chip smaller than your fingernail
• That's 100 billion times denser than ENIAC

Every digital device you own exists because of this invention.`,
                spinoff: { id: 'evolution-of-technology', title: 'Evolution of Technology', description: 'From fire to AI' }
            },
            {
                id: 'who',
                question: 'Who invented it?',
                icon: '👥',
                content: `Three scientists at Bell Labs won the Nobel Prize:

**William Shockley** — The visionary team leader
**John Bardeen** — The theorist who understood the physics
**Walter Brattain** — The experimentalist who built it

**The Drama:**
Bardeen and Brattain made the breakthrough. Shockley, their boss, was furious he wasn't in the lab when it happened. He demanded his name on the patent anyway.

**The Fallout:**
Shockley became impossible to work with. Eight of his best engineers quit in 1957 to form Fairchild Semiconductor.

Those eight "Traitorous Eight" later founded:
• Intel
• AMD
• Kleiner Perkins (the VC firm)

Silicon Valley was born from this toxic workplace.`
            },
            {
                id: 'how',
                question: 'How does a transistor actually work?',
                icon: '🔬',
                content: `A transistor is just a switch made of silicon—but the magic is in HOW it switches.

**The Basics:**
• Three layers of semiconductor (like a sandwich)
• A tiny electrical signal controls a larger current
• Think of it as a water valve: small push, big flow

**Why Silicon?**
• Silicon is a "semiconductor"—between conductor and insulator
• Add impurities ("doping") to control electron flow
• Plentiful—it's just sand!

**The Key Insight:**
• By combining transistors, you can do logic
• AND gates, OR gates, NOT gates
• From logic comes math
• From math comes... everything

Every Google search, every video stream, every text message is just billions of these tiny switches flipping on and off.`
            }
        ]
    },
    'computer-intel4004': {
        paths: [
            {
                id: 'why',
                question: 'Why was this revolutionary?',
                icon: '💡',
                content: `Before the 4004, a "computer" was a room full of specialized hardware. The microprocessor put it ALL on one chip.

**What's Inside:**
• CPU (Central Processing Unit) — the brain
• All the logic circuits
• Memory addressing
• Everything needed to compute

**The Specs (Laughable by Today's Standards):**
• 2,300 transistors (your phone: 15 billion)
• 740 kHz clock speed (your phone: 3+ GHz)
• 4-bit processor (your phone: 64-bit)

**But Here's the Thing:**
This tiny chip was equivalent to the ENIAC's entire room of vacuum tubes.

The 4004 was designed for calculators. Its creators had no idea they'd just invented the future.`,
                spinoff: { id: 'ancestry-of-ai', title: 'The Ancestry of AI', description: 'From logic to lightning' }
            },
            {
                id: 'who',
                question: 'Who created the first chip?',
                icon: '👥',
                content: `The microprocessor came from an unlikely place: a Japanese calculator company.

**The Players:**
• **Busicom** — Japanese company wanting a cheap calculator chip
• **Intel** — Tiny startup making memory chips
• **Ted Hoff** — Intel engineer who had a crazy idea

**The Idea:**
Instead of building 12 specialized chips for the calculator, Hoff proposed ONE general-purpose chip that could be programmed for any task.

**The Team:**
• **Federico Faggin** — Lead designer, worked 80-hour weeks
• **Stan Mazor** — Architect of the instruction set
• **Masatoshi Shima** — Busicom engineer who collaborated

Intel bought back the rights for $60,000. That decision was worth billions.`
            },
            {
                id: 'what-next',
                question: 'What came after?',
                icon: '🚀',
                content: `Moore's Law kicked in—and things got wild fast.

**The Progression:**
• 1974: Intel 8080 (8-bit, powered the first PC kits)
• 1978: Intel 8086 (16-bit, basis for IBM PC)
• 1985: Intel 386 (32-bit, ran Windows)
• 2003: AMD64 (64-bit, modern architecture)
• Today: Apple M-series, billions of transistors

**Moore's Law:**
• Transistor count doubles every ~2 years
• Gordon Moore (Intel co-founder) predicted this in 1965
• It's held true for nearly 60 years

**The Implication:**
The phone in your pocket has more computing power than all of NASA had in 1969. That's what exponential growth looks like.`
            }
        ]
    }
};

type ViewState = 'questions' | 'answer' | 'ask';

const ExploreDropup: React.FC<ExploreDropupProps> = ({ event, isOpen, onClose, onSpinoff }) => {
    const [view, setView] = useState<ViewState>('questions');
    const [selectedPath, setSelectedPath] = useState<ExplorationPath | null>(null);
    const [userQuestion, setUserQuestion] = useState('');
    const dropupRef = useRef<HTMLDivElement>(null);

    // Reset state when menu closes or event changes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setView('questions');
                setSelectedPath(null);
                setUserQuestion('');
            }, 300);
        }
    }, [isOpen]);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropupRef.current && !dropupRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            // Delay adding listener to prevent immediate close
            setTimeout(() => {
                document.addEventListener('mousedown', handleClickOutside);
            }, 100);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!event) return null;

    const exploration = DEMO_CONTENT[event.id];
    const hasContent = exploration !== undefined;

    const handlePathClick = (path: ExplorationPath) => {
        setSelectedPath(path);
        setView('answer');
    };

    const handleBack = () => {
        setView('questions');
        setSelectedPath(null);
    };

    const handleAskSubmit = () => {
        alert(`Great question! In the full version, AI will answer:\n\n"${userQuestion}"\n\nThis feature is coming soon.`);
        setUserQuestion('');
    };

    const handleSpinoffClick = (spinoff: { id: string; title: string; description: string }) => {
        onSpinoff?.(spinoff.id, spinoff.title);
        onClose();
    };

    // Simple markdown-like rendering
    const renderContent = (text: string) => {
        return text.split('\n\n').map((paragraph, i) => {
            // Bold text
            const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');

            // Bullet points
            if (paragraph.includes('\n•') || paragraph.startsWith('•')) {
                const lines = paragraph.split('\n');
                return (
                    <ul key={i} className="space-y-1.5 my-3">
                        {lines.map((line, j) => {
                            const content = line.replace(/^•\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
                            if (!content.trim()) return null;
                            return (
                                <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                                    <span className="text-purple-400 mt-0.5">•</span>
                                    <span dangerouslySetInnerHTML={{ __html: content }} />
                                </li>
                            );
                        })}
                    </ul>
                );
            }

            return (
                <p key={i} className="text-white/70 text-sm leading-relaxed my-2" dangerouslySetInnerHTML={{ __html: formatted }} />
            );
        });
    };

    return (
        <div
            ref={dropupRef}
            className={`absolute bottom-full right-0 mb-3 w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            {/* Pointer triangle */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-black/90 border-r border-b border-white/10 rotate-45" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                {view !== 'questions' ? (
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back
                    </button>
                ) : (
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Explore</span>
                )}
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={16} className="text-white/50 hover:text-white" />
                </button>
            </div>

            {/* Content Area */}
            <div className="max-h-80 overflow-y-auto custom-scrollbar">

                {/* Questions View */}
                {view === 'questions' && (
                    <div className="p-3 space-y-2">
                        {hasContent ? (
                            <>
                                {exploration.paths.map((path) => (
                                    <button
                                        key={path.id}
                                        onClick={() => handlePathClick(path)}
                                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all group flex items-center gap-3"
                                    >
                                        <span className="text-xl">{path.icon}</span>
                                        <span className="flex-1 text-white text-sm font-medium">{path.question}</span>
                                        <ChevronRight size={16} className="text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all" />
                                    </button>
                                ))}

                                {/* Ask your own */}
                                <button
                                    onClick={() => setView('ask')}
                                    className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-purple-500/20 hover:border-purple-500/40 transition-all group flex items-center gap-3"
                                >
                                    <span className="text-xl">🤔</span>
                                    <span className="flex-1">
                                        <span className="text-white text-sm font-medium block">Ask your own question</span>
                                        <span className="text-white/40 text-xs">AI-powered</span>
                                    </span>
                                    <MessageCircle size={16} className="text-purple-400/50 group-hover:text-purple-400 transition-all" />
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-8 text-white/50">
                                <Sparkles size={32} className="mb-3 opacity-30" />
                                <p className="text-sm font-medium">Deep Dive Coming Soon</p>
                                <p className="text-xs mt-1">AI-powered exploration</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Answer View */}
                {view === 'answer' && selectedPath && (
                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">{selectedPath.icon}</span>
                            <h3 className="text-sm font-bold text-white">{selectedPath.question}</h3>
                        </div>

                        <div className="text-white/70">
                            {renderContent(selectedPath.content)}
                        </div>

                        {/* Spinoff suggestion */}
                        {selectedPath.spinoff && (
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-1">
                                    <Sparkles size={10} /> Continue Exploring
                                </div>
                                <button
                                    onClick={() => handleSpinoffClick(selectedPath.spinoff!)}
                                    className="w-full flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all group text-left"
                                >
                                    <span className="text-lg">🚀</span>
                                    <span className="flex-1">
                                        <span className="text-white text-xs font-medium block">{selectedPath.spinoff.title}</span>
                                        <span className="text-white/40 text-[10px]">{selectedPath.spinoff.description}</span>
                                    </span>
                                    <ChevronRight size={14} className="text-white/30 group-hover:translate-x-0.5 transition-all" />
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Ask View */}
                {view === 'ask' && (
                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">🤔</span>
                            <h3 className="text-sm font-bold text-white">Ask anything</h3>
                        </div>

                        <p className="text-white/50 text-xs mb-3">
                            What would you like to know about <span className="text-white">{event.title}</span>?
                        </p>

                        <div className="relative">
                            <textarea
                                value={userQuestion}
                                onChange={(e) => setUserQuestion(e.target.value)}
                                placeholder="e.g., What were the long-term consequences?"
                                className="w-full h-20 bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 resize-none"
                            />
                            <button
                                onClick={handleAskSubmit}
                                disabled={!userQuestion.trim()}
                                className="absolute bottom-2 right-2 p-1.5 bg-purple-500 hover:bg-purple-400 disabled:bg-white/10 disabled:text-white/30 text-white rounded transition-all"
                            >
                                <Send size={14} />
                            </button>
                        </div>

                        <p className="text-white/30 text-[10px] mt-2 flex items-center gap-1">
                            <Sparkles size={10} /> Powered by AI
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExploreDropup;
