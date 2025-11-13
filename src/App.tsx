// src/App.tsx
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import { Button } from './components/ui/button';
import { LanguageProvider, useTranslation } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const { language, setLanguage, t } = useTranslation();

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

  const handleLanguageChange = (lang: 'en' | 'ko') => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="min-h-screen border-none bg-background text-foreground transition-colors duration-300">
        <div className="fixed top-4 right-4 flex space-x-2 z-50">
          <Button
            onClick={() => handleLanguageChange('en')}
            variant={language === 'en' ? 'default' : 'outline'}
            size="sm"
          >
            EN
          </Button>
          <Button
            onClick={() => handleLanguageChange('ko')}
            variant={language === 'ko' ? 'default' : 'outline'}
            size="sm"
          >
            KO
          </Button>
          <Button
            onClick={toggleDarkMode}
            variant="gray"
            size="sm"
          >
            {darkMode ? '☀️' : '🌙'}
          </Button>
        </div>
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
