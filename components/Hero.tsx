
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 bg-dark-primary z-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-blue/30 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
            </div>
            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-blue">
                        Decentralized Finance
                    </span>
                    <br />
                    for a Cleaner Planet.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    GreenFi rewards recycling with crypto incentives, creating a transparent, circular economy on the blockchain.
                </p>
                <a href="#join" className="bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 inline-block shadow-lg animate-glow">
                    Join GreenFi
                </a>
            </div>
        </section>
    );
};

export default Hero;
