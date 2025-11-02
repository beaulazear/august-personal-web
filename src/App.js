import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ModernPortfolio from './components/ModernPortfolio';
import ResumeModern from './components/ResumeModern';
import ContactModern from './components/ContactModern';
import AnimalCare from './components/AnimalCare';

// ScrollToTop component that scrolls to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Layout wrapper that includes Header for all pages
const Layout = ({ children, showHeader = true }) => {
  return (
    <div className="min-h-screen font-body">
      {showHeader && <Header />}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <ModernPortfolio />
          </Layout>
        } />
        <Route path="/resume" element={
          <Layout>
            <ResumeModern />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactModern />
          </Layout>
        } />
        <Route path="/animal-care" element={
          <Layout>
            <AnimalCare />
          </Layout>
        } />
        <Route path="/beaus-animal-care" element={
          <Layout>
            <AnimalCare />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
