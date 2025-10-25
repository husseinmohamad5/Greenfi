
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToBot } from '../services/geminiService';
import { ChatIcon, CloseIcon, SendIcon } from './IconComponents';

interface Message {
    author: 'user' | 'bot';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { author: 'bot', text: "Hello! I'm the GreenFi assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { author: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const botResponseText = await sendMessageToBot(input);
            const botMessage: Message = { author: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = { author: 'bot', text: "Sorry, I couldn't connect. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-brand-green to-brand-blue text-white rounded-full p-4 shadow-lg z-50 transform hover:scale-110 transition-transform"
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatIcon className="w-8 h-8" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-md h-[70vh] max-h-[600px] bg-dark-secondary rounded-2xl shadow-2xl flex flex-col border border-gray-700/50 z-50">
                    <header className="p-4 border-b border-gray-700 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">GreenFi Assistant</h3>
                    </header>
                    <main className="flex-1 p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.author === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-xs md:max-w-md lg:max-w-sm rounded-2xl px-4 py-2 ${
                                        msg.author === 'user' 
                                            ? 'bg-brand-blue text-white rounded-br-none' 
                                            : 'bg-gray-700 text-gray-200 rounded-bl-none'
                                    }`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-700 text-gray-200 rounded-2xl px-4 py-2 rounded-bl-none">
                                        <div className="flex items-center space-x-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </main>
                    <footer className="p-4 border-t border-gray-700">
                        <form onSubmit={handleSend} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-grow bg-gray-800 border border-gray-600 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
                                disabled={isLoading}
                            />
                            <button type="submit" className="bg-brand-green rounded-full p-2 text-white disabled:opacity-50" disabled={isLoading}>
                                <SendIcon className="w-6 h-6" />
                            </button>
                        </form>
                    </footer>
                </div>
            )}
        </>
    );
};

export default Chatbot;
