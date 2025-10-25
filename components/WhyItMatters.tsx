
import React from 'react';

const ImpactCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-dark-secondary p-6 rounded-lg text-center border border-gray-700/50">
        <p className="text-4xl font-bold text-brand-green">{value}</p>
        <p className="text-gray-400 mt-1">{label}</p>
    </div>
);

const WhyItMatters: React.FC = () => {
    return (
        <section id="why-it-matters" className="py-20 bg-dark-secondary">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold text-white mb-4">Making Sustainability Profitable & Transparent</h2>
                        <p className="text-gray-300 mb-6">
                            GreenFi transforms recycling from a chore into a rewarding financial activity. By bringing the process onchain, we create unprecedented transparency, allowing anyone to track environmental impact and verify contributions in real-time.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <ImpactCard value="10M+" label="Tons of CO2 Offset" />
                            <ImpactCard value="100%" label="Transparent Ledger" />
                            <ImpactCard value="$1M+" label="Rewards Distributed" />
                            <ImpactCard value="500+" label="Communities Engaged" />
                        </div>
                    </div>
                    <div className="relative h-96">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-2xl animate-pulse"></div>
                        <img src="https://picsum.photos/seed/greenfi-impact/800/600" alt="Environmental Impact" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
