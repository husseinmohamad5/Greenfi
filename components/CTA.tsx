
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="join" className="py-20 bg-dark-secondary">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-4">Join the Green Revolution</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Be the first to know when GreenFi launches. Join our waitlist or partner with us to bring sustainable finance to your community.
                </p>
                <div className="max-w-lg mx-auto bg-dark-primary p-8 rounded-2xl shadow-2xl border border-gray-700/50">
                    <form className="flex flex-col gap-4">
                        <input type="email" placeholder="Enter your email" className="bg-dark-secondary border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green" />
                        <button type="submit" className="bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                            Join Waitlist
                        </button>
                    </form>
                    <p className="text-gray-500 mt-6">or</p>
                    <a href="#" className="mt-4 inline-block text-brand-blue hover:underline">Apply to be a Collection Partner</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
