import React from 'react';
import { Users, Package, ShoppingCart, Megaphone, LayoutDashboard, Code, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { FeatureItem } from '../types';
import { motion } from 'framer-motion';

interface BentoFeatureItem extends FeatureItem {
  className?: string; // grid placement + colors
  contentClassName?: string; // for internal flex directions
  bgGradient?: string;
  visual?: React.ReactNode;
  isDark?: boolean;
}

const features: BentoFeatureItem[] = [
  {
    title: 'Smart Customer Insights',
    description: 'Turn casual browsers into loyal customers. Our CRM automatically tracks preferences, purchase history, and interactions to build detailed customer profiles.',
    icon: Users,
    className: "md:col-span-2 lg:col-span-2 bg-slate-900 border-none shadow-2xl overflow-hidden",
    contentClassName: "flex-col lg:flex-row gap-8 items-center h-full",
    bgGradient: "from-boost-teal/20 to-transparent",
    isDark: true,
    visual: (
      <div className="w-full lg:w-1/2 h-48 relative flex items-end justify-between gap-2 px-6 pb-6 pt-16 bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:bg-white/10 transition-colors mt-6 lg:mt-0">
        <div className="absolute top-4 left-6 text-xs text-white/50 font-mono">Engagement Score</div>
        {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
          <div key={i} className="w-full bg-boost-teal/20 rounded-t-sm relative group-hover:bg-boost-teal/40 transition-colors duration-500" style={{ height: `${h}%` }}>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute bottom-0 w-full bg-boost-accent rounded-t-sm opacity-80"
            />
          </div>
        ))}
      </div>
    )
  },
  {
    title: 'Effortless Inventory',
    description: 'Real-time stock sync across all warehouses and channels. Never oversell.',
    icon: Package,
    className: "md:col-span-1 lg:col-span-1 bg-white",
    contentClassName: "flex-col gap-6",
    bgGradient: "from-emerald-500/5 to-teal-500/5",
    visual: (
      <div className="w-full h-40 mt-6 relative flex items-center justify-center">
        <div className="absolute w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-700 border border-emerald-200 shadow-lg z-10"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-all duration-700 border border-teal-100 shadow-sm"></div>
      </div>
    )
  },
  {
    title: 'Streamlined Fulfillment',
    description: 'Automate your entire order lifecycle from checkout to doorstep delivery.',
    icon: ShoppingCart,
    className: "md:col-span-1 lg:col-span-1 bg-boost-teal border-none shadow-xl",
    contentClassName: "flex-col gap-6",
    bgGradient: "from-white/10 to-transparent",
    isDark: true,
    visual: (
      <div className="w-full h-40 mt-6 flex flex-col justify-center gap-4 px-4 relative z-10">
        {[
          { label: 'Order Received', active: true },
          { label: 'Packed & Ready', active: true },
          { label: 'Out for Delivery', active: false }
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${step.active ? 'bg-boost-accent shadow-[0_0_10px_rgba(0,223,162,0.8)]' : 'bg-white/20'}`} />
            <div className={`h-1 flex-1 rounded-full ${step.active ? 'bg-boost-accent/50' : 'bg-white/10'}`} />
            <span className={`text-xs font-medium ${step.active ? 'text-white' : 'text-white/40'}`}>{step.label}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    title: 'Targeted Marketing',
    description: 'Launch data-driven campaigns via SMS, Email, and WhatsApp directly from your dashboard.',
    icon: Megaphone,
    className: "md:col-span-2 lg:col-span-2 bg-white",
    contentClassName: "flex-col lg:flex-row-reverse gap-8 items-center h-full",
    bgGradient: "from-pink-500/5 to-rose-500/5",
    visual: (
      <div className="w-full lg:w-1/2 h-52 relative bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col justify-end p-4 gap-3 mt-6 lg:mt-0">
        <div className="w-[85%] self-start bg-white p-3 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm text-xs text-slate-600 group-hover:-translate-y-1 transition-transform duration-500 z-10">
          Welcome back! Don't forget your items 🛒
        </div>
        <div className="w-[85%] self-end bg-boost-teal text-white p-3 rounded-2xl rounded-tr-sm shadow-md text-xs group-hover:-translate-y-2 transition-transform duration-700 delay-100 z-10 relative">
          Offer inside: get 20% off today using code BOOST20. 🎉
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="absolute top-3 right-4 flex gap-1 z-0 opacity-50">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    )
  },
  {
    title: 'Business Command Center',
    description: 'One powerful admin dashboard to manage staff, view analytics, and control your empire.',
    icon: LayoutDashboard,
    className: "md:col-span-2 lg:col-span-2 bg-white",
    contentClassName: "flex-col lg:flex-row gap-8 items-center h-full",
    bgGradient: "from-violet-500/5 to-purple-500/5",
    visual: (
      <div className="w-full lg:w-[60%] h-48 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex flex-col shadow-inner group-hover:scale-[1.03] transition-transform duration-700 mt-6 lg:mt-0">
        {/* Top bar */}
        <div className="h-4 bg-slate-200 w-full flex items-center px-2 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/50"></div>
        </div>
        <div className="flex flex-1 p-2 gap-2">
          {/* Sidebar */}
          <div className="w-1/4 bg-white rounded-md border border-slate-200 p-2 flex flex-col gap-2 shadow-sm">
            <div className="w-full h-1.5 rounded-sm bg-slate-200"></div>
            <div className="w-3/4 h-1.5 rounded-sm bg-slate-100"></div>
            <div className="w-5/6 h-1.5 rounded-sm bg-slate-100"></div>
            <div className="w-1/2 h-1.5 rounded-sm bg-slate-100"></div>
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full h-1/3 bg-white rounded-md border border-slate-200 p-2 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-boost-teal/20"></div>
                <div className="w-12 h-1.5 rounded-sm bg-slate-200"></div>
              </div>
              <div className="w-8 h-3 rounded-sm bg-boost-accent/20"></div>
            </div>
            <div className="flex-1 bg-white rounded-md border border-slate-200 flex items-end gap-1.5 p-2 px-3 shadow-sm">
              <div className="w-1/4 bg-boost-accent/40 rounded-t-sm" style={{ height: '40%' }}></div>
              <div className="w-1/4 bg-boost-accent/60 rounded-t-sm" style={{ height: '70%' }}></div>
              <div className="w-1/4 bg-boost-accent rounded-t-sm" style={{ height: '100%' }}></div>
              <div className="w-1/4 bg-boost-accent/80 rounded-t-sm" style={{ height: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Developer API',
    description: 'Built for scale. Connect your existing ERP or custom storefronts.',
    icon: Terminal,
    className: "md:col-span-1 lg:col-span-1 bg-[#0a0f1c] border-slate-800 shadow-2xl",
    contentClassName: "flex-col gap-4",
    bgGradient: "from-blue-500/5 to-transparent",
    isDark: true,
    visual: (
      <div className="w-full h-32 mt-6 bg-[#131b2c] rounded-lg border border-slate-800/80 p-4 font-mono text-[0.7rem] leading-relaxed overflow-hidden text-slate-400 shadow-inner group-hover:border-boost-accent/40 group-hover:shadow-[0_0_15px_rgba(0,223,162,0.1)] transition-all duration-500 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-boost-teal to-boost-accent opacity-50"></div>
        <div className="flex gap-2 mb-2 items-center">
          <span className="text-pink-400 font-bold">POST</span>
          <span className="text-white">/v1/orders</span>
        </div>
        <div className="text-boost-accent/90">
          {`{`} <br />
          &nbsp;&nbsp;<span className="text-blue-300">"status"</span>: <span className="text-green-300">"success"</span>,<br />
          &nbsp;&nbsp;<span className="text-blue-300">"id"</span>: <span className="text-orange-300">"ord_9xk2"</span><br />
          {`}`}
        </div>
      </div>
    )
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
            Everything you need to <br />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-[2.5rem] p-8 sm:p-10 border transition-all duration-500 overflow-hidden flex flex-col justify-between ${feature.className} ${feature.isDark
                  ? "hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] border-white/5"
                  : "bg-white/70 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,128,128,0.05)] hover:border-boost-teal/20"
                }`}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${feature.bgGradient}`}></div>

              {/* Corner Decoration */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br rounded-full blur-3xl opacity-30 group-hover:scale-150 transition-transform duration-700 pointer-events-none ${feature.bgGradient}`}></div>

              <div className={`relative z-10 flex h-full ${feature.contentClassName || 'flex-col gap-6'}`}>

                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm ring-1 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1 ${feature.isDark
                      ? "bg-white/10 ring-white/10 group-hover:ring-boost-accent/50"
                      : "bg-white ring-slate-100/50 group-hover:ring-boost-teal/20"
                    }`}>
                    {/* Icon Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.bgGradient}`}></div>
                    <feature.icon className={`transition-colors duration-500 relative z-10 ${feature.isDark ? "text-white group-hover:text-boost-accent" : "text-slate-600 group-hover:text-boost-teal"}`} size={26} strokeWidth={1.5} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 tracking-tight pr-4 ${feature.isDark ? "text-white group-hover:text-boost-light" : "text-slate-900 group-hover:text-boost-teal"}`}>{feature.title}</h3>
                  <p className={`leading-relaxed text-base md:text-[1.05rem] transition-colors duration-500 pr-4 ${feature.isDark ? "text-slate-300 group-hover:text-slate-200" : "text-slate-500 group-hover:text-slate-700"}`}>
                    {feature.description}
                  </p>

                  <div className={`mt-8 pt-6 border-t flex items-center text-sm font-semibold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 w-full ${feature.isDark ? "border-white/10 text-boost-accent" : "border-slate-100/80 text-boost-teal"}`}>
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-500" />
                  </div>
                </div>

                {/* Visual Content */}
                {feature.visual && (
                  <div className="flex-1 flex items-center justify-center relative w-full h-full min-h-[160px]">
                    {feature.visual}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};