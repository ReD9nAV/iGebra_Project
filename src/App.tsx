import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { TopicSelection } from './components/TopicSelection';
import { QuizInterface } from './components/QuizInterface';
import { ResultsPage } from './components/ResultsPage';
import { generateAIQuestions } from './data/quizData';
import { AIQuizEngine } from './utils/aiEngine';
import { Question, QuizResult, Assessment } from './types/quiz';

type AppState = 'landing' | 'topic-selection' | 'quiz' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [currentTopic, setCurrentTopic] = useState<string>('');
  const [currentDifficulty, setCurrentDifficulty] = useState<string>('');
  const [currentQuestionCount, setCurrentQuestionCount] = useState<number>(5);

  const handleGetStarted = () => {
    setCurrentState('topic-selection');
  };

  const handleStartQuiz = (topic: string, difficulty: string, questionCount: number) => {
    const questions = generateAIQuestions(topic, difficulty, questionCount);
    setCurrentQuestions(questions);
    setCurrentTopic(topic);
    setCurrentDifficulty(difficulty);
    setCurrentQuestionCount(questionCount);
    setCurrentState('quiz');
  };

  const handleQuizComplete = (
    answers: { questionId: string; selectedAnswer: number; isCorrect: boolean; timeSpent: number }[],
    totalTime: number
  ) => {
    const score = answers.filter(a => a.isCorrect).length;
    
    const result: QuizResult = {
      quizId: `quiz-${Date.now()}`,
      score,
      totalQuestions: currentQuestions.length,
      timeSpent: totalTime,
      answers,
      completedAt: new Date()
    };

    const aiAssessment = AIQuizEngine.generatePersonalizedFeedback(result, currentQuestions);
    
    setQuizResult(result);
    setAssessment(aiAssessment);
    setCurrentState('results');
  };

  const handleRetakeQuiz = () => {
    handleStartQuiz(currentTopic, currentDifficulty, currentQuestionCount);
  };

  const handleBackToHome = () => {
    setCurrentState('landing');
    setCurrentQuestions([]);
    setQuizResult(null);
    setAssessment(null);
  };

  const handleBackToTopics = () => {
    setCurrentState('topic-selection');
  };

  switch (currentState) {
    case 'landing':
      return <LandingPage onGetStarted={handleGetStarted} />;
    
    case 'topic-selection':
      return (
        <TopicSelection 
          onStartQuiz={handleStartQuiz} 
          onBack={handleBackToHome}
        />
      );
    
    case 'quiz':
      return (
        <QuizInterface
          questions={currentQuestions}
          onComplete={handleQuizComplete}
          onBack={handleBackToTopics}
        />
      );
    
    case 'results':
      return assessment && quizResult ? (
        <ResultsPage
          assessment={assessment}
          result={quizResult}
          onRetakeQuiz={handleRetakeQuiz}
          onBackToHome={handleBackToHome}
        />
      ) : null;
    
    default:
      return <LandingPage onGetStarted={handleGetStarted} />;
  }
}

export default App;