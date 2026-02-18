import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUsage } from './components/TermsOfUsage';
import { DataDeletionInstructions } from './components/DataDeletionInstructions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-usage" element={<TermsOfUsage />} />
          <Route path="/data-deletion" element={<DataDeletionInstructions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;