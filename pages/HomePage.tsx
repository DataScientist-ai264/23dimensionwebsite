import React from "react";
import { Link } from "react-router-dom";
import PageContainer, { FadeIn } from "../components/PageContainer";
import { SERVICES, TEAM_MEMBERS, CASE_SNAPSHOTS } from "../constants";

// ---- START: In-file Components for Homepage ----

// Simple, Clean Logo
const AnimatedGlyph = () => (
  <div
    aria-hidden="true"
    className="w-full h-full flex items-center justify-center relative group"
  >
    <div className="text-center">
      {/* Clean Typography Logo */}
      <div className="text-6xl font-bold text-white group-hover:scale-105 transition-transform duration-500">
        <span className="text-accent-cyan">2+3</span>
        <span className="text-accent-gold">D</span>
      </div>
      {/* Subtle underline */}
      <div className="h-1 w-16 bg-gradient-to-r from-accent-cyan to-accent-gold mx-auto mt-2 rounded-full group-hover:w-20 transition-all duration-500"></div>
    </div>
  </div>
);

// Drifting Particles Background
const Particles = () => (
  <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle,var(--accent-cyan)_1px,transparent_1px)] bg-[length:20px_20px] animate-particle-drift opacity-10"></div>
  </div>
);

// Duotone Avatar for Team Section
const Avatar: React.FC<{ avatarId: string }> = ({ avatarId }) => {
  // In a real app, these would be more complex SVGs or images
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
// ---- END: In-file Components ----

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Parallax Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Theme-aware overlay for better text readability */}
          <div className="absolute inset-0 bg-background/85 dark:bg-background/70"></div>
          {/* Additional contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-black/30 dark:from-black/30 dark:via-black/40 dark:to-black/50"></div>
        </div>

        <Particles />
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/30 to-foreground/40 z-1"></div>

        <PageContainer>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="text-left">
                <p className="text-sm font-semibold text-accent-cyan tracking-widest uppercase drop-shadow-lg">
                  A Kantian Advisory House
                </p>
                <h1 className="mt-4 font-serif text-[clamp(40px,4.5vw,64px)] font-bold text-text tracking-tight drop-shadow-lg">
                  Clarity in Complexity
                </h1>
                <p className="mt-6 max-w-xl text-lg text-text-secondary drop-shadow-lg dark:drop-shadow-none bg-white/50 dark:bg-transparent backdrop-blur-md dark:backdrop-blur-none p-6 dark:p-0 rounded-xl dark:rounded-none border border-white/30 dark:border-transparent shadow-xl dark:shadow-none text-gray-800 dark:text-text-secondary">
                  We bring philosophical clarity, structural reasoning, and
                  real-world execution to startups, investors, and organizations
                  navigating complex challenges.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    to="/portfolio"
                    className="w-full sm:w-auto px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-background bg-accent-gold hover:bg-accent-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent-gold/20"
                  >
                    View Our Portfolio
                  </Link>
                  <Link
                    to="/what-we-do"
                    className="w-full sm:w-auto px-8 py-3.5 border border-border text-base font-semibold rounded-lg text-text-secondary hover:text-text hover:border-accent-cyan transition-colors duration-300"
                  >
                    Explore Our Advisory
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-8 py-3.5 border border-border text-base font-semibold rounded-lg text-text-secondary hover:text-text hover:border-accent-cyan transition-colors duration-300"
                  >
                    Start a Conversation
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay="delay-300">
              <div className="hidden md:block">
                <AnimatedGlyph />
              </div>
            </FadeIn>
          </div>
        </PageContainer>
      </div>

      {/* Philosophy Section */}
      <div className="bg-foreground">
        <PageContainer>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-accent-cyan">
                Our Philosophy
              </h2>
              <p className="mt-2 text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text sm:text-4xl font-serif">
                Where Philosophy Meets Execution
              </p>
              <p className="mt-6 text-lg leading-8 text-text-secondary">
                2+3Dimension is built on two ethical pillars and three strategic
                dimensions. This framework of{" "}
                <span className="text-accent-gold">
                  Philosophy → Structure → Execution
                </span>{" "}
                drives how we analyze, decide, and act.
              </p>
            </div>
          </FadeIn>
        </PageContainer>
      </div>

      {/* Team Section */}
      <PageContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-accent-cyan">
              Our Leadership
            </h2>
            <p className="mt-2 text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text sm:text-4xl font-serif">
              Principled Guidance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <FadeIn key={member.name} delay={`delay-${index * 150}`}>
                <div className="text-center group">
                  <div
                    aria-hidden="true"
                    className="w-24 h-24 mx-auto rounded-full bg-surface p-1 border border-border group-hover:border-accent-gold/50 transition-colors duration-300 transform group-hover:scale-105"
                  >
                    <Avatar avatarId={member.avatarId} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text">
                    {member.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </PageContainer>

      {/* Core Services */}
      <div className="bg-foreground">
        <PageContainer>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-accent-cyan">
                Core Services
              </h2>
              <p className="mt-2 text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text sm:text-4xl font-serif">
                Principled Advisory for Complex Challenges
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="group p-8 border border-border rounded-xl bg-background hover:border-border-strong hover:-translate-y-1 transition-all duration-300"
                >
                  {service.icon}
                  <h3 className="text-lg font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {service.description}
                  </p>
                  <Link
                    to="/what-we-do"
                    className="text-sm text-accent-gold font-semibold mt-4 inline-block relative underline-grow"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </PageContainer>
      </div>

      {/* Case Snapshots */}
      <PageContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-accent-cyan">
              Our Impact
            </h2>
            <p className="mt-2 text-[clamp(28px,3vw,40px)] font-bold tracking-tight text-text sm:text-4xl font-serif">
              From Theory to Tangible Results
            </p>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              We apply our framework to deliver measurable outcomes for our
              clients.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CASE_SNAPSHOTS.map((snapshot, index) => (
              <FadeIn key={index} delay={`delay-${index * 150}`}>
                <div className="h-full flex flex-col justify-between p-8 rounded-xl border border-border bg-surface hover:border-border-strong transition-colors">
                  <div>
                    <p className="font-semibold text-accent-gold">
                      {snapshot.client}
                    </p>
                    <p className="mt-2 text-text-secondary">
                      <span className="font-semibold text-text">
                        Challenge:
                      </span>{" "}
                      {snapshot.challenge}
                    </p>
                    <p className="mt-2 text-text-secondary">
                      <span className="font-semibold text-text">Outcome:</span>{" "}
                      {snapshot.outcome}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border flex items-baseline">
                    <p className="text-3xl font-bold text-accent-cyan">
                      {snapshot.metricValue}
                    </p>
                    <p className="ml-2 text-text-secondary">
                      {snapshot.metric}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </PageContainer>

      {/* CTA Band */}
      <div className="bg-foreground">
        <PageContainer>
          <FadeIn>
            <div className="relative isolate overflow-hidden bg-background px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16 border border-border">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl font-serif">
                Ready to bring clarity to your complexity?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-text-secondary">
                Let's discuss how principled strategy can transform your most
                pressing challenges into your greatest strengths.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-background bg-accent-gold hover:bg-accent-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent-gold/20"
                >
                  Start a Conversation
                </Link>
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <svg
                  className="h-full w-full text-accent-gold/10"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128 20a108 108 0 1 0 108 108A108.1 108.1 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.1 84.1 0 0 1-84 84Z"></path>
                </svg>
              </div>
            </div>
          </FadeIn>
        </PageContainer>
      </div>
    </div>
  );
};

export default HomePage;
