import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const MentionsLegales = () => {
    return (
        <Layout title="Mentions Légales">
            <Section className="py-20 bg-gray-950 text-gray-300">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-black mb-8 text-white">Mentions Légales</h1>

                    <h2 className="text-xl font-bold mb-4 text-white">1. Éditeur du site</h2>
                    <p className="mb-6">
                        Le présent site est la propriété de l'entreprise <strong className="text-white">WELKI</strong>.<br />
                        <strong className="text-white">Forme juridique :</strong> Société par actions simplifiée (Société à associé unique)<br />
                        <strong className="text-white">Capital social :</strong> 1 000,00 Euros<br />
                        <strong className="text-white">Siège social :</strong> <a href="https://www.google.com/maps/search/?api=1&query=26+chemin+Azais,+31100+Toulouse" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">26 chemin Azais 31100 Toulouse</a><br />
                        <strong className="text-white">Immatriculation :</strong> 934 772 344 R.C.S. Toulouse<br />
                        <strong className="text-white">Téléphone :</strong> <a href="tel:+33782729347" className="hover:text-white transition-colors underline">+33 7 82 72 93 47</a><br />
                        <strong className="text-white">Email :</strong> <a href="mailto:welkifrance@gmail.com" className="hover:text-white transition-colors underline">welkifrance@gmail.com</a><br />
                        <strong className="text-white">Activités :</strong> Nettoyage courant des bâtiments, homme toutes mains, entretien des parcs et jardins, agents et hôtesses d'accueil, sécurité incendie, désinfection, dératisation et désinsectisation, élimination de nuisibles.<br />
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">2. Directeur de la publication</h2>
                    <p className="mb-6">
                        Le directeur de la publication du site est <strong className="text-white">Mr FEROUANI Yassine</strong>, en sa qualité de Président.<br />
                        <strong className="text-white">Adresse de gestion :</strong> 54 rue Jean Lebas, 31400 Toulouse.
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">3. Hébergement</h2>
                    <p className="mb-6">
                        Le site est hébergé par <strong className="text-white">Vercel Inc.</strong>,<br />
                        440 N Barranca Ave #4133 Covina, CA 91723.
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">4. Propriété intellectuelle</h2>
                    <p className="mb-6">
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">5. Certifications</h2>
                    <p className="mb-6">
                        L'entreprise WELKI est agréée <strong className="text-white">CERTIBIOCIDE</strong> pour l'application de produits biocides destinés à l'hygiène publique.
                        Nos interventions respectent le cadre légal et réglementaire en vigueur.
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">6. Données personnelles</h2>
                    <p className="mb-6">
                        Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
                        Pour exercer ce droit, contactez-nous par email.
                    </p>
                </div>
            </Section>
        </Layout>
    );
};

export default MentionsLegales;
