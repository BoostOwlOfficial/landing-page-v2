import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, User, Mail, Phone, Briefcase, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const businessSizes = ['1–10 employees', '11–50 employees', '51–200 employees', '200+ employees'];
const useCases = ['Inventory Management', 'CRM & Customer Support', 'WhatsApp Chatbot', 'Order Management', 'Marketing & Campaigns', 'All of the above'];

export const GetStarted: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', businessName: '', email: '', phone: '', businessSize: '', useCase: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-boost-dark text-white pt-28 pb-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-boost-teal/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-boost-accent/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

            <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-boost-light">
                        <Zap className="w-4 h-4 text-boost-accent" />
                        Free 14-day trial · No credit card required
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started with <span className="text-transparent bg-clip-text bg-gradient-to-r from-boost-accent to-emerald-300">BoostOwl</span></h1>
                    <p className="text-gray-400 text-lg">Tell us a bit about your business and we'll set you up right away.</p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center"
                    >
                        <CheckCircle2 className="w-16 h-16 text-boost-accent mx-auto mb-6" />
                        <h2 className="text-2xl font-bold mb-3">You're on the list!</h2>
                        <p className="text-gray-400 mb-2">We've received your request. Our team will reach out to <span className="text-white font-medium">{form.email}</span> within 24 hours to get your account set up.</p>
                        <p className="text-gray-500 text-sm mt-6">Questions? Email us at <a href="mailto:hello@boostowl.io" className="text-boost-accent hover:underline">hello@boostowl.io</a></p>
                        <Link to="/" className="inline-flex items-center gap-2 mt-8 text-boost-accent font-semibold hover:underline">
                            ← Back to Home
                        </Link>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 space-y-6"
                    >
                        {/* Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <User className="w-4 h-4 inline mr-1.5 text-boost-accent" />Your Name
                                </label>
                                <input
                                    type="text" name="name" required value={form.name} onChange={handleChange}
                                    placeholder="Rahul Sharma"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <Building2 className="w-4 h-4 inline mr-1.5 text-boost-accent" />Business Name
                                </label>
                                <input
                                    type="text" name="businessName" required value={form.businessName} onChange={handleChange}
                                    placeholder="My Store Pvt. Ltd."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                />
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <Mail className="w-4 h-4 inline mr-1.5 text-boost-accent" />Work Email
                                </label>
                                <input
                                    type="email" name="email" required value={form.email} onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <Phone className="w-4 h-4 inline mr-1.5 text-boost-accent" />WhatsApp / Phone
                                </label>
                                <input
                                    type="tel" name="phone" required value={form.phone} onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all"
                                />
                            </div>
                        </div>

                        {/* Business Size */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                <Briefcase className="w-4 h-4 inline mr-1.5 text-boost-accent" />Business Size
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {businessSizes.map((size) => (
                                    <label
                                        key={size}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${form.businessSize === size
                                                ? 'border-boost-accent bg-boost-accent/10 text-white'
                                                : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                                            }`}
                                    >
                                        <input
                                            type="radio" name="businessSize" value={size}
                                            checked={form.businessSize === size}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${form.businessSize === size ? 'bg-boost-accent border-boost-accent' : 'border-gray-500'}`} />
                                        <span className="text-sm">{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Use Case */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                What are you looking for?
                            </label>
                            <select
                                name="useCase" required value={form.useCase} onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-boost-accent/50 focus:ring-1 focus:ring-boost-accent/30 transition-all appearance-none"
                            >
                                <option value="" disabled className="bg-slate-900">Select a primary use case...</option>
                                {useCases.map(uc => (
                                    <option key={uc} value={uc} className="bg-slate-900">{uc}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-boost-accent text-boost-dark font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-boost-accentHover transition-all shadow-[0_0_25px_rgba(0,223,162,0.3)] hover:shadow-[0_0_35px_rgba(0,223,162,0.5)] group"
                        >
                            Start My Free Trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-center text-gray-500 text-xs">
                            By signing up you agree to our <Link to="/terms-of-usage" className="text-boost-accent hover:underline">Terms of Usage</Link> and <Link to="/privacy-policy" className="text-boost-accent hover:underline">Privacy Policy</Link>.
                        </p>
                    </motion.form>
                )}
            </div>
        </div>
    );
};
