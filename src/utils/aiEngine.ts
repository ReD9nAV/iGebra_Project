import { Question, Assessment, QuizResult } from '../types/quiz';

export class AIQuizEngine {
  static generatePersonalizedFeedback(result: QuizResult, questions: Question[]): Assessment {
    const { score, totalQuestions, answers } = result;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let performance: Assessment['performance'];
    if (percentage >= 90) performance = 'excellent';
    else if (percentage >= 75) performance = 'good';
    else if (percentage >= 60) performance = 'average';
    else performance = 'needs-improvement';

    const categoryScores: { [category: string]: number } = {};
    const categoryTotals: { [category: string]: number } = {};

    // Calculate category-wise performance
    answers.forEach((answer, index) => {
      const question = questions[index];
      const category = question.category;
      
      if (!categoryScores[category]) {
        categoryScores[category] = 0;
        categoryTotals[category] = 0;
      }
      
      categoryTotals[category]++;
      if (answer.isCorrect) {
        categoryScores[category]++;
      }
    });

    // Convert to percentages
    Object.keys(categoryScores).forEach(category => {
      categoryScores[category] = Math.round((categoryScores[category] / categoryTotals[category]) * 100);
    });

    const strengths = this.identifyStrengths(categoryScores);
    const improvements = this.identifyImprovements(categoryScores, answers, questions);
    const recommendations = this.generateRecommendations(performance, categoryScores);

    return {
      overallScore: percentage,
      performance,
      strengths,
      improvements,
      recommendations,
      categoryScores
    };
  }

  private static identifyStrengths(categoryScores: { [category: string]: number }): string[] {
    const strengths = [];
    
    Object.entries(categoryScores).forEach(([category, score]) => {
      if (score >= 80) {
        strengths.push(`Strong grasp of ${category} concepts`);
      }
    });

    if (strengths.length === 0) {
      strengths.push('Consistent effort across all topics');
    }

    return strengths;
  }

  private static identifyImprovements(
    categoryScores: { [category: string]: number },
    answers: any[],
    questions: Question[]
  ): string[] {
    const improvements = [];
    
    Object.entries(categoryScores).forEach(([category, score]) => {
      if (score < 60) {
        improvements.push(`Focus more on ${category} fundamentals`);
      }
    });

    // Analyze time spent patterns
    const avgTimePerQuestion = answers.reduce((sum, answer) => sum + answer.timeSpent, 0) / answers.length;
    const slowAnswers = answers.filter(answer => answer.timeSpent > avgTimePerQuestion * 1.5);
    
    if (slowAnswers.length > answers.length * 0.3) {
      improvements.push('Practice time management during quizzes');
    }

    return improvements;
  }

  private static generateRecommendations(
    performance: Assessment['performance'],
    categoryScores: { [category: string]: number }
  ): string[] {
    const recommendations = [];

    switch (performance) {
      case 'excellent':
        recommendations.push('Consider taking advanced level quizzes');
        recommendations.push('Share your knowledge by helping others');
        break;
      case 'good':
        recommendations.push('Review topics where you scored below 80%');
        recommendations.push('Take practice quizzes to maintain your level');
        break;
      case 'average':
        recommendations.push('Focus on understanding core concepts');
        recommendations.push('Take additional practice quizzes');
        break;
      case 'needs-improvement':
        recommendations.push('Review fundamental concepts thoroughly');
        recommendations.push('Consider seeking additional learning resources');
        break;
    }

    // Add category-specific recommendations
    Object.entries(categoryScores).forEach(([category, score]) => {
      if (score < 70) {
        recommendations.push(`Spend extra time studying ${category}`);
      }
    });

    return recommendations;
  }

  static adaptDifficulty(previousScores: number[]): 'easy' | 'medium' | 'hard' {
    if (previousScores.length === 0) return 'medium';
    
    const avgScore = previousScores.reduce((sum, score) => sum + score, 0) / previousScores.length;
    
    if (avgScore >= 85) return 'hard';
    if (avgScore >= 65) return 'medium';
    return 'easy';
  }
}