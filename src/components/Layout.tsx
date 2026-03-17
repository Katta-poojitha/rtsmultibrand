import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Car, ArrowLeft } from 'lucide-react';
import { Marquee } from './Marquee';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isIntro = location.pathname === '/';

  if (isIntro) return <>{children}</>;

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-slate-50">
      {/* Background Theme Image */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
      >
        <img 
          src={`${import.meta.env.BASE_URL}logo.jpg`}
          alt="" 
          className="w-full h-full object-cover grayscale opacity-15 brightness-105"
        />
      </div>

      <div className="relative z-10 px-6 pt-4 pb-6">
        <header className="flex items-center gap-4 mb-2">
          <div className="bg-white p-1 rounded-xl shadow-md border border-slate-200 flex items-center justify-center overflow-hidden w-14 h-14">
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="RTS Logo" 
              className="w-full h-full object-contain scale-110"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-none">
              RTS <span className="text-blue-600">multibrand</span>
            </h1>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mt-1">
              car care
            </p>
          </div>
        </header>

        {/* Marquee Header */}
        <Marquee />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto pb-24">
          {children}
        </main>

        {/* Back Button */}
        {location.pathname !== '/home' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="fixed bottom-8 right-8 bg-slate-900 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 z-50 hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="font-medium">Back</span>
          </motion.button>
        )}
      </div>
    </div>
  );
};
