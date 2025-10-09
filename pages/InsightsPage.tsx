import React from "react";
import PageContainer, { FadeIn } from "../components/PageContainer";
import { ARTICLES } from "../constants";
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

const InsightsPage: React.FC = () => {
  return (
    <PageContainer>
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
            Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Exploring the intersection of strategy, ethics, governance, and
            product through a Kantian lens.
          </p>
        </div>
      </FadeIn>

      <div className="mt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {ARTICLES.map((article, index) => (
            <FadeIn key={article.id} delay={`delay-${index * 100}`}>
              <article className="group relative flex flex-col items-start">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <LazyImage
                    src={article.imageUrl}
                    alt={article.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-surface object-cover sm:aspect-[2/1] lg:aspect-[3/2] filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
                </div>
                <div className="max-w-xl mt-8">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-surface px-3 py-1.5 font-medium text-accent-gold border border-border">
                      {article.category}
                    </span>
                  </div>
                  <div className="relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-text group-hover:text-accent-gold transition-colors">
                      <Link to="#">
                        <span className="absolute inset-0" />
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-text-secondary">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default InsightsPage;
