import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuizInterfaceProps {
  questions: Question[];
  onComplete: (answers: { questionId: string; selectedAnswer: number; isCorrect: boolean; timeSpent: number }[], totalTime: number) => void;
  onBack: () => void;
}

export function QuizInterface({ questions, onComplete, onBack }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: number }>({});
  const [timeSpent, setTimeSpent] = useState<{ [questionId: string]: number }>({});
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [totalStartTime] = useState(Date.now());

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    const questionId = questions[currentQuestion].id;
    const timeForThisQuestion = Math.floor((Date.now() - questionStartTime) / 1000);
    
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    setTimeSpent(prev => ({ ...prev, [questionId]: timeForThisQuestion }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const totalTime = Math.floor((Date.now() - totalStartTime) / 1000);
    const results = questions.map(question => ({
      questionId: question.id,
      selectedAnswer: answers[question.id] ?? -1,
      isCorrect: answers[question.id] === question.correctAnswer,
      timeSpent: timeSpent[question.id] ?? 0
    }));
    
    onComplete(results, totalTime);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="text-green-300 hover:text-white transition-colors duration-200"
          >
            ← Back to Topics
          </button>
          <div className="flex items-center text-green-200">
            <Clock className="h-5 w-5 mr-2" />
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-teal-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-green-300 bg-green-800/30 px-3 py-1 rounded-full">
                {question.difficulty.toUpperCase()}
              </span>
              <span className="text-sm text-green-300">{question.category}</span>
            </div>
            <h2 className="text-2xl font-semibold text-white leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                  selectedAnswer === index
                    ? 'bg-teal-600/30 border-teal-400 text-white'
                    : 'bg-white/5 border-white/20 text-green-100 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex-1">{option}</span>
                  {selectedAnswer === index && (
                    <CheckCircle className="h-5 w-5 text-teal-400 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Previous
          </button>

          <div className="text-center text-green-200">
            {Object.keys(answers).length} of {questions.length} answered
          </div>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next'}
            {currentQuestion !== questions.length - 1 && <ChevronRight className="h-5 w-5 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
}