import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChatbotHighlight: React.FC = () => {
  return (
    <section id="customer-experience" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <MessageCircle size={14} />
              <span>Customer Facing AI</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet your new <br />
              <span className="text-boost-teal">24/7 Support Agent</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Don't make your customers download another app. BoostOwl's Smart Chatbot lives where they already are.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Seamless WhatsApp Integration (popular in India)',
                'Automated Order Tracking & Status Updates',
                'Instant Inventory Checks for Customers',
                'Natural Language Product Search'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-boost-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/chatbot-demo" className="inline-block bg-boost-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-boost-dark transition-colors shadow-lg shadow-boost-teal/20">
              Try the Chatbot Demo
            </Link>
          </div>

          {/* Right Side: Mock Phone UI */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-boost-accent/5 rounded-full blur-3xl"></div>

            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>

              {/* Screen Content - Mock WhatsApp Interface */}
              <div className="w-full h-full bg-[#E5DDD5] flex flex-col">
                {/* Header */}
                <div className="bg-[#075E54] h-20 px-4 pt-8 flex items-center gap-3 text-white shadow-md z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">BoostOwl Business</p>
                    <p className="text-xs text-white/80">Online</p>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {/* Message From User */}
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
                      <p className="text-sm text-gray-800">Do you have the Nike runners in size 10?</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:42 AM</span>
                    </div>
                  </div>

                  {/* Message From Bot */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                      <p className="text-sm text-gray-800">Yes! We have 3 pairs left in stock at our Downtown store. 🏃‍♂️</p>
                      <p className="text-sm text-gray-800 mt-2 font-semibold">Price: ₹4,500</p>
                      <p className="text-sm text-blue-600 mt-2 underline cursor-pointer">Click here to reserve</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:42 AM</span>
                    </div>
                  </motion.div>

                  {/* Message From User */}
                  <div className="flex justify-end mt-4">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
                      <p className="text-sm text-gray-800">Awesome, reserve one for me.</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:43 AM</span>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-2 pb-4 bg-[#F0F0F0] flex gap-2 items-center">
                  <div className="flex-1 bg-white h-10 rounded-full shadow-sm"></div>
                  <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};