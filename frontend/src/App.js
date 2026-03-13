import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import MedicalRecordReview from '@/pages/MedicalRecordReview';
import DBQCompletion from '@/pages/DBQCompletion';
import NexusLetters from '@/pages/NexusLetters';
import Resources from '@/pages/Resources';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/medical-record-review" element={<MedicalRecordReview />} />
          <Route path="/services/dbq-completion" element={<DBQCompletion />} />
          <Route path="/services/nexus-letters" element={<NexusLetters />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;