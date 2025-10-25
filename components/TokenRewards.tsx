
import React from 'react';

const TokenRewards: React.FC = () => {
    return (
        <section id="rewards" className="py-20 bg-dark-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Your Onchain Rewards</h2>
                    <p className="text-lg text-gray-400 mt-2">More than just tokens—a record of your positive impact.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-dark-secondary p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-brand-green mb-3">GreenFi Tokens ($GFI)</h3>
                        <p className="text-gray-300">
                            $GFI is the native utility token of the GreenFi ecosystem. Earn it by recycling, and use it for governance, staking, or trading on decentralized exchanges. It's the fuel for our circular economy.
                        </p>
                    </div>
                    <div className="bg-dark-secondary p-8 rounded-2xl border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-brand-blue mb-3">Proof of Impact NFTs</h3>
                        <p className="text-gray-300">
                            Each time you make a significant contribution, you mint a unique, non-fungible token. These NFTs are a visual representation of your environmental legacy, a digital collectible that proves your commitment to a healthier planet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenRewards;
