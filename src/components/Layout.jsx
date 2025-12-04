import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

function Layout({ children }) {
  useEffect(() => {
    const root = document.documentElement;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      root.style.setProperty('--scroll-progress', String(progress));

      document.body.classList.toggle('is-scrolled', scrollTop > 32);
      document.body.classList.toggle('show-scroll-top', scrollTop > 360);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    document
      .querySelectorAll('.scroll-reveal')
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
      <WhatsAppButton />
      <button
        type="button"
        className="scroll-top-button"
        onClick={handleScrollTop}
        aria-label="Revenir en haut de la page"
      >
        ↑
      </button>
    </div>
  );
}

export default Layout;


