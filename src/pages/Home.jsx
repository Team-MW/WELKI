import SectionCard from '../components/SectionCard.jsx';
import photoGarden from '../../Desherbage-et-Tonte.png.webp';
import photoDisinfection from '../../desinfection.png.avif';
import photoCleaning from '../../tailhait.jpg';

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
      </section>

      <section className="home-bubbles">
        <div className="home-bubbles-wrap">
          <div className="home-bubble home-bubble-main">
            <img
              src={photoDisinfection}
              alt="Intervention de désinfection par une équipe Welki"
            />
          </div>
          <div className="home-bubble home-bubble-top">
            <img
              src={photoGarden}
              alt="Élagage, tonte et désherbage réalisés par Welki"
            />
          </div>
          <div className="home-bubble home-bubble-bottom">
            <img
              src={photoCleaning}
              alt="Nettoyage et entretien de locaux par Welki"
            />
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

      <section className="home-why">
        <div className="home-why-header">
          <span className="page-kicker">Pourquoi choisir WELKI ?</span>
          <h2>
            Un partenaire unique pour la propreté, la sécurité et l&apos;image de vos sites.
          </h2>
        </div>
        <div className="home-why-grid">
          <div className="home-why-item">
            <div className="home-why-icon">01</div>
            <h3>Expertise certifiée</h3>
            <p>
              Techniciens <strong>certifiés Certibiocide</strong>, protocoles mis à jour
              et interventions tracées pour les particuliers, pros et collectivités.
            </p>
          </div>
          <div className="home-why-item">
            <div className="home-why-icon">02</div>
            <h3>Réactivité & transparence</h3>
            <p>
              Diagnostic rapide, devis clair avant toute intervention et compte-rendu
              détaillé à la fin de la prestation.
            </p>
          </div>
          <div className="home-why-item">
            <div className="home-why-icon">03</div>
            <h3>Accompagnement sur-mesure</h3>
            <p>
              Solutions adaptées à vos contraintes (horaires, accès, budget) et
              <strong> suivi possible toute l&apos;année</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="home-process">
        <div className="home-process-header">
          <span className="page-kicker">Notre méthode</span>
          <h2>Un déroulé d&apos;intervention simple et rassurant</h2>
        </div>
        <ol className="home-process-steps">
          <li className="home-process-step">
            <span className="home-process-step-number">1</span>
            <div>
              <h3>Prise de contact</h3>
              <p>
                Vous nous expliquez votre situation par téléphone, e-mail ou via le
                formulaire de devis.
              </p>
            </div>
          </li>
          <li className="home-process-step">
            <span className="home-process-step-number">2</span>
            <div>
              <h3>Diagnostic & devis</h3>
              <p>
                Nous réalisons un diagnostic (sur place ou à distance) et vous envoyons
                un devis détaillé et sans surprise.
              </p>
            </div>
          </li>
          <li className="home-process-step">
            <span className="home-process-step-number">3</span>
            <div>
              <h3>Intervention</h3>
              <p>
                Mise en place des traitements ou opérations d&apos;élagage / nettoyage,
                dans le respect des règles de sécurité.
              </p>
            </div>
          </li>
          <li className="home-process-step">
            <span className="home-process-step-number">4</span>
            <div>
              <h3>Suivi & conseils</h3>
              <p>
                Conseils de prévention, possibilité de contrats de suivi et
                disponibilités en cas de nouvelle urgence.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="home-cta-banner">
        <div className="home-cta-text">
          <h2>Besoin d&apos;une intervention rapide ou d&apos;un devis ?</h2>
          <p>
            Contactez-nous dès maintenant : une équipe WELKI revient vers vous
            rapidement pour sécuriser vos locaux et vos espaces.
          </p>
        </div>
        <div className="home-cta-actions">
          <a href="/contact" className="btn btn-primary">
            Demander un devis en ligne
          </a>
          <a href="tel:0608070696" className="btn btn-outline">
            Appeler le 06.08.07.06.96
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;


