function Contact() {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-kicker">Devis & prise de contact</span>
        <h1>Parlons de votre projet ou de votre besoin d&apos;intervention</h1>
        <p>
          Décrivez-nous votre situation, nous revenons vers vous rapidement
          avec une proposition claire et adaptée.
        </p>
      </header>

      <div className="grid-2 contact-grid">
        <section className="contact-card">
          <h2>Demande de devis en ligne</h2>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                'Merci pour votre message ! Nous vous contacterons rapidement pour votre devis WELKI.'
              );
            }}
          >
            <div className="form-row">
              <label htmlFor="name">Nom / Société</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom ou le nom de votre entreprise"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@example.com"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Téléphone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 00 00 00 00"
              />
            </div>
            <div className="form-row">
              <label htmlFor="service">Type de prestation</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Sélectionnez une prestation
                </option>
                <option value="3d">3D : Dératisation / Désinsectisation / Désinfection</option>
                <option value="elagage">Élagage & espaces verts</option>
                <option value="entretien">Entretien & nettoyage</option>
                <option value="autre">Autre / À préciser</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">Description du besoin</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Décrivez le type de local, la surface, l'urgence de la situation..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Envoyer ma demande de devis
            </button>
          </form>
        </section>

        <section className="contact-infos">
          <h2>Nos coordonnées</h2>
          <div className="contact-infos-block">
            <p className="contact-heading">Téléphone</p>
            <p className="contact-value">06.08.07.06.96</p>
          </div>
          <div className="contact-infos-block">
            <p className="contact-heading">E-mail</p>
            <p className="contact-value">welki@gmail.com</p>
          </div>
          <div className="contact-infos-block">
            <p className="contact-heading">Site web</p>
            <p className="contact-value">welki.fr</p>
          </div>
          <div className="contact-infos-block">
            <p className="contact-heading">Interventions</p>
            <p>Du lundi au samedi, sur rendez-vous, intervention possible en urgence.</p>
          </div>
          <div className="contact-highlight">
            <p>
              Un QR code pourra être intégré ici pour un accès direct à la
              demande de devis depuis vos supports imprimés.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;


