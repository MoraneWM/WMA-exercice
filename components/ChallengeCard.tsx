import React, { useState } from 'react';
import { Challenge } from '../types';
import { 
  ArrowRightIcon, 
  LightbulbIcon,
  EmailConflictImage,
  EmptyDashboardImage,
  NewsletterSuccessImage,
  DeleteConfirmationImage,
  SearchInspirationImage,
} from './icons';

interface ChallengeCardProps {
  challenge: Challenge;
  challengeNumber: number;
  totalChallenges: number;
  onChallengeSubmit: (submission: string) => void;
  onNext: () => void;
  userSubmission: string;
  showFeedback: boolean;
  isLastChallenge: boolean;
}

const Illustration: React.FC<{ name: string }> = ({ name }) => {
  const illustrations: { [key: string]: React.ReactNode } = {
    EmailConflictImage: <EmailConflictImage />,
    EmptyDashboardImage: <EmptyDashboardImage />,
    NewsletterSuccessImage: <NewsletterSuccessImage />,
    DeleteConfirmationImage: <DeleteConfirmationImage />,
    SearchInspirationImage: <SearchInspirationImage />,
  };

  return <div className="w-full my-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">{illustrations[name] || null}</div>;
};


const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  challengeNumber,
  totalChallenges,
  onChallengeSubmit,
  onNext,
  userSubmission,
  showFeedback,
  isLastChallenge,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onChallengeSubmit(inputValue.trim());
    }
  };
  
  const progressPercentage = (challengeNumber / totalChallenges) * 100;

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/80 animate-fade-in">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div 
          className="bg-gradient-to-r from-violet-500 to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="text-right text-gray-500 mb-6 font-mono text-sm">
        Défi {challengeNumber} / {totalChallenges}
      </div>

      <div className="mb-6">
        <p className="text-gray-600 mb-2 font-semibold">Le scénario :</p>
        <blockquote className="bg-blue-50 p-4 rounded-lg text-blue-900 border-l-4 border-blue-400 shadow-inner">
          <p>{challenge.scenario}</p>
        </blockquote>
      </div>
      
      <Illustration name={challenge.illustration} />
      
      <div className="mb-6">
        <div className="p-3 bg-violet-50 rounded-lg flex items-start gap-3 mb-4 border border-violet-200">
          <LightbulbIcon className="h-6 w-6 text-violet-500 flex-shrink-0 mt-0.5" />
          <p className="text-violet-900 text-sm"><span className="font-bold">Conseil :</span> {challenge.guidance}</p>
        </div>
        <p className="text-gray-600 mb-3 font-semibold">Votre mission :</p>
        <p className="text-lg text-gray-900">{challenge.prompt}</p>
      </div>

      {!showFeedback ? (
        <form onSubmit={handleSubmit} className="mt-8">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={challenge.placeholder}
            className="w-full h-24 p-4 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 border-2 border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 transition duration-200"
            aria-label="Votre réponse"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-500"
          >
            <span>Valider ma proposition</span>
          </button>
           <p className="text-center text-xs text-gray-500 mt-2 px-4">
              Validez et recevez un feedback immédiat pour savoir si votre proposition est adaptée.
            </p>
        </form>
      ) : (
        <div className="mt-8 animate-slide-in-up">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-green-600">Excellent travail !</h3>
            <p className="text-gray-600">Voici une analyse de votre proposition.</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2 font-semibold">Votre proposition :</p>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-700 italic">"{userSubmission}"</div>
          </div>

          <div className="mt-6 p-5 rounded-lg bg-white border border-violet-200">
            <h3 className="font-bold text-lg mb-3 text-violet-600 flex items-center gap-2">
              <LightbulbIcon />
              Principes & Exemples
            </h3>
            <p className="text-gray-700 mb-4">{challenge.feedback.principle}</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 mb-3 text-sm font-semibold">Exemples possibles :</p>
              <div className="flex flex-wrap gap-2">
                {challenge.feedback.examples.map((example, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full cursor-default transition-colors hover:bg-blue-200">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={onNext}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-500"
          >
            <span>{isLastChallenge ? 'Terminer les défis' : 'Défi suivant'}</span>
            <ArrowRightIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeCard;