import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { ChatbotHighlight } from './ChatbotHighlight';
import { Integration } from './Integration';

export const LandingPage: React.FC = () => {
    return (
        <main className="flex-grow">
        <Hero />
        <Features />
        <ChatbotHighlight />
        <Integration />
        {/* Call to Action Section */}
        <section className="bg-boost-teal py-20 px-4">
           <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Boost Your Business?</h2>
              <p className="text-lg text-boost-light mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses using BoostOwl to automate their inventory, orders, and customer support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-boost-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                  Get Started Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
           </div>
        </section>
      </main>
    );
};
