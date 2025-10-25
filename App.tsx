
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyItMatters from './components/WhyItMatters';
import TokenRewards from './components/TokenRewards';
import Partners from './components/Partners';
import ImageGenerator from './components/ImageGenerator';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyItMatters />
        <TokenRewards />
        <Partners />
        <ImageGenerator />
        <CTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
