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
                        <strong className="text-white">Siège social :</strong> [Adresse complète à compléter]<br />
                        <strong className="text-white">Téléphone :</strong> 06.08.07.06.96<br />
                        <strong className="text-white">Email :</strong> WELKI@GMAIL.COM<br />
                        <strong className="text-white">SIRET :</strong> [Numéro SIRET à compléter]
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">2. Directeur de la publication</h2>
                    <p className="mb-6">
                        Le directeur de la publication du site est [Nom du dirigeant].
                    </p>

                    <h2 className="text-xl font-bold mb-4 text-white">3. Hébergement</h2>
                    <p className="mb-6">
                        Le site est hébergé par [Nom de l'hébergeur - ex: Vercel, Netlify, OVH],<br />
                        [Adresse de l'hébergeur].
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
