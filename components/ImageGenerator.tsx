
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { SparklesIcon } from './IconComponents';

const ImageGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('A futuristic city powered by glowing green energy, with recycling drones flying through the sky.');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!prompt) {
            setError('Please enter a prompt.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);
        try {
            const imageUrl = await generateImage(prompt);
            setGeneratedImage(imageUrl);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="image-generator" className="py-20 bg-dark-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Create Eco-Futuristic Art</h2>
                    <p className="text-lg text-gray-400 mt-2">Use AI to visualize a greener future. What does sustainability look like to you?</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., A forest of solar panel trees"
                            className="flex-grow bg-dark-secondary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading}
                            className="bg-gradient-to-r from-brand-green to-brand-blue text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                        >
                            <SparklesIcon className="w-5 h-5 mr-2" />
                            {isLoading ? 'Generating...' : 'Generate Image'}
                        </button>
                    </div>
                    
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    
                    <div className="bg-dark-secondary rounded-lg aspect-square flex items-center justify-center border-2 border-dashed border-gray-700 p-4">
                        {isLoading && (
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-green mx-auto"></div>
                                <p className="mt-4 text-gray-300">Conjuring your vision... this may take a moment.</p>
                            </div>
                        )}
                        {generatedImage && !isLoading && (
                            <img src={generatedImage} alt="Generated art" className="w-full h-full object-contain rounded-md" />
                        )}
                        {!isLoading && !generatedImage && (
                            <div className="text-center text-gray-500">
                                <p>Your generated image will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageGenerator;
