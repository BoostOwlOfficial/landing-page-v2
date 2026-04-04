import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, User, Building2, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const inquiryTypes = ['General Inquiry', 'Enterprise Pricing', 'Custom Integration', 'Partnership', 'Other'];

export const ContactSales: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', company: '', email: '', phone: '', inquiryType: '', message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-boost-teal to-boost-accentHover">Sales</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Have questions or need a custom plan? Our team is ready to help you find the right fit for your business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-boost-dark text-white rounded-2xl p-8 space-y-6">
                            <h3 className="text-xl font-bold">Contact Info</h3>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-boost-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-boost-accent" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email us</p>
                                    <a href="mailto:sales@boostowl.io" className="text-white font-medium hover:text-boost-accent transition-colors">sales@boostowl.io</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-boost-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-boost-accent" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Call / WhatsApp</p>
                                    <a href="tel:+919999999999" className="text-white font-medium hover:text-boost-accent transition-colors">+91 99999 99999</a>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Typical response time: <span className="text-boost-accent font-semibold">within 2 hours</span> on business days (Mon–Sat, 9 AM – 6 PM IST).
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-3">Why BoostOwl?</h4>
                            {['Dedicated onboarding support', 'Custom pricing for large teams', 'WhatsApp-first, India-ready platform', 'No long-term lock-in contracts'].map(item => (
                                <div key={item} className="flex items-center gap-2 text-sm text-slate-600 py-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-boost-teal flex-shrink-0" />{item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-3"
                    >
                        {submitted ? (
                            <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                                <CheckCircle2 className="w-16 h-16 text-boost-teal mx-auto mb-6" />
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h2>
                                <p className="text-slate-500">
                                    Thanks, <strong>{form.name}</strong>! Our sales team will get back to you at <strong>{form.email}</strong> within 2 hours.
                                </p>
                                <Link to="/" className="mt-8 text-boost-teal font-semibold hover:underline">← Back to Home</Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                            <User className="w-4 h-4 inline mr-1 text-boost-teal" />Full Name
                                        </label>
                                        <input
                                            type="text" name="name" required value={form.name} onChange={handleChange}
                                            placeholder="Priya Mehta"
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-boost-teal focus:ring-1 focus:ring-boost-teal/30 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                            <Building2 className="w-4 h-4 inline mr-1 text-boost-teal" />Company
                                        </label>
                                        <input
                                            type="text" name="company" required value={form.company} onChange={handleChange}
                                            placeholder="Acme Retail Ltd."
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-boost-teal focus:ring-1 focus:ring-boost-teal/30 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                            <Mail className="w-4 h-4 inline mr-1 text-boost-teal" />Work Email
                                        </label>
                                        <input
                                            type="email" name="email" required value={form.email} onChange={handleChange}
                                            placeholder="you@company.com"
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-boost-teal focus:ring-1 focus:ring-boost-teal/30 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                            <Phone className="w-4 h-4 inline mr-1 text-boost-teal" />Phone / WhatsApp
                                        </label>
                                        <input
                                            type="tel" name="phone" value={form.phone} onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-boost-teal focus:ring-1 focus:ring-boost-teal/30 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Inquiry Type</label>
                                    <select
                                        name="inquiryType" required value={form.inquiryType} onChange={handleChange}
                                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-boost-teal focus:ring-1 focus:ring-boost-teal/30 transition-all appearance-none bg-white"
                                    >
                                        <option value="" disabled>Select inquiry type...</option>
                                        {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                        <MessageSquare className="w-4 h-4 inline mr-1 text-boost-teal" />Message
                                    </label>
                                    <textarea
                                        name="message" required value={form.message} onChange={handleChange}
                                        rows={4} placeholder="Tell us about your business needs..."
                                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-boost-teal focus:ring-1 focus:ring-boost-teal/30 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-boost-teal text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-boost-dark transition-all shadow-lg shadow-boost-teal/20 group"
                                >
                                    Send Message
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
