import SectionCard from '../components/SectionCard.jsx';

function Home() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-kicker">À PROPOS DE NOUS</span>
          <h1>
            WELKI, votre partenaire hygiène, 3D, élagage et entretien.
          </h1>
          <p className="hero-text">
            Avec plus de <strong>10 ans d&apos;expérience</strong> et des
            techniciens <strong>certifiés Certibiocide</strong>, nous
            intervenons avec des méthodes maîtrisées et des solutions adaptées à
            chaque situation.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">
              Demander un devis
            </a>
            <a href="/services" className="btn btn-outline">
              Découvrir nos services
            </a>
          </div>
          <div className="hero-badges">
            <span>+10 ans d&apos;expérience</span>
            <span>Certifiés Certibiocide</span>
            <span>Interventions rapides</span>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-card">
            <p className="hero-panel-title">Intervention 3D</p>
            <p className="hero-panel-text">
              Dératisation, désinsectisation, désinfection dans les habitats,
              locaux professionnels et copropriétés.
            </p>
          </div>
          <div className="hero-panel-card hero-panel-accent">
            <p className="hero-panel-title">Élagage & entretien</p>
            <p className="hero-panel-text">
              Tonte, taille, désherbage, remise en état avant/après location et
              fin de chantier.
            </p>
          </div>
        </div>
      </section>

      <SectionCard label="Nos expertises" title="Les 3D : Dératisation, Désinsectisation, Désinfection">
        <ul className="list-bullets">
          <li>
            <strong>Dératisation</strong> : rats, souris, rongeurs.
          </li>
          <li>
            <strong>Désinsectisation</strong> : cafards, punaises de lit,
            fourmis, guêpes, moustiques.
          </li>
          <li>
            <strong>Désinfection</strong> : traitement contre virus, bactéries
            et champignons.
          </li>
        </ul>
      </SectionCard>

      <SectionCard label="Espaces verts" title="Élagage, débroussaillage & entretien des extérieurs" accent="blue">
        <p>
          Nous entretenons vos jardins, parcs et espaces verts avec une
          approche durable et sécurisée.
        </p>
        <ul className="list-bullets">
          <li>Tonte, taille et désherbage.</li>
          <li>Plantations saisonnières et arrosage.</li>
          <li>Élagage, débroussaillage et entretien de haies.</li>
        </ul>
      </SectionCard>

      <SectionCard label="Nettoyage" title="Entretien courant & hygiène des locaux" accent="teal">
        <ul className="list-bullets">
          <li>Entretien des copropriétés et parties communes.</li>
          <li>Nettoyage de fin de chantier.</li>
          <li>Remise en état avant / après location.</li>
          <li>Désinfection complète des surfaces.</li>
        </ul>
      </SectionCard>
    </div>
  );
}

export default Home;


