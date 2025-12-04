function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-logo brand-logo-small">
            <img src="/logo.png" alt="Logo Welki" className="brand-logo-img" />
          </div>
          <div>
            <p className="footer-title">WELKI</p>
            <p className="footer-subtitle">
              Sécurité, efficacité et professionnalisme.
            </p>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <p className="footer-heading">Contact</p>
            <p>06.08.07.06.96</p>
            <p>welki@gmail.com</p>
          </div>
          <div>
            <p className="footer-heading">Liens utiles</p>
            <p>
              <a href="/">Accueil</a>
            </p>
            <p>
              <a href="/services">Nos services</a>
            </p>
            <p>
              <a href="/contact">Devis / Contact</a>
            </p>
          </div>
          <div>
            <p className="footer-heading">Horaires</p>
            <p>Intervention 7j/7 sur rendez-vous</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WELKI. Tous droits réservés.</p>
        <p className="footer-credit">
          Réalisé par{' '}
          <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer">
            Microdidact
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;


