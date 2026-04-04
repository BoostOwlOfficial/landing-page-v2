import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const openRoles = [
    {
        title: 'Full Stack Engineer',
        department: 'Engineering',
        location: 'Bangalore, India (Hybrid)',
        type: 'Full-time',
        description: 'Help us build and scale the BoostOwl platform with a focus on TypeScript, Node.js, and React.',
    },
    {
        title: 'Product Designer',
        department: 'Design',
        location: 'Bangalore, India (Hybrid)',
        type: 'Full-time',
        description: 'Own the end-to-end design of our mobile and web products. You\'ll shape how thousands of businesses experience BoostOwl.',
    },
    {
        title: 'Customer Success Manager',
        department: 'Customer Success',
        location: 'Remote (India)',
        type: 'Full-time',
        description: 'Be the champion for our customers. Help them get maximum value from BoostOwl and drive retention.',
    },
    {
        title: 'Sales Development Representative',
        department: 'Sales',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Drive outbound pipeline for our fast-growing sales team. Ideal for someone passionate about SaaS and the SME market.',
    },
];

const perks = [
    'Competitive salary + equity',
    'Flexible work hours',
    'Health insurance',
    'Learning & development budget',
    'Work with a top-tier founding team',
    'Be part of India\'s AI-first business OS',
];

export const Careers: React.FC = () => {
    const [appliedFor, setAppliedFor] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boost-teal/10 text-boost-teal text-sm font-medium mb-6">
                        <Briefcase className="w-4 h-4" />
                        We're Hiring!
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-boost-teal to-boost-accentHover">Indian Commerce</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Join a passionate team on a mission to give every Indian business a world-class operating system.
                    </p>
                </motion.div>

                {/* Perks */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-boost-dark text-white rounded-2xl p-8 mb-12"
                >
                    <h2 className="text-xl font-bold mb-6">Why work at BoostOwl?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {perks.map(perk => (
                            <div key={perk} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-boost-accent flex-shrink-0" />
                                {perk}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Open Roles */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h2>
                <div className="space-y-4">
                    {openRoles.map((role, i) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08 }}
                            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-boost-teal/30 transition-all"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                                        <span className="text-xs bg-boost-teal/10 text-boost-teal px-2 py-0.5 rounded-full font-medium">{role.department}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-3">{role.description}</p>
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{role.location}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{role.type}</span>
                                    </div>
                                </div>
                                {appliedFor === role.title ? (
                                    <div className="flex items-center gap-2 text-boost-teal font-semibold text-sm">
                                        <CheckCircle2 className="w-5 h-5" /> Applied!
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setAppliedFor(role.title)}
                                        className="flex-shrink-0 flex items-center gap-2 bg-boost-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-boost-teal transition-all group"
                                    >
                                        Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                )}
                            </div>
                            {appliedFor === role.title && (
                                <p className="text-slate-400 text-xs mt-3 border-t border-slate-100 pt-3">
                                    Thanks for your interest! Send your resume to <a href="mailto:careers@boostowl.io" className="text-boost-teal hover:underline">careers@boostowl.io</a> with subject "{role.title} — Application".
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* General Application */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm"
                >
                    <Mail className="w-10 h-10 text-boost-teal mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Don't see a fit?</h3>
                    <p className="text-slate-500 mb-4">We're always looking for exceptional people. Send a general application.</p>
                    <a href="mailto:careers@boostowl.io"
                        className="inline-flex items-center gap-2 bg-boost-teal text-white font-bold px-6 py-3 rounded-xl hover:bg-boost-dark transition-all">
                        Send General Application <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </div>
    );
};
