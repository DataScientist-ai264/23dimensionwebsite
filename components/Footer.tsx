import React from "react";

// ---- Components for Footer ---

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-secondary hover:text-text transition-colors duration-300"
  >
    {children}
  </a>
);
// --- END: Icon Components for Footer ---

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-border">
        <div className="py-8 text-center text-sm text-text-secondary">
          <p className="font-serif text-lg text-text mb-2">2+3Dimension</p>
          <p>
            &copy; {new Date().getFullYear()} 2+3Dimension Advisory. All Rights
            Reserved.
          </p>
          <p className="mt-1">A Kantian Advisory House</p>
        </div>

        <div className="py-6 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
          <div className="flex items-center gap-6">
            <SocialLink href="#" label="Follow 2+3Dimension on LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="#" label="Follow 2+3Dimension on X">
              <XIcon />
            </SocialLink>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border"></div>
          <a
            href="#"
            className="text-text-secondary hover:text-text transition-colors duration-300"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
