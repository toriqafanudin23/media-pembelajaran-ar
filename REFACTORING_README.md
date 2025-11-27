# Clean Code Refactoring - README

## Overview

This project has been refactored to follow clean code principles, improve maintainability, and enhance developer experience.

## New Structure

### 📁 Directory Organization

```
src/
├── constants/          # Centralized configuration
│   ├── urls.js        # URL and asset paths
│   └── quiz.js        # Quiz questions and config
│
├── hooks/             # Custom React hooks
│   ├── useMathJax.js      # MathJax rendering
│   ├── useQuizTimer.js    # Timer logic
│   └── useQuizAccess.js   # Access control
│
├── utils/             # Utility functions
│   ├── formatters.js  # Time, number formatting
│   └── audio.js       # Sound effects
│
├── components/
│   ├── quiz/          # Quiz-specific components
│   │   ├── QuizTimer.jsx
│   │   ├── QuizQuestion.jsx
│   │   ├── QuizNavigation.jsx
│   │   └── QuizProgressIndicator.jsx
│   │
│   ├── ui/            # Reusable UI components
│   │   ├── UnitDisplay.jsx
│   │   ├── InputSubmit.jsx
│   │   ├── Text.jsx
│   │   └── ...
│   │
│   └── features/      # Feature components
│       ├── SimulasiAR.jsx
│       └── ...
│
└── pages/             # Page components
    ├── Quiz.jsx
    └── ...
```

## Key Principles Applied

### 1. **DRY (Don't Repeat Yourself)**

- Extracted common logic into hooks
- Centralized constants and utilities
- Reusable components

### 2. **Single Responsibility**

- Each component has one clear purpose
- Separated business logic from UI
- Focused utility functions

### 3. **Separation of Concerns**

- Constants separate from logic
- Hooks separate from components
- Utilities separate from UI

### 4. **Self-Documenting Code**

- JSDoc comments on all components
- Descriptive variable names
- Clear function signatures

## Usage Examples

### Using Custom Hooks

```javascript
// MathJax rendering
import { useMathJax } from "../hooks/useMathJax";

const MyComponent = ({ formula }) => {
  useMathJax([formula]);
  return <div>{formula}</div>;
};

// Quiz timer
import { useQuizTimer } from "../hooks/useQuizTimer";

const QuizPage = () => {
  const { timeLeft, pause, resume } = useQuizTimer(1500, handleTimeUp);
  // ...
};
```

### Using Constants

```javascript
import { ICONS, SOUNDS } from "../constants/urls";
import { QUIZ_CONFIG } from "../constants/quiz";

// Use in components
<img src={ICONS.START} alt="Start" />;
playSound(SOUNDS.CORRECT);
const duration = QUIZ_CONFIG.DURATION_SECONDS;
```

### Using Utilities

```javascript
import { formatTime } from "../utils/formatters";
import { playCorrectSound } from "../utils/audio";

// Format time
const timeString = formatTime(125); // "2:05"

// Play sound
playCorrectSound();
```

## Benefits

### For Developers

- ✅ Easier to understand code
- ✅ Faster to add new features
- ✅ Easier to debug issues
- ✅ Better IntelliSense support
- ✅ Reduced cognitive load

### For Codebase

- ✅ Less code duplication
- ✅ Better organization
- ✅ Easier to test
- ✅ More maintainable
- ✅ Scalable architecture

## Best Practices

### When Adding New Features

1. **Check for existing utilities** before creating new ones
2. **Use custom hooks** for reusable logic
3. **Add JSDoc comments** for all new components
4. **Follow naming conventions**:
   - Components: PascalCase
   - Hooks: useCamelCase
   - Utilities: camelCase
   - Constants: UPPER_SNAKE_CASE

### Component Guidelines

```javascript
/**
 * Component description
 * @param {Object} props
 * @param {string} props.title - Prop description
 */
const MyComponent = ({ title }) => {
  // Use hooks at the top
  useMathJax([title]);

  // Event handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return <div>{title}</div>;
};

export default MyComponent;
```

## Migration Notes

**No breaking changes** - All refactored components maintain backward compatibility.

Existing code will continue to work, but new code should use the new structure:

- Import from `constants/` instead of inline values
- Use custom hooks instead of duplicating logic
- Use utility functions instead of inline implementations

## Future Improvements

Consider these enhancements:

1. TypeScript for type safety
2. Unit tests for hooks and utilities
3. PropTypes for runtime validation
4. Storybook for component documentation
5. ESLint rules for consistency

## Questions?

Refer to the [walkthrough.md](file:///home/avan/.gemini/antigravity/brain/09cec771-809c-4a68-8e27-7ecb5aa63c54/walkthrough.md) for detailed information about all changes.
