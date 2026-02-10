import React from 'react';
import { Users, Package, ShoppingCart, Megaphone, LayoutDashboard, Code, ArrowRight, Sparkles } from 'lucide-react';
import { FeatureItem } from '../types';
import { motion } from 'framer-motion';

interface BentoFeatureItem extends FeatureItem {
  className?: string;
  bgGradient?: string;
}

const features: BentoFeatureItem[] = [
  {
    title: 'Smart Customer Insights',
    description: 'Turn casual browsers into loyal customers. Our CRM automatically tracks preferences, purchase history, and interactions to build detailed customer profiles without lifting a finger.',
    icon: Users,
    className: "md:col-span-2",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: 'Effortless Inventory',
    description: 'Real-time stock sync across all warehouses and channels. Never oversell again.',
    icon: Package,
    className: "md:col-span-1",
    bgGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    title: 'Streamlined Fulfillment',
    description: 'Automate your entire order lifecycle from checkout to doorstep delivery to save time.',
    icon: ShoppingCart,
    className: "md:col-span-1",
    bgGradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    title: 'Targeted Marketing',
    description: 'Launch data-driven campaigns via SMS, Email, and WhatsApp directly from your dashboard. Reach the right people at the right time.',
    icon: Megaphone,
    className: "md:col-span-2",
    bgGradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    title: 'Business Command Center',
    description: 'One powerful admin dashboard to manage staff, view analytics, and control your empire.',
    icon: LayoutDashboard,
    className: "md:col-span-3 lg:col-span-1", 
    bgGradient: "from-violet-500/10 to-purple-500/10"
  },
  {
    title: 'Developer API',
    description: 'Built for scale. Connect your existing ERP, custom storefronts, or third-party tools seamlessly.',
    icon: Code,
    className: "md:col-span-3 lg:col-span-2",
    bgGradient: "from-slate-500/10 to-gray-500/10"
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
        {/* Background Pattern: Dot Grid */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-boost-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-boost-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-boost-teal/10 shadow-sm text-boost-teal text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} className="text-boost-accent" />
            Core Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Everything you need to <br/>
            <span className="relative inline-block">
               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-boost-teal to-boost-accentHover">scale smarter</span>
               <span className="absolute bottom-2 left-0 w-full h-3 bg-boost-accent/20 -z-0 rounded-sm transform -rotate-1"></span>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Replace your fragmented toolset with one cohesive operating system.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${feature.className}`}
            >
              {/* Card Background Gradient */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${feature.bgGradient} rounded-bl-[100px] -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110`}></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 group-hover:bg-boost-light transition-colors duration-300`}>
                  <feature.icon className="text-boost-teal group-hover:text-boost-teal transition-colors duration-300" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-boost-teal transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-6 border-t border-slate-50 flex items-center text-sm font-semibold text-boost-teal opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};