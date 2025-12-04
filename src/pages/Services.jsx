import SectionCard from '../components/SectionCard.jsx';
import arrosageImg from '../../arrosage .png.jpeg';
import desherbageProImg from '../../Tarif-desherbage-thermique-jardinier-paysagiste-outil-professionnel.jpg.webp';

function Services() {
  return (
    <div className="page">
      <header className="page-header">
        <span className="page-kicker">Nos domaines d&apos;expertise</span>
        <h1>Des solutions complètes pour vos locaux et extérieurs</h1>
        <p>
          WELKI vous accompagne de la lutte antiparasitaire à l&apos;entretien
          de vos espaces, avec un haut niveau d&apos;exigence en matière de
          sécurité et de traçabilité.
        </p>
      </header>

      <div className="grid-2">
        <SectionCard
          label="Les 3D"
          title="Dératisation, désinsectisation, désinfection"
          accent="green"
        >
          <ul className="list-bullets">
            <li>
              <strong>Dératisation</strong> : diagnostic, traitement, pose de
              dispositifs sécurisés, suivi des consommations.
            </li>
            <li>
              <strong>Désinsectisation</strong> : traitements ciblés contre
              cafards, punaises de lit, puces, fourmis, guêpes et nuisibles
              volants.
            </li>
            <li>
              <strong>Désinfection</strong> : nébulisation et désinfection des
              surfaces contre virus, bactéries et champignons.
            </li>
          </ul>
        </SectionCard>

        <SectionCard
          label="Espaces verts"
          title="Élagage & entretien des extérieurs"
          accent="blue"
        >
          <div className="services-green">
            <div>
              <ul className="list-bullets">
                <li>Tonte régulière de pelouses et entretien des haies.</li>
                <li>Élagage d&apos;arbres, abattage sécuritaire et broyage.</li>
                <li>Plantations saisonnières et aménagements paysagers.</li>
                <li>Désherbage manuel ou mécanique des allées et parkings.</li>
              </ul>
            </div>
            <div className="services-photos">
              <figure className="services-photo-main">
                <img
                  src={arrosageImg}
                  alt="Arrosage et entretien professionnel des espaces verts par Welki"
                />
              </figure>
              <figure className="services-photo-secondary">
                <img
                  src={desherbageProImg}
                  alt="Matériel de désherbage thermique utilisé par Welki"
                />
              </figure>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard
        label="Entretien"
        title="Nettoyage et hygiène des bâtiments"
        accent="teal"
      >
        <div className="grid-2">
          <ul className="list-bullets">
            <li>Nettoyage courant des bureaux et parties communes.</li>
            <li>Entretien des copropriétés et cages d&apos;escaliers.</li>
            <li>Nettoyage de fin de chantier et remise en état globale.</li>
          </ul>
          <ul className="list-bullets">
            <li>Remise en état avant / après location.</li>
            <li>Désinfection complète : sanitaires, contact, points sensibles.</li>
            <li>Mises en place de plans d&apos;hygiène personnalisés.</li>
          </ul>
        </div>
      </SectionCard>
    </div>
  );
}

export default Services;


