import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FeesPage from './pages/FeesPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const { isUrdu } = useLanguage();
  
  return (
    <div 
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display text-[#0d1b12]" 
      style={{ backgroundColor: '#ffffff' }}
      dir={isUrdu ? 'rtl' : 'ltr'}
    >
          <Header />
          
          <main className="flex w-full flex-col items-center flex-1">
            <div className="w-full max-w-7xl px-4">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/fees" element={<FeesPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </main>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
