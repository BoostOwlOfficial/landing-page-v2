import React from 'react';
import { ArrowRight, Play, CheckCircle2, LayoutDashboard, ShoppingBag, Package, Users, Search, Bell, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-boost-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-boost-teal/20 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-boost-accent/10 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-colors cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-boost-accent"></span>
                <span className="text-sm font-medium text-boost-light tracking-wide">The All-In-One Business OS</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Streamline Your <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-boost-accent via-emerald-300 to-teal-200">
                  Business Operations
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                BoostOwl unifies your CRM, inventory, and customer support into one powerful platform. Automate the busywork and focus on growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <button className="w-full sm:w-auto px-8 py-4 bg-boost-accent text-boost-dark rounded-xl font-bold text-lg hover:bg-boost-accentHover transition-all shadow-[0_0_25px_rgba(0,223,162,0.4)] hover:shadow-[0_0_35px_rgba(0,223,162,0.6)] flex items-center justify-center gap-2 group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-boost-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-boost-accent" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content - 3D/Glassmorphism Effect */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative group"
             >
                {/* Glow effect behind */}
                <div className="absolute -inset-1 bg-gradient-to-r from-boost-accent to-boost-teal rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                
                {/* Main Dashboard Container */}
                <div className="relative bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
                  {/* Fake Browser Bar */}
                  <div className="h-10 bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-2">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                     </div>
                     <div className="ml-4 flex-1 max-w-[200px] h-5 bg-slate-800 rounded-md border border-white/5 flex items-center px-2">
                        <span className="text-[10px] text-gray-500">boostowl.com/app</span>
                     </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 flex bg-slate-900/90">
                     {/* Sidebar Navigation */}
                     <div className="w-14 sm:w-16 bg-slate-800/30 border-r border-white/5 flex flex-col items-center py-6 gap-6">
                        <div className="w-8 h-8 rounded-lg bg-boost-teal/20 flex items-center justify-center text-boost-accent mb-2">
                           <LayoutDashboard size={18} />
                        </div>
                        <div className="p-2 text-white bg-white/5 rounded-lg"><ShoppingBag size={18} /></div>
                        <div className="p-2 text-gray-500 hover:text-white transition-colors"><Package size={18} /></div>
                        <div className="p-2 text-gray-500 hover:text-white transition-colors"><Users size={18} /></div>
                     </div>

                     {/* Main Dashboard View */}
                     <div className="flex-1 p-4 sm:p-6 flex flex-col gap-6 overflow-hidden">
                        
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-bold text-sm sm:text-base">Dashboard</h3>
                                <p className="text-gray-500 text-[10px] sm:text-xs">Overview of your store</p>
                            </div>
                            <div className="flex gap-3">
                                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-gray-400">
                                    <Search size={14} />
                                 </div>
                                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-gray-400 relative">
                                    <Bell size={14} />
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-800"></div>
                                 </div>
                            </div>
                        </div>

                        {/* Stat Cards Row */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            <div className="bg-slate-800/40 p-3 rounded-xl border border-white/5">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400"><ShoppingBag size={14} /></div>
                                    <span className="hidden sm:flex text-[10px] text-green-400 items-center gap-1"><TrendingUp size={10} /> +12%</span>
                                </div>
                                <div className="text-lg sm:text-2xl font-bold text-white">1,240</div>
                                <div className="text-[10px] text-gray-500 truncate">Total Orders</div>
                            </div>
                            
                            <div className="bg-slate-800/40 p-3 rounded-xl border border-white/5 relative overflow-hidden">
                                {/* Pulse Effect for Alert */}
                                <div className="absolute -right-4 -top-4 w-12 h-12 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="p-1.5 rounded-md bg-orange-500/20 text-orange-400"><AlertTriangle size={14} /></div>
                                    <span className="hidden sm:block text-[10px] text-orange-400">Action</span>
                                </div>
                                <div className="text-lg sm:text-2xl font-bold text-white">5</div>
                                <div className="text-[10px] text-gray-500 truncate">Low Stock</div>
                            </div>

                            <div className="bg-slate-800/40 p-3 rounded-xl border border-white/5">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="p-1.5 rounded-md bg-green-500/20 text-green-400"><TrendingUp size={14} /></div>
                                </div>
                                <div className="text-lg sm:text-2xl font-bold text-white">₹4.2L</div>
                                <div className="text-[10px] text-gray-500 truncate">Revenue</div>
                            </div>
                        </div>

                        {/* Recent Orders Table */}
                        <div className="flex-1 bg-slate-800/30 rounded-xl border border-white/5 p-4 flex flex-col gap-3 overflow-hidden">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-300">Recent Orders</h4>
                                <span className="text-[10px] text-boost-accent cursor-pointer hover:underline">View All</span>
                            </div>
                            
                            {/* Table Header */}
                            <div className="grid grid-cols-4 text-[10px] text-gray-500 pb-2 border-b border-white/5">
                                <span>Order ID</span>
                                <span className="col-span-1">Customer</span>
                                <span>Status</span>
                                <span className="text-right">Amt</span>
                            </div>

                            {/* Rows */}
                            <div className="space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                                 <div className="grid grid-cols-4 items-center text-[10px] sm:text-xs group hover:bg-white/5 p-1 rounded transition-colors">
                                     <span className="text-gray-300">#ORD-001</span>
                                     <span className="text-gray-400 truncate">Amit Kumar</span>
                                     <span><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">Shipped</span></span>
                                     <span className="text-right text-gray-300">₹2,499</span>
                                 </div>
                                 <div className="grid grid-cols-4 items-center text-[10px] sm:text-xs group hover:bg-white/5 p-1 rounded transition-colors">
                                     <span className="text-gray-300">#ORD-002</span>
                                     <span className="text-gray-400 truncate">Sarah J.</span>
                                     <span><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Pending</span></span>
                                     <span className="text-right text-gray-300">₹850</span>
                                 </div>
                                 <div className="grid grid-cols-4 items-center text-[10px] sm:text-xs group hover:bg-white/5 p-1 rounded transition-colors">
                                     <span className="text-gray-300">#ORD-003</span>
                                     <span className="text-gray-400 truncate">Rahul V.</span>
                                     <span><span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">New</span></span>
                                     <span className="text-right text-gray-300">₹1,200</span>
                                 </div>
                            </div>
                            
                            {/* Inventory Bars (Visual Filler) */}
                             <div className="mt-auto pt-3 border-t border-white/5 hidden sm:block">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] text-gray-400">Inventory Health</span>
                                    <span className="text-[10px] text-green-400">98%</span>
                                </div>
                                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: "85%" }}
                                      transition={{ duration: 1.5, ease: "easeOut" }}
                                      className="h-full bg-gradient-to-r from-boost-accent to-boost-teal rounded-full"
                                    />
                                </div>
                             </div>
                        </div>
                     </div>
                  </div>
                  
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* CSS Animation for bars and float */}
      <style>{`
        @keyframes slideIn {
          to { transform: translateX(0); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};