import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* All service links point to the main Services page for now, or could have anchors */}
        <Route path="/hygiene-3d" element={<Services key="3d" defaultTab="3d" />} />
        <Route path="/espaces-verts" element={<Services key="green" defaultTab="green" />} />
        <Route path="/nettoyage" element={<Services key="clean" defaultTab="clean" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </>
  );
}

export default App;
