import React from 'react';
import { Network, Database, Globe, ArrowLeftRight } from 'lucide-react';

export const Integration: React.FC = () => {
  return (
    <section id="integration" className="py-24 bg-boost-dark text-white relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-boost-teal/40 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
           
           <div className="w-full md:w-1/2">
             <div className="bg-black/30 p-6 rounded-2xl border border-white/10 backdrop-blur-sm font-mono text-sm shadow-2xl">
               <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-2 text-gray-300">
                 <p><span className="text-purple-400">const</span> <span className="text-blue-400">order</span> = <span className="text-purple-400">await</span> boostOwl.<span className="text-yellow-400">createOrder</span>({`{`}</p>
                 <p className="pl-4">customerId: <span className="text-green-400">"cust_123"</span>,</p>
                 <p className="pl-4">items: [{`{`} id: <span className="text-green-400">"sku_55"</span>, qty: <span className="text-orange-400">2</span> {`}`}],</p>
                 <p className="pl-4">source: <span className="text-green-400">"website_checkout"</span></p>
                 <p>{`}`});</p>
                 <p className="text-gray-500 mt-2">// Response</p>
                 <p><span className="text-purple-400">return</span> {`{`} success: <span className="text-blue-400">true</span>, id: <span className="text-green-400">"ord_999"</span> {`}`}</p>
               </div>
             </div>
           </div>

           <div className="w-full md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">
               Connects with your ecosystem instantly.
             </h2>
             <p className="text-gray-300 text-lg mb-8 leading-relaxed">
               Our Smart API integrations ensure your inventory stays synced across your physical store, your website, and your marketplace listings in real-time.
             </p>
             
             <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-lg bg-boost-teal flex items-center justify-center">
                   <Globe className="text-boost-accent" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Website Integration</h4>
                   <p className="text-gray-400 text-sm">Shopify, WooCommerce, Custom Sites.</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-lg bg-boost-teal flex items-center justify-center">
                   <Database className="text-boost-accent" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Central Inventory</h4>
                   <p className="text-gray-400 text-sm">One database for all sales channels.</p>
                 </div>
               </div>
             </div>
           </div>

        </div>
      </div>
    </section>
  );
};