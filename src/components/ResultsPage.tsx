import React from 'react';
import { Trophy, Target, TrendingUp, BookOpen, RotateCcw, Home } from 'lucide-react';
import { Assessment, QuizResult } from '../types/quiz';

interface ResultsPageProps {
  assessment: Assessment;
  result: QuizResult;
  onRetakeQuiz: () => void;
  onBackToHome: () => void;
}

export function ResultsPage({ assessment, result, onRetakeQuiz, onBackToHome }: ResultsPageProps) {
  const { overallScore, performance, strengths, improvements, recommendations, categoryScores } = assessment;
  
  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'average': return 'text-yellow-400';
      case 'needs-improvement': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceMessage = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'Outstanding performance! 🎉';
      case 'good': return 'Great job! Keep it up! 👏';
      case 'average': return 'Good effort! Room for improvement 📚';
      case 'needs-improvement': return 'Keep practicing! You\'ll get there 💪';
      default: return 'Quiz completed!';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiz Complete!
          </h1>
          <p className={`text-2xl font-semibold ${getPerformanceColor(performance)}`}>
            {getPerformanceMessage(performance)}
          </p>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ScoreCard
            title="Overall Score"
            value={`${overallScore}%`}
            icon={<Target className="h-8 w-8" />}
            color="bg-gradient-to-r from-purple-600 to-pink-600"
          />
          <ScoreCard
            title="Questions Answered"
            value={`${result.score}/${result.totalQuestions}`}
            icon={<BookOpen className="h-8 w-8" />}
            color="bg-gradient-to-r from-blue-600 to-teal-600"
          />
          <ScoreCard
            title="Time Spent"
            value={`${Math.floor(result.timeSpent / 60)}m ${result.timeSpent % 60}s`}
            icon={<TrendingUp className="h-8 w-8" />}
            color="bg-gradient-to-r from-teal-600 to-green-600"
          />
        </div>

        {/* Category Performance */}
        {Object.keys(categoryScores).length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Category Performance</h2>
            <div className="space-y-4">
              {Object.entries(categoryScores).map(([category, score]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-white font-medium">{category}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                    <span className="text-purple-300 font-semibold w-12">{score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Strengths */}
          <AnalysisCard
            title="Your Strengths"
            items={strengths}
            icon="💪"
            color="bg-green-800/30 border-green-400/30"
          />

          {/* Areas for Improvement */}
          <AnalysisCard
            title="Areas for Improvement"
            items={improvements}
            icon="📈"
            color="bg-yellow-800/30 border-yellow-400/30"
          />
        </div>

        {/* AI Recommendations */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            🤖 AI Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((recommendation, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-lg border border-purple-400/30"
              >
                <p className="text-purple-200">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetakeQuiz}
            className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Retake Quiz
          </button>
          <button
            onClick={onBackToHome}
            className="flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

function ScoreCard({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <div className="text-white">{icon}</div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-white">{value}</p>
          <p className="text-sm text-purple-200">{title}</p>
        </div>
      </div>
    </div>
  );
}

function AnalysisCard({ title, items, icon, color }: { title: string; items: string[]; icon: string; color: string }) {
  return (
    <div className={`p-6 rounded-xl border-2 ${color}`}>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-purple-200 flex items-start">
            <span className="mr-2 text-purple-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}