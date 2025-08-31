import React, { useState } from 'react';
import { Challenge } from '../types';
import { ArrowRightIcon, LightbulbIcon } from './icons';

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

  return (
    <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-violet-500/30 animate-fade-in">
      <div className="text-right text-slate-400 mb-6 font-mono">
        Défi {challengeNumber} / {totalChallenges}
      </div>

      <div className="mb-6">
        <p className="text-slate-400 mb-2 font-semibold">Le scénario :</p>
        <blockquote className="bg-black/20 p-4 rounded-lg text-slate-200 border-l-4 border-violet-400 shadow-inner">
          <p>{challenge.scenario}</p>
        </blockquote>
      </div>

      <div className="mb-6">
        <p className="text-slate-300 mb-3 font-semibold">Votre mission :</p>
        <p className="text-lg text-violet-100">{challenge.prompt}</p>
      </div>

      {!showFeedback ? (
        <form onSubmit={handleSubmit} className="mt-8">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={challenge.placeholder}
            className="w-full h-24 p-4 rounded-lg bg-slate-900/70 text-white placeholder-slate-500 border-2 border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition duration-200"
            aria-label="Votre réponse"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 disabled:scale-100"
          >
            <span>Soumettre ma proposition</span>
          </button>
        </form>
      ) : (
        <div className="mt-8 animate-fade-in">
          <div>
            <p className="text-slate-400 mb-2 font-semibold">Votre proposition :</p>
            <div className="bg-black/20 p-4 rounded-lg text-slate-200 italic">"{userSubmission}"</div>
          </div>

          <div className="mt-6 p-4 rounded-md bg-slate-900/50 border border-slate-700">
            <h3 className="font-bold text-lg mb-3 text-violet-300 flex items-center gap-2">
              <LightbulbIcon />
              Principes & Exemples
            </h3>
            <p className="text-slate-300 mb-4">{challenge.feedback.principle}</p>
            <div className="border-t border-slate-700 pt-3">
              <p className="text-slate-400 mb-2 text-sm">Exemples possibles :</p>
              <ul className="list-disc list-inside space-y-1 text-slate-200">
                {challenge.feedback.examples.map((example, index) => (
                  <li key={index}>"{example}"</li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={onNext}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
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
