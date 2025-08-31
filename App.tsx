import React, { useState, useCallback } from 'react';
import { CHALLENGES } from './constants';
import ChallengeCard from './components/ChallengeCard';
import ResultsScreen from './components/ResultsScreen';

type GameState = 'playing' | 'finished';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('playing');
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userSubmission, setUserSubmission] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChallengeSubmit = useCallback((submission: string) => {
    if (showFeedback) return;
    setUserSubmission(submission);
    setShowFeedback(true);
  }, [showFeedback]);

  const handleNextChallenge = useCallback(() => {
    setShowFeedback(false);
    setUserSubmission('');

    if (currentChallengeIndex < CHALLENGES.length - 1) {
      setCurrentChallengeIndex(prev => prev + 1);
    } else {
      setGameState('finished');
    }
  }, [currentChallengeIndex]);

  const handleRestart = useCallback(() => {
    setGameState('playing');
    setCurrentChallengeIndex(0);
    setUserSubmission('');
    setShowFeedback(false);
  }, []);
  
  const currentChallenge = CHALLENGES[currentChallengeIndex];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 selection:bg-violet-500 selection:text-white">
      <div className="w-full max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 mb-2">
            Défis de Microcopy
          </h1>
          <p className="text-lg text-gray-600">
            Affûtez votre plume en relevant nos défis de rédaction UX.
          </p>
        </header>

        {gameState === 'playing' && currentChallenge && (
          <ChallengeCard
            key={currentChallenge.id}
            challenge={currentChallenge}
            challengeNumber={currentChallengeIndex + 1}
            totalChallenges={CHALLENGES.length}
            onChallengeSubmit={handleChallengeSubmit}
            onNext={handleNextChallenge}
            userSubmission={userSubmission}
            showFeedback={showFeedback}
            isLastChallenge={currentChallengeIndex === CHALLENGES.length - 1}
          />
        )}

        {gameState === 'finished' && (
          <ResultsScreen 
            onRestart={handleRestart}
          />
        )}
      </div>
       <footer className="absolute bottom-4 text-center text-gray-500 text-sm">
        <p>Fait par la <span className="font-semibold text-gray-600">WordsMatter Academy</span>.</p>
      </footer>
    </main>
  );
};

export default App;