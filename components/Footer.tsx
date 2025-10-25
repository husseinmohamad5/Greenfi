
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-primary border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} GreenFi. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Discord</a>
                    <a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Telegram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
