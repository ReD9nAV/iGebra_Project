export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number; // in minutes
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  timeSpent: number; // in seconds
  answers: {
    questionId: string;
    selectedAnswer: number;
    isCorrect: boolean;
    timeSpent: number;
  }[];
  completedAt: Date;
}

export interface Assessment {
  overallScore: number;
  performance: 'excellent' | 'good' | 'average' | 'needs-improvement';
  strengths: string[];
  improvements: string[];
  recommendations: string[];
  categoryScores: { [category: string]: number };
}