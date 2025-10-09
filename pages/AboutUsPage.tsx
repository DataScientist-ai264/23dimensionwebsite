import React from "react";
import PageContainer, { FadeIn } from "../components/PageContainer";
import { TEAM_MEMBERS } from "../constants";

// Duotone Avatar for Team Section (copied from HomePage for reuse)
const Avatar: React.FC<{ avatarId: string }> = ({ avatarId }) => {
  const avatars: Record<string, React.ReactNode> = {
    avatar1: (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    ),
    avatar2: (
      <path
        d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        transform="translate(3, 0)"
      />
    ),
    avatar3: (
      <path
        d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        transform="translate(-3, 0)"
      />
    ),
  };
  return (
    <svg className="w-full h-full" viewBox="0 0 24 24">
      <defs>
        <linearGradient
          id={`grad-${avatarId}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{ stopColor: "var(--accent-cyan)", stopOpacity: 0.3 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "var(--accent-gold)", stopOpacity: 0.3 }}
          />
        </linearGradient>
        <mask id={`mask-${avatarId}`}>
          <circle cx="12" cy="12" r="12" fill="white" />
        </mask>
      </defs>
      <g mask={`url(#mask-${avatarId})`}>
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill={`url(#grad-${avatarId})`}
        />
        <g fill="var(--text-primary)" opacity="0.8">
          {avatars[avatarId]}
        </g>
      </g>
    </svg>
  );
};

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <PageContainer>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
              About 2+3Dimension
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              We are a specialized advisory firm founded on the conviction that
              the most complex modern challenges demand a return to first
              principles. Our name reflects our core methodology: applying two
              ethical pillars, derived from Kantian philosophy, across three
              strategic dimensions of modern business and technology.
            </p>
          </div>
        </FadeIn>
      </PageContainer>

      {/* Mission & Principles Section */}
      <div className="bg-foreground">
        <PageContainer>
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div>
                <h2 className="text-base font-semibold leading-7 text-accent-cyan">
                  Our Mission
                </h2>
                <p className="mt-2 text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text sm:text-4xl font-serif">
                  To Bring Principled Clarity to a Complex World
                </p>
                <p className="mt-6 text-text-secondary">
                  In an era of rapid technological change and market ambiguity,
                  clarity is the scarcest resource. Our mission is to provide
                  that clarity. We don't offer easy answers or follow fleeting
                  trends. Instead, we equip leaders with rigorous, defensible
                  frameworks for decision-making, ensuring that their strategies
                  are not only effective but also ethically sound and built for
                  the long term.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay="delay-200">
              <div className="border border-border p-8 rounded-xl bg-surface space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-gold">
                    Rationality as a Foundation
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    We believe that reason is the ultimate tool for navigating
                    complexity. Every engagement begins with deconstructing the
                    problem to its core components, challenging assumptions, and
                    building a strategy from a foundation of logic and evidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-gold">
                    The Categorical Imperative in Business
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    We guide clients to act on principles they would wish to see
                    universally adopted. This means building products, teams,
                    and companies that are fair, transparent, and treat all
                    stakeholders with dignity—not as a means to an end, but as
                    ends in themselves.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </PageContainer>
      </div>

      {/* Team Section */}
      <PageContainer>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base font-semibold leading-7 text-accent-cyan">
              Our Leadership
            </h2>
            <p className="mt-2 text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text sm:text-4xl font-serif">
              Architects of Clarity
            </p>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Our team combines deep expertise in technology and strategy with a
              rare grounding in philosophical rigor. We are practitioners, not
              just theorists, with a track record of guiding organizations
              through their most critical moments.
            </p>
          </div>
        </FadeIn>
        <div className="max-w-5xl mx-auto space-y-16">
          {TEAM_MEMBERS.map((member, index) => (
            <FadeIn key={member.name} delay={`delay-${index * 150}`}>
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div
                    aria-hidden="true"
                    className="w-32 h-32 mx-auto rounded-full bg-surface p-1 border border-border"
                  >
                    <Avatar avatarId={member.avatarId} />
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-text">
                    {member.name}
                  </h3>
                  <p className="text-md font-semibold text-accent-gold mt-1">
                    {member.role}
                  </p>
                  <p className="mt-4 text-text-secondary">{member.bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default AboutUsPage;
