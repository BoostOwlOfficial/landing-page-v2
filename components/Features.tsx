import React from 'react';
import { Users, Package, ShoppingCart, Megaphone, LayoutDashboard, Code, ArrowRight, Sparkles } from 'lucide-react';
import { FeatureItem } from '../types';
import { motion } from 'framer-motion';

const features: FeatureItem[] = [
  {
    title: 'Smart Customer Insights',
    description: 'Turn casual browsers into loyal customers with deep data tracking and relationship management.',
    icon: Users,
  },
  {
    title: 'Effortless Inventory Control',
    description: 'Never miss a sale with real-time stock synchronization across all your warehouses and channels.',
    icon: Package,
  },
  {
    title: 'Streamlined Order Fulfillment',
    description: 'Automate your entire order lifecycle from checkout to doorstep delivery to save time.',
    icon: ShoppingCart,
  },
  {
    title: 'Targeted Marketing Campaigns',
    description: 'Launch data-driven marketing blasts that reach customers on the channels they use most.',
    icon: Megaphone,
  },
  {
    title: 'Centralized Business Command',
    description: 'Manage staff, set permissions, and view critical analytics from one powerful admin dashboard.',
    icon: LayoutDashboard,
  },
  {
    title: 'Seamless API Integration',
    description: 'Connect your existing website and third-party tools instantly with our developer-friendly APIs.',
    icon: Code,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
        {/* Background Pattern: Dot Grid */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-boost-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-boost-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            Power-packed features for <br/>
            <span className="relative inline-block">
               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-boost-teal to-boost-accentHover">modern businesses</span>
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
            We've distilled the most complex business operations into an intuitive suite of tools. 
            Manage everything from a single dashboard.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Hover Gradient Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-boost-accent/20 rounded-[2rem] transition-colors duration-300 pointer-events-none"></div>
              
              {/* Icon */}
              <div className="relative w-14 h-14 mb-6">
                 <div className="absolute inset-0 bg-boost-teal/5 rounded-2xl group-hover:scale-110 transition-transform duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-boost-teal group-hover:text-boost-accent transition-colors duration-300" />
                 </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-boost-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-6">
                {feature.description}
              </p>

              {/* Learn More Link (appears on hover) */}
              <div className="flex items-center text-boost-accent font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
              
              {/* Decorational Corner Blob */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-boost-light to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};