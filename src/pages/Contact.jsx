import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Layout title="Contact" description="Demandez votre devis gratuit chez Welki.">
            <Section className="bg-gray-950 text-white pt-24 pb-0">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-black mb-2">Contactez-nous</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Une urgence ? Un projet ? Notre équipe est là pour vous.
                    </p>
                </div>
            </Section>

            <Section className="bg-gray-950 py-0 pb-12">
                {/* Form Card - Full Width */}
                <div
                    className="w-full mb-12"
                >
                    <iframe
                        data-tally-src="https://tally.so/r/5B48RQ?transparentBackground=1&dynamicHeight=1"
                        src="https://tally.so/r/5B48RQ?transparentBackground=1&dynamicHeight=1"
                        width="100%"
                        height="1000"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Formulaire De Contact"
                        className="bg-transparent"
                    ></iframe>
                </div>

                {/* Coordonnées Card - Horizontal */}
                <div
                    className="bg-gray-950 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-800 w-full"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">
                        <h3 className="text-3xl font-bold text-white">Nos Coordonnées</h3>
                        <div className="hidden md:block h-px flex-grow bg-gray-800 ml-8"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start p-4 rounded-xl hover:bg-gray-900/50 transition-colors">
                            <div className="w-12 h-12 bg-gray-800 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Téléphone</p>
                                <a href="tel:0608070696" className="text-2xl font-bold text-white hover:text-welki-green transition-colors block">
                                    06.08.07.06.96
                                </a>
                                <p className="text-sm text-welki-green font-medium mt-1 flex items-center">
                                    <CheckCircle size={12} className="mr-1" /> 7j/7 pour urgences
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 rounded-xl hover:bg-gray-900/50 transition-colors">
                            <div className="w-12 h-12 bg-gray-800 text-welki-blue rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                <a href="mailto:WELKI@GMAIL.COM" className="text-lg font-bold text-white hover:text-welki-green transition-colors break-all block">
                                    WELKI@GMAIL.COM
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start p-4 rounded-xl hover:bg-gray-900/50 transition-colors">
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

                    <div className="mt-8 p-6 bg-blue-900/10 rounded-2xl border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-bold text-blue-300 md:mb-0">Pourquoi nous choisir ?</p>
                        <ul className="text-sm text-gray-400 flex flex-col md:flex-row gap-4 md:gap-8">
                            <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-welki-green" /> Devis gratuit et détaillé</li>
                            <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-welki-green" /> Intervenants qualifiés</li>
                            <li className="flex items-center"><CheckCircle size={14} className="mr-2 text-welki-green" /> Respect des normes</li>
                        </ul>
                    </div>
                </div>

            </Section>
        </Layout >
    );
};

export default Contact;
