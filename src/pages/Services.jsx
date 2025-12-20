import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ShieldAlert, Leaf, Sparkles, Bug, Rat, Droplets, Ruler, Scissors, Trash2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Services = ({ defaultTab }) => {
    // Simple scroll to section logic using URL params or props could be implemented
    // For now, laying out all services clearly.

    const headerContent = {
        '3d': {
            title: "Dératisation, Désinsectisation & Désinfection",
            description: "Nous utilisons des méthodes certifiées pour éradiquer tout type de nuisibles tout en préservant votre sécurité.",
            bgClass: "bg-gray-950",
            textClass: "text-blue-400",
            descClass: "text-gray-300"
        },
        'green': {
            title: "Élagage & Entretien de Jardin",
            description: "Nos paysagistes interviennent pour la taille, l'abattage et l'entretien régulier de vos extérieurs.",
            bgClass: "bg-gray-950",
            textClass: "text-green-400",
            descClass: "text-gray-300"
        },
        'clean': {
            title: "Entretien & Nettoyage Pro",
            description: "Services de nettoyage pour copropriétés, bureaux et fin de chantier.",
            bgClass: "bg-gray-950",
            textClass: "text-gray-200",
            descClass: "text-gray-300"
        }
    };

    const currentContent = headerContent[defaultTab] || {
        title: "Nos Expertises",
        description: "Des professionnels qualifiés pour des interventions efficaces et durables.",
        bgClass: "bg-gray-950",
        textClass: "text-welki-blue",
        descClass: "text-gray-300"
    };

    return (
        <Layout title="Nos Services" description="Découvrez nos prestations en hygiène 3D et entretien.">
            <div className="bg-gray-950 min-h-screen text-white">
                <Section className="pt-32 pb-16">
                    <div className="text-center">
                        <h1 className={`text-3xl md:text-5xl font-black mb-6 px-4 ${currentContent.textClass}`}>{currentContent.title}</h1>
                        <p className={`text-xl max-w-3xl mx-auto px-4 ${currentContent.descClass}`}>
                            {currentContent.description}
                        </p>
                    </div>
                </Section>

                {/* 3D Section */}
                {(defaultTab === '3d' || !defaultTab) && (
                    <Section id="3d">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 font-bold text-sm mb-4 border border-blue-800">
                                    <ShieldAlert size={16} /> HYGIÈNE 3D
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">Dératisation, Désinsectisation & Désinfection</h2>
                                <p className="text-gray-300 mb-6 text-lg">
                                    Nous utilisons des méthodes certifiées et des produits conformes aux normes pour éradiquer tout type de nuisibles tout en préservant votre sécurité.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-blue-400 border border-gray-800">
                                            <Rat />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Dératisation</h4>
                                            <p className="text-gray-400">Rats, souris, rongeurs. Traitement curatif et préventif (rebouchage, appâts sécurisés).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-blue-400 border border-gray-800">
                                            <Bug />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Désinsectisation</h4>
                                            <p className="text-gray-400">Cafards, punaises de lit, fourmis, guêpes, frelons, moustiques. Intervention choc ou gel.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-blue-400 border border-gray-800">
                                            <Droplets />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Désinfection</h4>
                                            <p className="text-gray-400">Traitement bactéricide, fongicide et virucide pour locaux contaminés.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full min-h-[400px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800">
                                {/* Placeholder for Pest Control Image */}
                                <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center text-blue-500 font-bold">
                                    IMAGE INTERVENTION 3D
                                </div>
                            </div>
                        </div>
                    </Section>
                )}

                {/* Espaces Verts Section */}
                {(defaultTab === 'green' || !defaultTab) && (
                    <Section id="green">
                        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="order-2 md:order-1 h-full min-h-[400px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800">
                                {/* Placeholder for Gardening Image */}
                                <div className="absolute inset-0 bg-green-900/10 flex items-center justify-center text-green-500 font-bold">
                                    IMAGE JARDIN / ÉLAGAGE
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/40 text-green-300 font-bold text-sm mb-4 border border-green-800">
                                    <Leaf size={16} /> ESPACES VERTS
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">Élagage & Entretien de Jardin</h2>
                                <p className="text-gray-300 mb-6 text-lg">
                                    Nos paysagistes interviennent pour la taille, l'abattage et l'entretien régulier de vos extérieurs.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-green-400 border border-gray-800">
                                            <Scissors />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Taille & Élagage</h4>
                                            <p className="text-gray-400">Tonte, taille de haies, débroussaillage et élagage d'arbres toutes hauteurs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-green-400 border border-gray-800">
                                            <Ruler />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Aménagement</h4>
                                            <p className="text-gray-400">Plantations saisonnières, création de massif, engazonnement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                )}

                {/* Nettoyage Section */}
                {(defaultTab === 'clean' || !defaultTab) && (
                    <Section id="clean">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-gray-300 font-bold text-sm mb-4 border border-gray-700">
                                    <Sparkles size={16} /> NETTOYAGE
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">Entretien & Nettoyage Pro</h2>
                                <p className="text-gray-300 mb-6 text-lg">
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
                                        <li key={i} className="flex items-center text-gray-300">
                                            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="h-full min-h-[400px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800">
                                {/* Placeholder for Cleaning Image */}
                                <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center text-gray-400 font-bold">
                                    IMAGE NETTOYAGE
                                </div>
                            </div>
                        </div>
                    </Section>
                )}
            </div>
        </Layout>
    );

};

export default Services;
