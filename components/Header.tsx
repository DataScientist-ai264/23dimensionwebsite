import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { useTheme } from "../App";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-text-secondary hover:text-text hover:bg-surface transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={
        theme === "dark" ? "Activate light mode" : "Activate dark mode"
      }
      title={theme === "dark" ? "Activate light mode" : "Activate dark mode"}
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.706-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.95a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses =
    "text-sm font-medium text-text-secondary hover:text-text transition-colors duration-300 underline-grow";
  const activeNavLinkClasses = "text-text active-link";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <RouterNavLink
              to="/"
              className="text-text font-serif text-2xl tracking-wider"
            >
              2+3Dimension
            </RouterNavLink>
          </div>
          <nav aria-label="Main navigation" className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${navLinkClasses} ${isActive ? activeNavLinkClasses : ""}`
                  }
                >
                  {link.name}
                </RouterNavLink>
              ))}
            </div>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <RouterNavLink
              to="/contact"
              className="px-5 py-2.5 border border-border text-sm font-medium rounded-lg text-text-secondary hover:text-text hover:border-text-secondary transition-colors duration-300"
            >
              Start a Conversation
            </RouterNavLink>
            <ThemeToggle />
          </div>
          <div className="-mr-2 flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="ml-2 bg-surface inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text hover:bg-surface/80 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <nav
              aria-label="Main navigation"
              className="flex flex-col space-y-1"
            >
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${navLinkClasses} ${
                      isActive ? activeNavLinkClasses : ""
                    }`
                  }
                >
                  {link.name}
                </RouterNavLink>
              ))}
            </nav>
            <RouterNavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left mt-4 px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-background bg-accent-gold hover:bg-accent-gold/90 transition-colors"
            >
              Start a Conversation
            </RouterNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
