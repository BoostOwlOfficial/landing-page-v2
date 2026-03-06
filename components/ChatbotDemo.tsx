import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, ArrowRight, Smartphone, Phone, Mail, User } from 'lucide-react';
import { motion } from 'framer-motion';

const businessTypes = ['Retail Store', 'Restaurant / Food', 'Fashion & Apparel', 'Electronics', 'Healthcare', 'Services', 'Other'];

const chatMessages = [
    { from: 'user', text: 'Hi! Do you have the blue denim jacket in XL?', time: '10:41 AM' },
    { from: 'bot', text: 'Hello! 👋 Yes, we have 4 units of the Blue Denim Jacket (XL) in stock at ₹2,199. Would you like to reserve one?', time: '10:41 AM' },
    { from: 'user', text: 'Yes please! Can I pay on delivery?', time: '10:42 AM' },
    { from: 'bot', text: 'Absolutely! I\'ve reserved it for you. 🎉 Your order #ORD-8821 is confirmed with Cash on Delivery. Expected delivery: 2–3 days.', time: '10:42 AM' },
];

export const ChatbotDemo: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', whatsapp: '', businessType: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-boost-dark text-white pt-28 pb-20 relative overflow-hidden">
            {/* Bg glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-boost-teal/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-boost-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Chatbot Demo
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        See the Bot in <span className="text-transparent bg-clip-text bg-gradient-to-r from-boost-accent to-emerald-300">Action</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Watch how BoostOwl's AI handles customer queries, tracks orders, and closes sales — all on WhatsApp.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Mock Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden shadow-boost-teal/10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20" />

                            <div className="w-full h-full bg-[#E5DDD5] flex flex-col">
                                {/* WA Header */}
                                <div className="bg-[#075E54] h-20 px-4 pt-8 flex items-center gap-3 text-white shadow-md">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <Smartphone size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">BoostOwl Business</p>
                                        <p className="text-xs text-white/70">Online · typically replies instantly</p>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                                    {chatMessages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + i * 0.4 }}
                                            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`p-3 rounded-lg shadow-sm max-w-[85%] ${msg.from === 'user' ? 'bg-[#DCF8C6] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                                <p className="text-sm text-gray-800">{msg.text}</p>
                                                <span className="text-[10px] text-gray-500 block text-right mt-1">{msg.time}</span>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Typing */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2.2 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                                            <div className="flex gap-1">
                                                {[0, 1, 2].map(i => (
                                                    <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Input bar */}
                                <div className="p-2 pb-4 bg-[#F0F0F0] flex gap-2 items-center">
                                    <div className="flex-1 bg-white h-10 rounded-full shadow-sm" />
                                    <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center shadow-sm">
                                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Features + Lead Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="space-y-6"
                    >
                        {/* Feature bullets */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <h3 className="font-bold text-lg mb-4">What this bot can do</h3>
                            {[
                                'Answer product & stock queries in real-time',
                                'Take orders and confirm via WhatsApp',
                                'Send order tracking updates automatically',
                                'Collect payments via UPI / Razorpay links',
                                'Hand off to human agents when needed',
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-boost-accent flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Lead Capture Form */}
                        {submitted ? (
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                                <CheckCircle2 className="w-12 h-12 text-boost-accent mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">We'll be in touch!</h3>
                                <p className="text-gray-400 text-sm">Our team will set up a personalised chatbot demo on <strong>{form.whatsapp}</strong> within 24 hours.</p>
                                <p className="text-gray-500 text-xs mt-4">Or email us directly: <a href="mailto:demo@boostowl.io" className="text-boost-accent hover:underline">demo@boostowl.io</a></p>
                                <Link to="/" className="inline-block mt-6 text-boost-accent font-semibold hover:underline text-sm">← Back to Home</Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                <h3 className="font-bold text-lg">Get a live demo on your WhatsApp</h3>
                                <p className="text-gray-400 text-sm">Fill in your details and we'll connect the demo bot directly to your number.</p>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                        <User className="w-4 h-4 inline mr-1 text-boost-accent" />Your Name
                                    </label>
                                    <input
                                        type="text" name="name" required value={form.name} onChange={handleChange}
                                        placeholder="Arjun Singh"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                            <Mail className="w-4 h-4 inline mr-1 text-boost-accent" />Email
                                        </label>
                                        <input
                                            type="email" name="email" required value={form.email} onChange={handleChange}
                                            placeholder="you@shop.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                            <Phone className="w-4 h-4 inline mr-1 text-boost-accent" />WhatsApp No.
                                        </label>
                                        <input
                                            type="tel" name="whatsapp" required value={form.whatsapp} onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Business Type</label>
                                    <select
                                        name="businessType" required value={form.businessType} onChange={handleChange}
                                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                    >
                                        <option value="" disabled>Select your business type...</option>
                                        {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-boost-accent text-boost-dark font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-boost-accentHover transition-all shadow-[0_0_20px_rgba(0,223,162,0.3)] group"
                                >
                                    Request My Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
