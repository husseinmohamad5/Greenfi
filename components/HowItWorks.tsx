
import React from 'react';
import { RecycleIcon, VerifyIcon, RewardIcon } from './IconComponents';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string; step: number }> = ({ icon, title, description, step }) => (
    <div className="bg-dark-secondary p-8 rounded-2xl border border-gray-700/50 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center mb-4">
            <div className="bg-brand-green/20 text-brand-green p-3 rounded-full mr-4">
                {icon}
            </div>
            <span className="text-4xl font-extrabold text-gray-600">0{step}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-dark-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">How GreenFi Works</h2>
                    <p className="text-lg text-gray-400 mt-2">A simple process to turn trash into treasure.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <StepCard
                        step={1}
                        icon={<RecycleIcon className="w-8 h-8" />}
                        title="Collect & Recycle"
                        description="Users recycle materials like aluminum cans at designated RecyHubs in their community."
                    />
                    <StepCard
                        step={2}
                        icon={<VerifyIcon className="w-8 h-8" />}
                        title="Verify Onchain"
                        description="Each recycling action is verified via IoT sensors or QR/NFT scans and immutably recorded on the Base blockchain."
                    />
                    <StepCard
                        step={3}
                        icon={<RewardIcon className="w-8 h-8" />}
                        title="Earn Rewards"
                        description="Recyclers instantly receive GreenFi tokens and Proof of Impact NFTs as a reward for their contribution."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
