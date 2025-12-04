function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-logo brand-logo-small">W</div>
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
            <p className="footer-heading">Zones d&apos;intervention</p>
            <p>Île-de-France et alentours</p>
          </div>
          <div>
            <p className="footer-heading">Horaires</p>
            <p>Intervention 7j/7 sur rendez-vous</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WELKI. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;


