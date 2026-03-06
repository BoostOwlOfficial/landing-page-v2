import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Zap, BookOpen, Terminal, CheckCircle, ArrowRight, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

const endpoints = [
    { method: 'GET', path: '/v1/inventory', description: 'List all products and stock levels', badge: 'stable' },
    { method: 'POST', path: '/v1/orders', description: 'Create a new order', badge: 'stable' },
    { method: 'GET', path: '/v1/orders/:id', description: 'Fetch order details by ID', badge: 'stable' },
    { method: 'PATCH', path: '/v1/orders/:id/status', description: 'Update order status', badge: 'stable' },
    { method: 'POST', path: '/v1/customers', description: 'Create or update a customer record', badge: 'stable' },
    { method: 'GET', path: '/v1/analytics/summary', description: 'Get sales and revenue overview', badge: 'beta' },
];

const methodColors: Record<string, string> = {
    GET: 'bg-blue-100 text-blue-700',
    POST: 'bg-green-100 text-green-700',
    PATCH: 'bg-orange-100 text-orange-700',
    DELETE: 'bg-red-100 text-red-700',
};

export const ApiDocs: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boost-dark text-boost-accent text-sm font-medium mb-6">
                        <Terminal className="w-4 h-4" />
                        Developer API
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">API Documentation</h1>
                    <p className="text-lg text-slate-500 max-w-2xl">
                        Integrate BoostOwl into your existing stack using our RESTful API. Designed for developers who want full flexibility.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                        <a href="mailto:developers@boostowl.io"
                            className="inline-flex items-center gap-2 bg-boost-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all">
                            <Code className="w-4 h-4" /> Request API Access
                        </a>
                        <Link to="/get-started"
                            className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-boost-teal hover:text-boost-teal transition-all">
                            <BookOpen className="w-4 h-4" /> Full Documentation
                        </Link>
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
                >
                    {[
                        { icon: Zap, title: 'Fast & Reliable', desc: '99.9% uptime SLA with sub-100ms response times from our edge servers.' },
                        { icon: Shield, title: 'Secure by Design', desc: 'OAuth 2.0 authentication, HTTPS-only, rate limiting, and audit logs.' },
                        { icon: Code, title: 'SDKs Coming Soon', desc: 'Official Node.js, Python, and PHP SDKs are in development.' },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-boost-teal/10 flex items-center justify-center mb-4">
                                <Icon className="w-5 h-5 text-boost-teal" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                            <p className="text-slate-500 text-sm">{desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Authentication */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="bg-white border border-slate-100 rounded-2xl p-6 mb-8 shadow-sm"
                >
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Authentication</h2>
                    <p className="text-slate-500 text-sm mb-4">Pass your API key in the <code className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-xs font-mono">Authorization</code> header:</p>
                    <div className="bg-[#0a0f1c] rounded-xl p-4 font-mono text-sm text-slate-400 relative">
                        <span className="text-purple-400">curl</span>{' '}
                        <span className="text-green-300">https://api.boostowl.io/v1/inventory</span>{' \\\n  '}
                        <span className="text-yellow-300">-H</span>{' "Authorization: Bearer YOUR_API_KEY"'}
                    </div>
                    <p className="text-slate-500 text-xs mt-3">
                        Contact <a href="mailto:developers@boostowl.io" className="text-boost-teal hover:underline">developers@boostowl.io</a> to request your API key.
                    </p>
                </motion.div>

                {/* Endpoints */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-xl font-bold text-slate-900 mb-5">API Endpoints</h2>
                    <div className="space-y-3">
                        {endpoints.map((ep) => (
                            <div key={ep.path} className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm hover:border-boost-teal/30 transition-all">
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg w-fit ${methodColors[ep.method]}`}>{ep.method}</span>
                                <code className="font-mono text-sm text-slate-700 flex-1">{ep.path}</code>
                                <span className="text-slate-500 text-sm flex-1">{ep.description}</span>
                                {ep.badge === 'beta' && (
                                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">beta</span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-14 bg-boost-dark text-white rounded-2xl p-8 text-center"
                >
                    <h2 className="text-2xl font-bold mb-3">Ready to integrate?</h2>
                    <p className="text-gray-400 mb-6">Request sandbox access and start building in minutes.</p>
                    <a href="mailto:developers@boostowl.io"
                        className="inline-flex items-center gap-2 bg-boost-accent text-boost-dark font-bold px-6 py-3 rounded-xl hover:bg-boost-accentHover transition-all">
                        Get API Access <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </div>
    );
};
