import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
    {
        category: 'Product Update',
        title: 'Introducing Smart Chatbot v2: Now with Order Management',
        excerpt: 'Our WhatsApp chatbot just got a major upgrade. Customers can now place orders, make payments, and track deliveries — all without leaving WhatsApp.',
        date: 'Feb 28, 2026',
        readTime: '4 min read',
        color: 'bg-green-100 text-green-700',
    },
    {
        category: 'Business Tips',
        title: '5 Ways to Reduce Stockouts and Keep Customers Happy',
        excerpt: 'Stockouts are one of the biggest revenue killers for retail businesses. Here\'s how smart inventory management can save the day.',
        date: 'Feb 20, 2026',
        readTime: '6 min read',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        category: 'Case Study',
        title: 'How FreshMart Reduced Order Processing Time by 70%',
        excerpt: 'Learn how a Bangalore-based grocery chain used BoostOwl to streamline their operations and scale to 5 new locations in just 6 months.',
        date: 'Feb 10, 2026',
        readTime: '8 min read',
        color: 'bg-purple-100 text-purple-700',
    },
    {
        category: 'Industry Insights',
        title: 'The Rise of WhatsApp Commerce in India: What It Means for Your Business',
        excerpt: 'With over 500 million WhatsApp users in India, businesses that embrace conversational commerce are seeing 3x better customer engagement.',
        date: 'Jan 30, 2026',
        readTime: '5 min read',
        color: 'bg-orange-100 text-orange-700',
    },
    {
        category: 'How-to Guide',
        title: 'Setting Up Your BoostOwl Dashboard in Under 30 Minutes',
        excerpt: 'A step-by-step walkthrough for onboarding your team, connecting your inventory, and launching your first WhatsApp automation.',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        color: 'bg-rose-100 text-rose-700',
    },
    {
        category: 'Product Update',
        title: 'New: Multi-Channel Inventory Sync with Shopify & Meesho',
        excerpt: 'BoostOwl now syncs your stock in real-time across Shopify, Meesho, and your WhatsApp storefront. No more manual updates.',
        date: 'Jan 5, 2026',
        readTime: '3 min read',
        color: 'bg-teal-100 text-teal-700',
    },
];

export const Blog: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-boost-dark text-boost-accent text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        BoostOwl Blog
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Resources & <span className="text-transparent bg-clip-text bg-gradient-to-r from-boost-teal to-boost-accentHover">Insights</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Guides, case studies, and updates to help you scale your business with BoostOwl.
                    </p>
                </motion.div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-boost-dark text-white rounded-2xl p-8 mb-10 relative overflow-hidden group cursor-pointer"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-boost-teal/20 rounded-full blur-3xl pointer-events-none" />
                    <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 mb-4">Featured</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-boost-accent transition-colors">
                        Introducing Smart Chatbot v2: Now with Order Management
                    </h2>
                    <p className="text-gray-400 mb-6 max-w-2xl">
                        Our WhatsApp chatbot just got a major upgrade. Customers can now place orders, make payments, and track deliveries — all without leaving WhatsApp.
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4 min read</span>
                        <span>Feb 28, 2026</span>
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.slice(1).map((article, i) => (
                        <motion.div
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + i * 0.07 }}
                            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col hover:border-boost-teal/30 hover:shadow-md transition-all group cursor-pointer"
                        >
                            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 w-fit ${article.color}`}>
                                <Tag className="w-3 h-3 inline mr-1" />{article.category}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mb-2 flex-1 group-hover:text-boost-teal transition-colors leading-snug">
                                {article.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
                            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3 mt-auto">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                                <span>{article.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm"
                >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Subscribe to our newsletter</h3>
                    <p className="text-slate-500 mb-6 text-sm">Get the latest articles and product updates delivered to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-boost-teal transition-all text-sm"
                        />
                        <button className="flex-shrink-0 bg-boost-teal text-white font-bold px-6 py-3 rounded-xl hover:bg-boost-dark transition-all flex items-center gap-2 text-sm">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-slate-400 text-xs mt-3">No spam. Unsubscribe anytime. Questions? <a href="mailto:hello@boostowl.io" className="text-boost-teal hover:underline">hello@boostowl.io</a></p>
                </motion.div>

            </div>
        </div>
    );
};
