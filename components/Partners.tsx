
import React from 'react';

const PartnerLogo: React.FC<{ name: string; logoUrl: string }> = ({ name, logoUrl }) => (
    <div className="flex justify-center items-center p-4 bg-dark-secondary rounded-lg border border-gray-700/50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
        <img src={logoUrl} alt={name} className="h-12"/>
    </div>
);

const Partners: React.FC = () => {
    return (
        <section id="partners" className="py-20 bg-dark-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Partners & Supporters</h2>
                    <p className="text-lg text-gray-400 mt-2">Building a sustainable future, together.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <PartnerLogo name="Base" logoUrl="https://via.placeholder.com/150x60/FFFFFF/000000?text=Base" />
                    <PartnerLogo name="Eco Fund" logoUrl="https://via.placeholder.com/150x60/FFFFFF/000000?text=Eco+Fund" />
                    <PartnerLogo name="Green Gov" logoUrl="https://via.placeholder.com/150x60/FFFFFF/000000?text=Green+Gov" />
                    <PartnerLogo name="Sustain Org" logoUrl="https://via.placeholder.com/150x60/FFFFFF/000000?text=Sustain+Org" />
                    <PartnerLogo name="Local Biz" logoUrl="https://via.placeholder.com/150x60/FFFFFF/000000?text=Local+Biz" />
                </div>
            </div>
        </section>
    );
};

export default Partners;
