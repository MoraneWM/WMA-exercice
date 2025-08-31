import React from 'react';

export const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const RefreshIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5m15-5a9 9 0 11-9-9" />
    </svg>
);

export const LightbulbIcon: React.FC<{className?: string}> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export const TrophyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3 3 3m-9 5.5V14a3 3 0 013-3h6a3 3 0 013 3v2.5M9 11V9a3 3 0 013-3h.01M15 11V9a3 3 0 00-3-3h-.01M9 11h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5V21m-3.5-2.5h7" />
    </svg>
);

// --- Contextual Images ---

export const EmailConflictImage: React.FC = () => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect x="10" y="10" width="180" height="80" rx="8" fill="#F3F4F6"/>
        <text x="25" y="30" fontFamily="sans-serif" fontSize="8" fill="#4B5563">Email Address</text>
        <rect x="25" y="38" width="150" height="20" rx="4" fill="white" stroke="#FECACA" strokeWidth="1.5"/>
        <text x="32" y="51" fontFamily="sans-serif" fontSize="8" fill="#4B5563">hello@wordsmatter.com</text>
        <path d="M 160 44 l 8 8 M 160 52 l 8 -8" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="25" y="70" fontFamily="sans-serif" fontSize="7" fill="#DC2626">This email is already in use. Try logging in.</text>
    </svg>
);

export const EmptyDashboardImage: React.FC = () => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect x="10" y="10" width="180" height="80" rx="8" fill="#F3F4F6"/>
        <rect x="10" y="10" width="40" height="80" rx="8" ry="8" fill="#E5E7EB"/>
        <circle cx="30" cy="25" r="8" fill="#D1D5DB"/>
        <rect x="20" y="40" width="20" height="3" rx="1.5" fill="#D1D5DB"/>
        <rect x="20" y="48" width="20" height="3" rx="1.5" fill="#D1D5DB"/>
        <text x="60" y="30" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#1F2937">Your Projects</text>
        <circle cx="125" cy="55" r="15" fill="#8B5CF6"/>
        <path d="M 121 55 h 8 M 125 51 v 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <text x="98" y="80" fontFamily="sans-serif" fontSize="8" fill="#4B5563">Create your first project!</text>
    </svg>
);

export const NewsletterSuccessImage: React.FC = () => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect x="40" y="30" width="120" height="40" rx="8" fill="white" stroke="#D1D5DB"/>
        <circle cx="65" cy="50" r="10" fill="#34D399"/>
        <path d="M 61 50 l 3 3 l 5 -5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="85" y="48" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1F2937">Subscription Confirmed!</text>
        <text x="85" y="60" fontFamily="sans-serif" fontSize="7" fill="#4B5563">Welcome to the club.</text>
    </svg>
);

export const DeleteConfirmationImage: React.FC = () => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect x="0" y="0" width="200" height="100" fill="#000000" opacity="0.1"/>
        <rect x="50" y="20" width="100" height="60" rx="8" fill="white" stroke="#E5E7EB"/>
        <circle cx="70" cy="35" r="8" fill="#FEE2E2"/>
        <path d="M 67 32 l 6 6 M 67 38 l 6 -6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="85" y="38" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1F2937">Delete Account</text>
        <text x="60" y="55" fontFamily="sans-serif" fontSize="7" fill="#4B5563">Are you sure? This is permanent.</text>
        <rect x="60" y="65" width="35" height="10" rx="3" fill="#E5E7EB"/>
        <text x="68" y="72" fontFamily="sans-serif" fontSize="6" fill="#4B5563">Cancel</text>
        <rect x="105" y="65" width="35" height="10" rx="3" fill="#EF4444"/>
        <text x="114" y="72" fontFamily="sans-serif" fontSize="6" fill="white">Delete</text>
    </svg>
);

export const SearchInspirationImage: React.FC = () => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect x="10" y="10" width="180" height="80" rx="8" fill="#F9FAFB" stroke="#F3F4F6" strokeWidth="2"/>
        <rect x="10" y="10" width="180" height="25" fill="white" stroke="#F3F4F6"/>
        <circle cx="30" cy="22.5" r="5" fill="#8B5CF6"/>
        <rect x="130" y="19.5" width="15" height="2" rx="1" fill="#D1D5DB"/>
        <rect x="150" y="19.5" width="15" height="2" rx="1" fill="#D1D5DB"/>
        <rect x="170" y="19.5" width="10" height="2" rx="1" fill="#D1D5DB"/>
        <rect x="40" y="50" width="120" height="20" rx="10" fill="white" stroke="#E5E7EB"/>
        <circle cx="55" cy="60" r="3" stroke="#9CA3AF" strokeWidth="1.5" fill="none"/>
        <line x1="57" y1="62" x2="59" y2="64" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="65" y="63" fontFamily="sans-serif" fontSize="7" fill="#9CA3AF">What do you want to cook today?</text>
    </svg>
);