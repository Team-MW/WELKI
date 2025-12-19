import React, { useState } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Votre demande a bien été envoyée ! Nous vous recontacterons sous 24h.');
        setFormState({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <Layout title="Contact" description="Demandez votre devis gratuit chez Welki.">
            <Section className="bg-[#003d80] text-white pt-32 pb-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Contactez-nous</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Une urgence ? Un projet ? <br />
                        Notre équipe est disponible pour répondre à tous vos besoins.
                    </p>
                </div>
            </Section>

            <Section className="bg-gray-50 py-12">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Coordonnées Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-fit"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-welki-blue">Nos Coordonnées</h3>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-50 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Téléphone</p>
                                    <a href="tel:0608070696" className="text-2xl font-bold text-gray-900 hover:text-welki-green transition-colors">
                                        06.08.07.06.96
                                    </a>
                                    <p className="text-sm text-green-600 font-medium mt-1 flex items-center">
                                        <CheckCircle size={12} className="mr-1" /> Disponible 7j/7 pour urgences
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-50 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                    <a href="mailto:WELKI@GMAIL.COM" className="text-xl font-bold text-gray-900 hover:text-welki-green transition-colors break-all">
                                        WELKI@GMAIL.COM
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-50 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Zone d'intervention</p>
                                    <p className="text-lg font-medium text-gray-900">
                                        Paris et Île-de-France
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-welki-light-blue rounded-2xl border border-blue-100">
                            <p className="font-bold text-welki-blue mb-2">Pourquoi nous choisir ?</p>
                            <ul className="text-sm text-gray-700 space-y-2">
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
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyer une demande</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-welki-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-welki-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-welki-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Type d'intervention</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:border-welki-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all">
                                    <option>Dératisation / Désinsectisation</option>
                                    <option>Espaces Verts / Élagage</option>
                                    <option>Nettoyage / Débarras</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-welki-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                    placeholder="Détaillez votre besoin..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-welki-blue hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02] flex justify-center items-center">
                                Envoyer la demande <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </Layout>
    );
};

export default Contact;
