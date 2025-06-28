import { Question } from '../types/quiz';

const questionBank: { [category: string]: Question[] } = {
  'JavaScript': [
    // Easy Questions
    {
      id: 'js1',
      question: 'What is the difference between let and var in JavaScript?',
      options: [
        'let has block scope, var has function scope',
        'let has function scope, var has block scope',
        'They are exactly the same',
        'let is older than var'
      ],
      correctAnswer: 0,
      explanation: 'let has block scope while var has function scope. This means let variables are only accessible within the block they are declared in.',
      difficulty: 'medium',
      category: 'JavaScript'
    },
    {
      id: 'js2',
      question: 'Which method is used to add an element to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correctAnswer: 0,
      explanation: 'push() adds one or more elements to the end of an array and returns the new length.',
      difficulty: 'easy',
      category: 'JavaScript'
    },
    {
      id: 'js3',
      question: 'What does the spread operator (...) do?',
      options: [
        'Creates a new variable',
        'Spreads elements of an iterable',
        'Deletes array elements',
        'Concatenates strings'
      ],
      correctAnswer: 1,
      explanation: 'The spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected.',
      difficulty: 'medium',
      category: 'JavaScript'
    },
    {
      id: 'js4',
      question: 'What is a closure in JavaScript?',
      options: [
        'A type of loop',
        'A function that has access to outer scope variables',
        'A way to close the browser',
        'An error handling mechanism'
      ],
      correctAnswer: 1,
      explanation: 'A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has returned.',
      difficulty: 'hard',
      category: 'JavaScript'
    },
    {
      id: 'js5',
      question: 'How do you declare a variable in JavaScript?',
      options: ['variable x = 5', 'var x = 5', 'v x = 5', 'declare x = 5'],
      correctAnswer: 1,
      explanation: 'Variables in JavaScript are declared using var, let, or const keywords.',
      difficulty: 'easy',
      category: 'JavaScript'
    },
    {
      id: 'js6',
      question: 'What will console.log(typeof null) output?',
      options: ['null', 'undefined', 'object', 'boolean'],
      correctAnswer: 2,
      explanation: 'This is a well-known JavaScript quirk. typeof null returns "object" due to a legacy bug in JavaScript.',
      difficulty: 'easy',
      category: 'JavaScript'
    },
    {
      id: 'js7',
      question: 'Which of the following is NOT a JavaScript data type?',
      options: ['String', 'Boolean', 'Float', 'Number'],
      correctAnswer: 2,
      explanation: 'JavaScript has Number type for all numeric values. There is no separate Float type.',
      difficulty: 'easy',
      category: 'JavaScript'
    },
    {
      id: 'js8',
      question: 'What is the correct way to write a JavaScript array?',
      options: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
      correctAnswer: 2,
      explanation: 'Arrays in JavaScript are created using square brackets with comma-separated values.',
      difficulty: 'easy',
      category: 'JavaScript'
    },
    // Medium Questions
    {
      id: 'js9',
      question: 'What is the difference between == and === in JavaScript?',
      options: [
        '== checks type and value, === checks only value',
        '=== checks type and value, == checks only value',
        'They are exactly the same',
        '== is for numbers, === is for strings'
      ],
      correctAnswer: 1,
      explanation: '=== (strict equality) checks both type and value, while == (loose equality) performs type coercion before comparison.',
      difficulty: 'medium',
      category: 'JavaScript'
    },
    {
      id: 'js10',
      question: 'What does the Array.map() method do?',
      options: [
        'Filters array elements',
        'Creates a new array with transformed elements',
        'Sorts the array',
        'Finds a specific element'
      ],
      correctAnswer: 1,
      explanation: 'Array.map() creates a new array with the results of calling a function for every array element.',
      difficulty: 'medium',
      category: 'JavaScript'
    },
    {
      id: 'js11',
      question: 'What is hoisting in JavaScript?',
      options: [
        'Moving variables to the top of their scope',
        'Lifting heavy objects',
        'A type of loop',
        'An error handling technique'
      ],
      correctAnswer: 0,
      explanation: 'Hoisting is JavaScript\'s behavior of moving variable and function declarations to the top of their scope.',
      difficulty: 'medium',
      category: 'JavaScript'
    },
    {
      id: 'js12',
      question: 'What is the purpose of the "this" keyword in JavaScript?',
      options: [
        'To refer to the current object',
        'To create a new variable',
        'To import modules',
        'To define a function'
      ],
      correctAnswer: 0,
      explanation: 'The "this" keyword refers to the object that is executing the current function.',
      difficulty: 'medium',
      category: 'JavaScript'
    },
    // Hard Questions
    {
      id: 'js13',
      question: 'What is the event loop in JavaScript?',
      options: [
        'A loop that handles events',
        'The mechanism that handles asynchronous operations',
        'A type of for loop',
        'An error handling system'
      ],
      correctAnswer: 1,
      explanation: 'The event loop is the mechanism that allows JavaScript to perform non-blocking operations by handling the execution of multiple chunks of your program over time.',
      difficulty: 'hard',
      category: 'JavaScript'
    },
    {
      id: 'js14',
      question: 'What is prototypal inheritance in JavaScript?',
      options: [
        'A way to inherit from classes',
        'Objects can inherit directly from other objects',
        'A method to copy objects',
        'A type of function'
      ],
      correctAnswer: 1,
      explanation: 'Prototypal inheritance allows objects to inherit properties and methods directly from other objects through the prototype chain.',
      difficulty: 'hard',
      category: 'JavaScript'
    },
    {
      id: 'js15',
      question: 'What is the difference between call(), apply(), and bind()?',
      options: [
        'They are exactly the same',
        'call() and apply() invoke immediately, bind() returns a new function',
        'Only call() works with functions',
        'bind() is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'call() and apply() invoke the function immediately with a specified "this" context, while bind() returns a new function with the context bound.',
      difficulty: 'hard',
      category: 'JavaScript'
    }
  ],
  'React': [
    // Easy Questions
    {
      id: 'react1',
      question: 'What is JSX?',
      options: [
        'A JavaScript library',
        'A syntax extension for JavaScript',
        'A database query language',
        'A CSS framework'
      ],
      correctAnswer: 1,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      difficulty: 'easy',
      category: 'React'
    },
    {
      id: 'react2',
      question: 'Which hook is used for side effects in React?',
      options: ['useState', 'useEffect', 'useContext', 'useReducer'],
      correctAnswer: 1,
      explanation: 'useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or DOM manipulation.',
      difficulty: 'medium',
      category: 'React'
    },
    {
      id: 'react3',
      question: 'What is the virtual DOM?',
      options: [
        'A real DOM element',
        'A JavaScript representation of the real DOM',
        'A CSS framework',
        'A database'
      ],
      correctAnswer: 1,
      explanation: 'The virtual DOM is a JavaScript representation of the real DOM that React uses to optimize rendering performance.',
      difficulty: 'medium',
      category: 'React'
    },
    {
      id: 'react4',
      question: 'How do you create a React component?',
      options: [
        'function MyComponent() { return <div>Hello</div>; }',
        'component MyComponent() { return <div>Hello</div>; }',
        'create MyComponent() { return <div>Hello</div>; }',
        'react MyComponent() { return <div>Hello</div>; }'
      ],
      correctAnswer: 0,
      explanation: 'React components are created as JavaScript functions that return JSX.',
      difficulty: 'easy',
      category: 'React'
    },
    {
      id: 'react5',
      question: 'What is the correct way to handle events in React?',
      options: [
        'onclick="handleClick()"',
        'onClick={handleClick}',
        'onPress={handleClick}',
        'click={handleClick}'
      ],
      correctAnswer: 1,
      explanation: 'React uses camelCase event handlers like onClick, and you pass the function reference without parentheses.',
      difficulty: 'easy',
      category: 'React'
    },
    {
      id: 'react6',
      question: 'What is props in React?',
      options: [
        'Properties passed to components',
        'A type of state',
        'A React method',
        'A CSS class'
      ],
      correctAnswer: 0,
      explanation: 'Props (properties) are read-only data passed from parent components to child components.',
      difficulty: 'easy',
      category: 'React'
    },
    // Medium Questions
    {
      id: 'react7',
      question: 'What is the difference between state and props?',
      options: [
        'State is mutable, props are immutable',
        'Props are mutable, state is immutable',
        'They are the same thing',
        'State is for styling, props are for data'
      ],
      correctAnswer: 0,
      explanation: 'State is mutable data managed within a component, while props are immutable data passed from parent to child.',
      difficulty: 'medium',
      category: 'React'
    },
    {
      id: 'react8',
      question: 'When does useEffect run?',
      options: [
        'Only on component mount',
        'After every render by default',
        'Only when state changes',
        'Before component unmounts'
      ],
      correctAnswer: 1,
      explanation: 'useEffect runs after every render by default, but can be controlled with dependency arrays.',
      difficulty: 'medium',
      category: 'React'
    },
    {
      id: 'react9',
      question: 'What is the purpose of keys in React lists?',
      options: [
        'To style list items',
        'To help React identify which items have changed',
        'To sort the list',
        'To add event listeners'
      ],
      correctAnswer: 1,
      explanation: 'Keys help React identify which items have changed, are added, or are removed, improving performance.',
      difficulty: 'medium',
      category: 'React'
    },
    {
      id: 'react10',
      question: 'What is conditional rendering in React?',
      options: [
        'Rendering components based on conditions',
        'Rendering only on mobile devices',
        'Rendering with CSS conditions',
        'A type of loop'
      ],
      correctAnswer: 0,
      explanation: 'Conditional rendering allows you to render different components or elements based on certain conditions.',
      difficulty: 'medium',
      category: 'React'
    },
    // Hard Questions
    {
      id: 'react11',
      question: 'What is React.memo() used for?',
      options: [
        'To memorize component state',
        'To prevent unnecessary re-renders of functional components',
        'To store data in memory',
        'To create memoized callbacks'
      ],
      correctAnswer: 1,
      explanation: 'React.memo() is a higher-order component that prevents unnecessary re-renders by memoizing the component.',
      difficulty: 'hard',
      category: 'React'
    },
    {
      id: 'react12',
      question: 'What is the difference between useCallback and useMemo?',
      options: [
        'useCallback memoizes functions, useMemo memoizes values',
        'useMemo memoizes functions, useCallback memoizes values',
        'They are exactly the same',
        'useCallback is for classes, useMemo is for functions'
      ],
      correctAnswer: 0,
      explanation: 'useCallback returns a memoized callback function, while useMemo returns a memoized value.',
      difficulty: 'hard',
      category: 'React'
    },
    {
      id: 'react13',
      question: 'What is the Context API used for?',
      options: [
        'To manage global state',
        'To create contexts for styling',
        'To handle API calls',
        'To manage component lifecycle'
      ],
      correctAnswer: 0,
      explanation: 'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.',
      difficulty: 'hard',
      category: 'React'
    },
    {
      id: 'react14',
      question: 'What is a custom hook in React?',
      options: [
        'A built-in React hook',
        'A JavaScript function that uses React hooks',
        'A CSS styling technique',
        'A type of component'
      ],
      correctAnswer: 1,
      explanation: 'A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks.',
      difficulty: 'hard',
      category: 'React'
    }
  ],
  'Python': [
    // Easy Questions
    {
      id: 'py1',
      question: 'What is the correct way to create a list in Python?',
      options: ['list = []', 'list = {}', 'list = ()', 'list = ""'],
      correctAnswer: 0,
      explanation: 'Square brackets [] are used to create a list in Python.',
      difficulty: 'easy',
      category: 'Python'
    },
    {
      id: 'py2',
      question: 'What does the len() function do?',
      options: [
        'Returns the last element',
        'Returns the length of an object',
        'Creates a new list',
        'Sorts the list'
      ],
      correctAnswer: 1,
      explanation: 'The len() function returns the number of items in an object (string, list, tuple, etc.).',
      difficulty: 'easy',
      category: 'Python'
    },
    {
      id: 'py3',
      question: 'What is a lambda function in Python?',
      options: [
        'A regular function',
        'An anonymous function',
        'A class method',
        'A variable'
      ],
      correctAnswer: 1,
      explanation: 'A lambda function is a small anonymous function that can take any number of arguments but can only have one expression.',
      difficulty: 'medium',
      category: 'Python'
    },
    {
      id: 'py4',
      question: 'How do you comment a single line in Python?',
      options: ['// This is a comment', '/* This is a comment */', '# This is a comment', '<!-- This is a comment -->'],
      correctAnswer: 2,
      explanation: 'In Python, single-line comments start with the # symbol.',
      difficulty: 'easy',
      category: 'Python'
    },
    {
      id: 'py5',
      question: 'What is the correct way to create a dictionary in Python?',
      options: ['dict = []', 'dict = {}', 'dict = ()', 'dict = ""'],
      correctAnswer: 1,
      explanation: 'Curly braces {} are used to create a dictionary in Python.',
      difficulty: 'easy',
      category: 'Python'
    },
    {
      id: 'py6',
      question: 'Which of the following is used to define a function in Python?',
      options: ['function', 'def', 'func', 'define'],
      correctAnswer: 1,
      explanation: 'The "def" keyword is used to define a function in Python.',
      difficulty: 'easy',
      category: 'Python'
    },
    {
      id: 'py7',
      question: 'What will print(type(5.0)) output?',
      options: ['<class \'int\'>', '<class \'float\'>', '<class \'number\'>', '<class \'decimal\'>'],
      correctAnswer: 1,
      explanation: '5.0 is a floating-point number, so type() returns <class \'float\'>.',
      difficulty: 'easy',
      category: 'Python'
    },
    // Medium Questions
    {
      id: 'py8',
      question: 'What is the difference between a list and a tuple in Python?',
      options: [
        'Lists are mutable, tuples are immutable',
        'Tuples are mutable, lists are immutable',
        'They are exactly the same',
        'Lists are for numbers, tuples are for strings'
      ],
      correctAnswer: 0,
      explanation: 'Lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed).',
      difficulty: 'medium',
      category: 'Python'
    },
    {
      id: 'py9',
      question: 'What does the range() function return?',
      options: [
        'A list of numbers',
        'A range object',
        'A tuple of numbers',
        'A string of numbers'
      ],
      correctAnswer: 1,
      explanation: 'The range() function returns a range object, which is an iterable sequence of numbers.',
      difficulty: 'medium',
      category: 'Python'
    },
    {
      id: 'py10',
      question: 'What is list comprehension in Python?',
      options: [
        'A way to understand lists',
        'A concise way to create lists',
        'A method to compress lists',
        'A type of loop'
      ],
      correctAnswer: 1,
      explanation: 'List comprehension provides a concise way to create lists based on existing lists or other iterables.',
      difficulty: 'medium',
      category: 'Python'
    },
    {
      id: 'py11',
      question: 'What is the purpose of the __init__ method in Python classes?',
      options: [
        'To initialize object attributes',
        'To delete objects',
        'To print objects',
        'To copy objects'
      ],
      correctAnswer: 0,
      explanation: 'The __init__ method is a constructor that initializes object attributes when an instance is created.',
      difficulty: 'medium',
      category: 'Python'
    },
    {
      id: 'py12',
      question: 'What does the "self" parameter represent in Python class methods?',
      options: [
        'The class itself',
        'The instance of the class',
        'A global variable',
        'A function parameter'
      ],
      correctAnswer: 1,
      explanation: 'The "self" parameter refers to the instance of the class and is used to access instance variables and methods.',
      difficulty: 'medium',
      category: 'Python'
    },
    // Hard Questions
    {
      id: 'py13',
      question: 'What is a decorator in Python?',
      options: [
        'A function that modifies another function',
        'A way to decorate code with comments',
        'A type of variable',
        'A design pattern'
      ],
      correctAnswer: 0,
      explanation: 'A decorator is a function that takes another function and extends its behavior without explicitly modifying it.',
      difficulty: 'hard',
      category: 'Python'
    },
    {
      id: 'py14',
      question: 'What is the Global Interpreter Lock (GIL) in Python?',
      options: [
        'A security feature',
        'A mechanism that prevents multiple threads from executing Python code simultaneously',
        'A type of variable scope',
        'A debugging tool'
      ],
      correctAnswer: 1,
      explanation: 'The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.',
      difficulty: 'hard',
      category: 'Python'
    },
    {
      id: 'py15',
      question: 'What is the difference between deep copy and shallow copy?',
      options: [
        'Deep copy copies references, shallow copy copies objects',
        'Shallow copy copies references, deep copy copies objects recursively',
        'They are the same thing',
        'Deep copy is faster than shallow copy'
      ],
      correctAnswer: 1,
      explanation: 'Shallow copy creates a new object but inserts references to objects in the original. Deep copy creates a new object and recursively copies all nested objects.',
      difficulty: 'hard',
      category: 'Python'
    },
    {
      id: 'py16',
      question: 'What are generators in Python?',
      options: [
        'Functions that return iterators',
        'A type of variable',
        'Built-in Python modules',
        'Error handling mechanisms'
      ],
      correctAnswer: 0,
      explanation: 'Generators are functions that return an iterator object and can be used to create iterators in a memory-efficient way.',
      difficulty: 'hard',
      category: 'Python'
    }
  ]
};

export const categories = Object.keys(questionBank);

export function getQuestionsByCategory(category: string, difficulty?: string, count: number = 5): Question[] {
  const categoryQuestions = questionBank[category] || [];
  let filteredQuestions = categoryQuestions;
  
  if (difficulty) {
    filteredQuestions = categoryQuestions.filter(q => q.difficulty === difficulty);
  }
  
  // Shuffle and take the first 'count' questions
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function generateAIQuestions(topic: string, difficulty: string, count: number): Question[] {
  // AI simulation - in a real app, this would call an AI API
  const baseQuestions = getQuestionsByCategory(topic, difficulty, count);
  
  // Add some "AI-generated" variations
  return baseQuestions.map((q, index) => ({
    ...q,
    id: `ai-${topic}-${index}`,
    question: `[AI Enhanced] ${q.question}`,
  }));
}