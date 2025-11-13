// src/App.tsx
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import { Button } from './components/ui/button';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <Button
          onClick={toggleDarkMode}
          variant="neutral"
          className="fixed top-4 right-4 p-2 rounded-full shadow-md z-50"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/result/:type" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
