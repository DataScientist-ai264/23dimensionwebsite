
import React, { useEffect, useRef, useState } from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {children}
    </div>
  );
};

export const FadeIn: React.FC<PageContainerProps & {delay?: string}> = ({ children, delay='delay-200' }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        });
        const { current } = domRef;
        if (current) {
          observer.observe(current);
        }
        
        return () => {
          if (current) {
            observer.unobserve(current);
          }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-opacity duration-1000 ${delay} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};


export default PageContainer;
