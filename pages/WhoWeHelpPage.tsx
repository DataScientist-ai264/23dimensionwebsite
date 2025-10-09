
import React from 'react';
import PageContainer, { FadeIn } from '../components/PageContainer';
import { CLIENT_PROFILES } from '../constants';

const CheckIcon = () => (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-cyan flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const ProfileAvatar: React.FC<{ type: 'founder' | 'investor' | 'enterprise' }> = ({ type }) => {
    const icons = {
        founder: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z" />,
        investor: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 15.08c1.33-1.01 3.08-1.58 5-1.58s3.67.57 5 1.58V17H7v-1.92zM12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6z" />,
        enterprise: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 17.29C5.48 15.73 8.08 14.5 11 14.5h2c2.92 0 5.52 1.23 7 2.79V18H4v-.71zM12 13c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z" />,
    }
    return (
        <svg aria-hidden="true" className="w-12 h-12 text-accent-gold" viewBox="0 0 24 24" fill="currentColor">
            {icons[type]}
        </svg>
    );
};

const WhoWeHelpPage: React.FC = () => {
  return (
    <PageContainer>
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
            Who We Help
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            We partner with ambitious leaders at critical inflection points. Our clients value principled reasoning, technical depth, and a calm, authoritative approach to solving complex problems.
          </p>
        </div>
      </FadeIn>

      <div className="mt-20 max-w-4xl mx-auto space-y-12">
        {CLIENT_PROFILES.map((profile, index) => (
          <FadeIn key={profile.name} delay={`delay-${index*200}`}>
            <div className="p-8 border border-border rounded-xl bg-surface transition-colors">
                <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
                    <ProfileAvatar type={index === 0 ? 'founder' : index === 1 ? 'investor' : 'enterprise'} />
                    <div>
                        <h2 className="text-2xl font-bold text-accent-gold font-serif">{profile.name}</h2>
                        <p className="mt-1 text-text-secondary">{profile.description}</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Common Engagements</h3>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {profile.needs.map(need => (
                           <li key={need} className="flex items-start">
                               <CheckIcon />
                               <span className="ml-3 text-text">{need}</span>
                           </li>
                        ))}
                    </ul>
                </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </PageContainer>
  );
};

export default WhoWeHelpPage;
