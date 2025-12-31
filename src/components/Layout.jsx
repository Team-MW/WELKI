import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import logoImg from '../assets/logo blanc.png';

const Layout = ({ children, title, description }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>{title ? `${title} | Welki2` : 'Welki2 - Modern Web Development'}</title>
                <meta name="description" content={description || "Votre partenaire pour le développement web moderne."} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <Header />

            <main className="flex-grow pt-16">
                {children}
            </main>

            <footer id="site-footer" className="bg-gray-950 text-white py-12 border-t-4 border-welki-green">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <img src={logoImg} alt="WELKI Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre expert certifié Certibiocide pour l'anti nuisible (dératisation, désinsectisation, désinfection),
                            l'entretien des espaces verts et le nettoyage professionnel.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-welki-green uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>📞 06.08.07.06.96</li>
                            <li>✉️ WELKI@GMAIL.COM</li>
                            <li>📍 Intervention Rapide</li>
                        </ul>
                        <Link to="/contact" className="mt-6 inline-block bg-white text-gray-950 px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors uppercase text-xs tracking-wider">
                            Nous Contacter
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-welki-green uppercase tracking-wider">Nos Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• Dératisation & Désinsectisation</li>
                            <li>• Élagage & Espaces Verts</li>
                            <li>• Nettoyage & Entretien</li>
                        </ul>
                    </div>

                </div>
                <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p>&copy; {new Date().getFullYear()} Welki. Tous droits réservés.</p>
                        <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                    </div>
                    <div className="mt-4 md:mt-0 font-medium">
                        Développé par <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="text-welki-green font-bold hover:underline transition-all">Microdidact</a>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Layout;
