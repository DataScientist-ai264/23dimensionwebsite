import React, { useState } from "react";
import PageContainer, { FadeIn } from "../components/PageContainer";
import LazyImage from "../components/LazyImage";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: "Product" | "Strategy" | "Advisory" | "Research";
  image: string;
  status: "Live" | "In Development" | "Concept";
  technologies: string[];
  impact: string;
  timeline: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "AI-Driven Market Analysis Platform",
    description:
      "Advanced analytics platform that provides real-time market insights using machine learning algorithms to predict market trends and investment opportunities.",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format",
    status: "Live",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    impact: "$2.5M funding raised",
    timeline: "6 months",
  },
  {
    id: "2",
    title: "Blockchain Supply Chain Solution",
    description:
      "Transparent supply chain management system using blockchain technology to ensure product authenticity and reduce counterfeiting.",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop&auto=format",
    status: "Live",
    technologies: ["Solidity", "Web3", "Node.js", "React"],
    impact: "40% reduction in fraud",
    timeline: "8 months",
  },
  {
    id: "3",
    title: "FinTech Mobile Banking App",
    description:
      "Next-generation mobile banking application with AI-powered personal finance management and investment recommendations.",
    category: "Product",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&auto=format",
    status: "In Development",
    technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
    impact: "Targeting 100K users",
    timeline: "12 months",
  },
  {
    id: "4",
    title: "Strategic Market Entry Framework",
    description:
      "Comprehensive framework for tech startups entering emerging markets with focus on regulatory compliance and cultural adaptation.",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format",
    status: "Live",
    technologies: ["Research", "Analytics", "Compliance"],
    impact: "15 successful market entries",
    timeline: "3 months avg",
  },
  {
    id: "5",
    title: "Quantum Computing Research",
    description:
      "Applied research in quantum computing applications for financial modeling and risk assessment in investment portfolios.",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop&auto=format",
    status: "Concept",
    technologies: ["Quantum Computing", "Python", "Qiskit"],
    impact: "Patent pending",
    timeline: "18 months",
  },
  {
    id: "6",
    title: "ESG Investment Advisory",
    description:
      "Sustainable investment advisory service helping institutional investors align portfolios with ESG principles and impact goals.",
    category: "Advisory",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&auto=format",
    status: "Live",
    technologies: ["Data Analytics", "ESG Frameworks", "Reporting"],
    impact: "$50M ESG portfolio managed",
    timeline: "Ongoing",
  },
];

const categories = [
  "All",
  "Product",
  "Strategy",
  "Advisory",
  "Research",
] as const;

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "In Development":
        return "bg-yellow-500";
      case "Concept":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
              Foundation Experience Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary max-w-3xl mx-auto">
              Our advisory approach is grounded in direct experience leading
              complex initiatives at executive level. These represent the
              caliber of challenges we've solved and the foundation of expertise
              we bring to our advisory practice.
            </p>
            <div className="mt-4 text-sm text-accent-gold font-semibold">
              Executive Leadership Experience • Now Applied Through Advisory
              Excellence
            </div>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay="delay-200">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent-cyan text-background shadow-lg shadow-accent-cyan/25"
                    : "bg-surface text-text-secondary hover:bg-surface-hover hover:text-text"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={`delay-${((index % 3) + 1) * 100}`}>
              <div
                className="group bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-gold text-background">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-foreground text-accent-cyan text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-foreground text-text-secondary text-xs rounded-md">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Impact & Timeline */}
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-accent-gold font-semibold">
                      {item.impact}
                    </span>
                    <span className="text-text-secondary">{item.timeline}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Modal for Detailed View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
            <div className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:bg-accent-gold hover:text-background transition-all duration-300 shadow-lg border-2 border-white dark:border-gray-700 hover:border-accent-gold hover:scale-110"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Modal Image */}
                <div className="h-64 overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-accent-gold text-background">
                      {selectedItem.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(
                        selectedItem.status
                      )}`}
                    >
                      {selectedItem.status}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-text mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-foreground text-accent-cyan text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-3">
                        Key Metrics
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Impact:</span>
                          <span className="text-accent-gold font-semibold">
                            {selectedItem.impact}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Timeline:</span>
                          <span className="text-text">
                            {selectedItem.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default PortfolioPage;
