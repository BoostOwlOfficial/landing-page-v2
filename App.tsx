import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUsage } from './components/TermsOfUsage';
import { DataDeletionInstructions } from './components/DataDeletionInstructions';
import { GetStarted } from './components/GetStarted';
import { ContactSales } from './components/ContactSales';
import { ChatbotDemo } from './components/ChatbotDemo';
import { ApiDocs } from './components/ApiDocs';
import { Careers } from './components/Careers';
import { Blog } from './components/Blog';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-usage" element={<TermsOfUsage />} />
          <Route path="/data-deletion" element={<DataDeletionInstructions />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact" element={<ContactSales />} />
          <Route path="/chatbot-demo" element={<ChatbotDemo />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;