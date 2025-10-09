import React from "react";
import { Link } from "react-router-dom";
import PageContainer, { FadeIn } from "../components/PageContainer";
import { SERVICES } from "../constants";

const WhatWeDoPage: React.FC = () => {
  return (
    <PageContainer>
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
            What We Do
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            2+3Dimension helps startups, investors, and organizations make
            principled, technically sound strategic decisions. Our work blends
            Kantian philosophy with deep technical and executional expertise.
          </p>
        </div>
      </FadeIn>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={`delay-${index * 100}`}>
              <div className="group h-full p-8 border border-border rounded-xl bg-surface hover:border-border-strong hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {service.icon}
                <h3 className="text-lg font-semibold text-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary flex-grow">
                  {service.description}
                </p>
                {service.link && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link
                      to={service.link.path}
                      className="inline-flex items-center text-sm font-semibold text-accent-cyan hover:text-accent-gold transition-colors duration-300 group/link"
                    >
                      {service.link.text}
                      <svg
                        className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default WhatWeDoPage;
