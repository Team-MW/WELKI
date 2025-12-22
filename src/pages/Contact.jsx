import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <Layout title="Contact" description="Demandez votre devis gratuit chez Welki.">
            <Section className="bg-gray-950 text-white pt-32 pb-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Contactez-nous</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Une urgence ? Un projet ? <br />
                        Notre équipe est disponible pour répondre à tous vos besoins.
                    </p>
                </div>
            </Section>

            <Section className="bg-gray-900 py-12">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Coordonnées Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-950 p-8 rounded-3xl shadow-xl border border-gray-800 h-fit"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white">Nos Coordonnées</h3>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Téléphone</p>
                                    <a href="tel:0608070696" className="text-2xl font-bold text-white hover:text-welki-green transition-colors">
                                        06.08.07.06.96
                                    </a>
                                    <p className="text-sm text-welki-green font-medium mt-1 flex items-center">
                                        <CheckCircle size={12} className="mr-1" /> Disponible 7j/7 pour urgences
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                    <a href="mailto:WELKI@GMAIL.COM" className="text-xl font-bold text-white hover:text-welki-green transition-colors break-all">
                                        WELKI@GMAIL.COM
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-gray-800 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Zone d'intervention</p>
                                    <p className="text-lg font-medium text-white">
                                        Paris et Île-de-France
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-blue-900/10 rounded-2xl border border-blue-900/30">
                            <p className="font-bold text-blue-300 mb-2">Pourquoi nous choisir ?</p>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>✓ Devis gratuit et détaillé</li>
                                <li>✓ Intervenants qualifiés et discrets</li>
                                <li>✓ Respect des normes sanitaires</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-950 p-8 rounded-3xl shadow-xl border border-gray-800"
                    >
                        <iframe
                            src="https://tally.so/r/5B48RQ?transparentBackground=1"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Formulaire De Contact"
                            className="bg-transparent"
                        ></iframe>
                    </motion.div>
                </div>
            </Section>
        </Layout>
    );
};

export default Contact;
