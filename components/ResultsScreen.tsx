import React from 'react';
import { RefreshIcon, TrophyIcon } from './icons';

interface ResultsScreenProps {
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ onRestart }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 text-center shadow-xl border border-gray-200/80 animate-fade-in">
      <div className="flex justify-center mb-4">
        <TrophyIcon />
      </div>
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 mb-4">
        Défis terminés !
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Bravo d'avoir relevé tous les défis. La pratique est la clé pour maîtriser l'art du microcopy.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-xl mb-8 shadow-inner border border-blue-100">
         <p className="text-xl text-blue-900 italic">
          "Les mots justes, au bon endroit, au bon moment. C'est ça, la magie de la rédaction UX."
        </p>
      </div>

      <button
        onClick={onRestart}
        className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-500"
      >
        <RefreshIcon />
        <span>Recommencer</span>
      </button>
    </div>
  );
};

export default ResultsScreen;