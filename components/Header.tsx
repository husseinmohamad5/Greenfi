
import React from 'react';
import { LeafIcon } from './IconComponents';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <LeafIcon className="w-8 h-8 text-brand-green" />
                    <span className="text-2xl font-bold text-white">GreenFi</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    <a href="#how-it-works" className="text-gray-300 hover:text-brand-green transition-colors">How It Works</a>
                    <a href="#why-it-matters" className="text-gray-300 hover:text-brand-green transition-colors">Impact</a>
                    <a href="#image-generator" className="text-gray-300 hover:text-brand-green transition-colors">AI Art</a>
                    <a href="#partners" className="text-gray-300 hover:text-brand-green transition-colors">Partners</a>
                </nav>
                <a href="#join" className="hidden md:block bg-brand-green text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
                    Join Waitlist
                </a>
            </div>
        </header>
    );
};

export default Header;
