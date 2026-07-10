import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Decouvrir from './pages/Decouvrir';
import Biographie from './pages/Biographie';
import Discographie from './pages/Discographie';
import Boutique from './pages/Boutique';
import Actualites from './pages/Actualites';
import Evenements from './pages/Evenements';
import PressBook from './pages/PressBook';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isLinktree = location.pathname === '/decouvrir';

  return (
    <>
      <ScrollToTop />
      {!isLinktree && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decouvrir" element={<Decouvrir />} />
        <Route path="/biographie" element={<Biographie />} />
        <Route path="/discographie" element={<Discographie />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/press-book" element={<PressBook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isLinktree && <Footer />}
    </>
  );
}
