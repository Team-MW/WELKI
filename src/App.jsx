import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loading on route change
    setIsLoading(true);

    // Smooth transition delay to mask image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger only on path change

  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hygiene-3d" element={<Services key="3d" defaultTab="3d" />} />
          <Route path="/espaces-verts" element={<Services key="green" defaultTab="green" />} />
          <Route path="/nettoyage" element={<Services key="clean" defaultTab="clean" />} />
          <Route path="/multi-services" element={<Services key="multi" defaultTab="multi" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
