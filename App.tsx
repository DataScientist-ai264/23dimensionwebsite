import React, { useEffect, useState, createContext, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import WhoWeHelpPage from "./pages/WhoWeHelpPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import PortfolioPage from "./pages/PortfolioPage";
import LottieCharacter from "./components/LottieCharacter";

// Theme Context
type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const determinedTheme =
      initialTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(determinedTheme);
    if (!initialTheme) {
      localStorage.setItem("theme", determinedTheme);
    }

    root.classList.toggle("dark", determinedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      window.document.documentElement.classList.toggle(
        "dark",
        newTheme === "dark"
      );
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  return (
    <div className="bg-background text-text font-sans selection:bg-accent-gold/20">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/who-we-help" element={<WhoWeHelpPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <LottieCharacter />
      <ScrollToTopButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
