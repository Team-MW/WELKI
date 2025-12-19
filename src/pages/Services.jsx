import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ShieldAlert, Leaf, Sparkles, Bug, Rat, Droplets, Ruler, Scissors, Trash2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Services = ({ defaultTab }) => {
    // Simple scroll to section logic using URL params or props could be implemented
    // For now, laying out all services clearly.

    return (
        <Layout title="Nos Services" description="Découvrez nos prestations en hygiène 3D et entretien.">
            <Section className="bg-welki-light-blue pt-32 pb-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-welki-blue">Nos Expertises</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Des professionnels qualifiés pour des interventions efficaces et durables.
                    </p>
                </div>
            </Section>

            {/* 3D Section */}
            <Section className="bg-white" id="3d">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-welki-blue font-bold text-sm mb-4">
                            <ShieldAlert size={16} /> HYGIÈNE 3D
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dératisation, Désinsectisation & Désinfection</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Nous utilisons des méthodes certifiées et des produits conformes aux normes pour éradiquer tout type de nuisibles tout en préservant votre sécurité.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-welki-blue">
                                    <Rat />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Dératisation</h4>
                                    <p className="text-gray-500">Rats, souris, rongeurs. Traitement curatif et préventif (rebouchage, appâts sécurisés).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-welki-blue">
                                    <Bug />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Désinsectisation</h4>
                                    <p className="text-gray-500">Cafards, punaises de lit, fourmis, guêpes, frelons, moustiques. Intervention choc ou gel.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-welki-blue">
                                    <Droplets />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Désinfection</h4>
                                    <p className="text-gray-500">Traitement bactéricide, fongicide et virucide pour locaux contaminés.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full min-h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg relative">
                        {/* Placeholder for Pest Control Image */}
                        <div className="absolute inset-0 bg-welki-blue/10 flex items-center justify-center text-welki-blue font-bold">
                            IMAGE INTERVENTION 3D
                        </div>
                    </div>
                </div>
            </Section>

            {/* Espaces Verts Section */}
            <Section className="bg-gray-50" id="green">
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 h-full min-h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg relative">
                        {/* Placeholder for Gardening Image */}
                        <div className="absolute inset-0 bg-welki-green/10 flex items-center justify-center text-welki-green font-bold">
                            IMAGE JARDIN / ÉLAGAGE
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-welki-green font-bold text-sm mb-4">
                            <Leaf size={16} /> ESPACES VERTS
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Élagage & Entretien de Jardin</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Nos paysagistes interviennent pour la taille, l'abattage et l'entretien régulier de vos extérieurs.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-welki-green">
                                    <Scissors />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Taille & Élagage</h4>
                                    <p className="text-gray-500">Tonte, taille de haies, débroussaillage et élagage d'arbres toutes hauteurs.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-welki-green">
                                    <Ruler />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Aménagement</h4>
                                    <p className="text-gray-500">Plantations saisonnières, création de massif, engazonnement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Nettoyage Section */}
            <Section className="bg-white" id="clean">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-sm mb-4">
                            <Sparkles size={16} /> NETTOYAGE
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Entretien & Nettoyage Pro</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            Services de nettoyage pour copropriétés, bureaux et fin de chantier.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Nettoyage courant des immeubles / copropriétés",
                                "Sortie et rentrée des poubelles",
                                "Nettoyage de fin de chantier",
                                "Remise en état avant/après location",
                                "Débarras d'encombrants",
                                "Shampouinage moquettes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-welki-blue rounded-full mr-3"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="h-full min-h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg relative">
                        {/* Placeholder for Cleaning Image */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                            IMAGE NETTOYAGE
                        </div>
                    </div>
                </div>
            </Section>

        </Layout>
    );
};

export default Services;
