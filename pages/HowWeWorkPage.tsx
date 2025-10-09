
import React, { useState } from 'react';
import PageContainer, { FadeIn } from '../components/PageContainer';

const FONT_SANS = 'Inter, sans-serif';
const FONT_SERIF = 'Playfair Display, serif';
const PILLAR_COLOR = 'var(--accent-gold)';
const DIMENSION_COLOR = 'var(--accent-cyan)';

const frameworkNodes = [
  // Pillars
  { id: 'p1', label: 'Pillar 1', cx: 275, cy: 450, r: 60, color: PILLAR_COLOR, title: 'Ethical Pillar: Rational Clarity', description: 'We cut through ambiguity with structured, evidence-based reasoning. Every assumption is challenged, every conclusion justified.' },
  { id: 'p2', label: 'Pillar 2', cx: 525, cy: 450, r: 60, color: PILLAR_COLOR, title: 'Ethical Pillar: Universal Principles', description: 'We advise actions that could be adopted as a universal law—promoting fairness, long-term stability, and stakeholder respect over short-term gains.' },
  // Dimensions
  { id: 'd1', label: 'Why', cx: 200, cy: 250, r: 70, color: DIMENSION_COLOR, title: "Dimension 1: Philosophy → The 'Why'", description: "We begin by defining the core purpose and principles of the initiative. What is the fundamental problem we are solving, and what ethical boundaries must we respect?" },
  { id: 'd2', label: 'How', cx: 400, cy: 250, r: 70, color: DIMENSION_COLOR, title: "Dimension 2: Structure → The 'How'", description: "We translate the 'why' into a coherent strategy, architecture, and roadmap. This is where we build the logical framework for success." },
  { id: 'd3', label: 'What', cx: 600, cy: 250, r: 70, color: DIMENSION_COLOR, title: "Dimension 3: Execution → The 'What'", description: "We guide the implementation with seasoned, hands-on expertise, ensuring the final outcome is a true reflection of the founding philosophy and structure." },
];

const InteractiveFrameworkDiagram = () => {
    const [activeId, setActiveId] = useState<string | null>('intro');

    const activeNode = frameworkNodes.find(n => n.id === activeId) || {
        id: 'intro',
        title: 'The 2+3 Framework',
        description: 'Hover over or focus on a node to learn more. Our framework combines two ethical pillars with three strategic dimensions to ensure principled, effective outcomes.',
        color: 'var(--text-secondary)'
    };

    return (
        <div className="border border-border rounded-xl bg-surface p-4 sm:p-8 transition-all duration-300">
            <svg viewBox="0 0 800 550" role="img" aria-labelledby="diagram-title" className="w-full h-auto">
                <title id="diagram-title">Interactive diagram of the 2+3 Framework</title>
                 <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill={DIMENSION_COLOR} opacity="0.7" />
                    </marker>
                </defs>

                {/* Info Box */}
                <foreignObject x="50" y="0" width="700" height="150">
                    {/* FIX: The `xmlns` attribute is required for HTML inside an SVG <foreignObject>, but it causes a TypeScript error in React. Using @ts-ignore to bypass this known typing issue. */}
                    {/* @ts-ignore */}
                    <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full p-4 flex flex-col justify-center text-center">
                        <h3 style={{ fontFamily: FONT_SERIF, color: activeNode.color }} className="text-xl sm:text-2xl font-bold transition-colors duration-300">
                           {activeNode.title}
                        </h3>
                        <p style={{ fontFamily: FONT_SANS }} className="text-text-secondary text-sm sm:text-base mt-2 transition-opacity duration-300" aria-live="polite" aria-atomic="true">
                            {activeNode.description}
                        </p>
                    </div>
                </foreignObject>

                {/* Connections */}
                <g stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4">
                    {/* Pillar -> Dimension lines */}
                    <line x1="275" y1="390" x2="400" y2="320" />
                    <line x1="525" y1="390" x2="400" y2="320" />
                    {/* Dimension -> Dimension arrows */}
                    <line x1="270" y1="250" x2="330" y2="250" markerEnd="url(#arrowhead)" />
                    <line x1="470" y1="250" x2="530" y2="250" markerEnd="url(#arrowhead)" />
                </g>

                {/* Nodes */}
                {frameworkNodes.map(node => (
                    <g key={node.id}
                       onMouseEnter={() => setActiveId(node.id)}
                       onMouseLeave={() => setActiveId('intro')}
                       onFocus={() => setActiveId(node.id)}
                       onBlur={() => setActiveId('intro')}
                       tabIndex={0}
                       className="cursor-pointer group"
                       aria-label={`Learn more about ${node.title}`}
                    >
                       <circle cx={node.cx} cy={node.cy} r={node.r} fill="var(--bg-secondary)" stroke={node.color} strokeWidth="2" className="transition-all duration-300 group-hover:stroke-[var(--bg-primary)] group-focus:stroke-[var(--bg-primary)]" />
                       <circle cx={node.cx} cy={node.cy} r={node.r - 5} fill={node.color} className="transition-all duration-300 opacity-20 group-hover:opacity-100 group-focus:opacity-100" />
                       <text x={node.cx} y={node.cy + 5} textAnchor="middle" fill="var(--text-primary)" className="font-semibold select-none transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0" style={{ fontFamily: FONT_SANS }}>
                         {node.label}
                       </text>
                       <text x={node.cx} y={node.cy + 5} textAnchor="middle" fill="var(--bg-primary)" className="font-semibold select-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100" style={{ fontFamily: FONT_SANS }}>
                         {node.label}
                       </text>
                    </g>
                ))}
            </svg>
        </div>
    );
};


const HowWeWorkPage: React.FC = () => {
  return (
    <PageContainer>
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
            How We Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Our methodology is rooted in a principled framework designed for clarity and impact. We combine Kantian reasoning with structured analysis and practical execution to navigate complexity and deliver results.
          </p>
        </div>
      </FadeIn>
      
      <div className="mt-20 max-w-6xl mx-auto">
        <FadeIn>
            <div className="text-center mb-16">
                 <h2 className="text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text font-serif">
                   The 2+3 Framework
                </h2>
                <p className="text-accent-cyan mt-2">Two Ethical Pillars + Three Strategic Dimensions</p>
            </div>
        </FadeIn>

        <FadeIn delay="delay-200">
            <InteractiveFrameworkDiagram />
        </FadeIn>
        
      </div>
    </PageContainer>
  );
};

export default HowWeWorkPage;
