import React, { useState } from 'react';
import { Code, Database, Globe, ArrowRight, Settings } from 'lucide-react';
import { categories } from '../data/quizData';

interface TopicSelectionProps {
  onStartQuiz: (topic: string, difficulty: string, questionCount: number) => void;
  onBack: () => void;
}

const topicIcons: { [key: string]: React.ReactNode } = {
  'JavaScript': <Code className="h-8 w-8" />,
  'React': <Globe className="h-8 w-8" />,
  'Python': <Database className="h-8 w-8" />,
};

export function TopicSelection({ onStartQuiz, onBack }: TopicSelectionProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('medium');
  const [questionCount, setQuestionCount] = useState<number>(5);

  const handleStartQuiz = () => {
    if (selectedTopic) {
      onStartQuiz(selectedTopic, difficulty, questionCount);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={onBack}
            className="mb-6 text-blue-300 hover:text-white transition-colors duration-200"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Challenge
          </h1>
          <p className="text-xl text-blue-200">
            Select a topic and let our AI create the perfect quiz for you
          </p>
        </div>

        {/* Topic Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Settings className="h-6 w-6 mr-2" />
            Select Topic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((topic) => (
              <TopicCard
                key={topic}
                topic={topic}
                icon={topicIcons[topic] || <Code className="h-8 w-8" />}
                isSelected={selectedTopic === topic}
                onSelect={setSelectedTopic}
              />
            ))}
          </div>
        </div>

        {/* Configuration */}
        {selectedTopic && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">Quiz Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-3">
                  Difficulty Level
                </label>
                <div className="space-y-2">
                  {['easy', 'medium', 'hard'].map((level) => (
                    <label key={level} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="difficulty"
                        value={level}
                        checked={difficulty === level}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="mr-3 h-4 w-4 text-purple-600"
                      />
                      <span className="text-white capitalize">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question Count */}
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-3">
                  Number of Questions
                </label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value={5}>5 Questions</option>
                  <option value={10}>10 Questions</option>
                  <option value={15}>15 Questions</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              className="mt-8 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Generate AI Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TopicCard({ 
  topic, 
  icon, 
  isSelected, 
  onSelect 
}: { 
  topic: string; 
  icon: React.ReactNode; 
  isSelected: boolean; 
  onSelect: (topic: string) => void; 
}) {
  return (
    <div
      onClick={() => onSelect(topic)}
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'bg-purple-600/30 border-purple-400 scale-105'
          : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
      }`}
    >
      <div className="text-center">
        <div className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full ${
          isSelected ? 'bg-purple-500 text-white' : 'bg-white/10 text-blue-300'
        }`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{topic}</h3>
      </div>
    </div>
  );
}