import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import FloatingCTA from './FloatingCTA';
import logoImg from '../assets/logo blanc.png';
import favicon from '../assets/logo.png';

const Layout = ({ children, title, description }) => {
    const baseTitle = 'WELKI - Anti-nuisibles, nettoyage, espaces verts & multi-services';
    const fullTitle = title ? `${title} | ${baseTitle}` : 'WELKI - Anti-nuisibles, nettoyage, espaces verts & multi-services dans le Sud-Ouest';

    const defaultDescription =
        "WELKI est une entreprise certifiée Certibiocide spécialisée dans la lutte anti-nuisibles, le nettoyage professionnel, l'entretien des espaces verts et les multi-services pour particuliers et professionnels dans le Sud-Ouest.";

    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>{fullTitle}</title>
                <meta name="description" content={description || defaultDescription} />
                <link rel="icon" type="image/png" href={favicon} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <Header />

            <main className="flex-grow pt-16">
                {children}
            </main>

            <footer id="site-footer" className="bg-gray-950 text-white py-12 border-t-4 border-welki-green">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={logoImg}
                            alt="WELKI Logo"
                            className="h-10 w-auto mb-6 brightness-0 invert opacity-90 transition-all hover:scale-105"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Experts certifiés au service des particuliers et des professionnels pour la lutte anti-nuisibles, 
                            l'entretien des espaces verts et le nettoyage professionnel.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-bold mb-6 text-welki-green uppercase tracking-[0.2em]">Contact</h4>
                        <div className="space-y-4 text-gray-300 text-base font-medium">
                            <div className="flex items-center justify-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-welki-green/10 flex items-center justify-center text-welki-green">📞</span>
                                <a href="tel:+33782729347" className="hover:text-welki-green transition-colors">+33 7 82 72 93 47</a>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-welki-green/10 flex items-center justify-center text-welki-green">✉️</span>
                                <a href="mailto:welkifrance@gmail.com" className="hover:text-welki-green transition-colors">welkifrance@gmail.com</a>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-welki-green/10 flex items-center justify-center text-welki-green">📍</span>
                                <span>26 chemin Azais, 31100 Toulouse</span>
                            </div>
                        </div>
                        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-welki-green text-white px-8 py-3 rounded-xl font-bold hover:bg-welki-green/80 transition-all uppercase text-xs tracking-widest shadow-lg shadow-welki-green/20">
                            Nous Contacter
                        </Link>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-lg font-bold mb-6 text-welki-green uppercase tracking-[0.2em]">Nos Services</h4>
                        <ul className="space-y-3 text-gray-300 text-sm font-medium text-center md:text-right">
                            <li>Dératisation & Désinsectisation</li>
                            <li>Élagage & Espaces Verts</li>
                            <li>Nettoyage Professionnel</li>
                            <li>Audit Gratuit & Conseils</li>
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
            </footer>
            <FloatingCTA />
        </div>
    );
};

export default Layout;
