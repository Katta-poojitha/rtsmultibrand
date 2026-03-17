import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Wrench, ShieldCheck, Award } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center py-12 space-y-16">
      {/* Main Info Section */}
      <section className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Premium Multi-Brand Car Care</h2>
        <p className="text-slate-600 leading-relaxed">
          Experience the finest automotive care with RTS. From periodic maintenance to 
          high-end detailing, we ensure your vehicle performs at its absolute best.
        </p>
      </section>

      {/* Banner Image Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto px-4"
      >
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
          <img 
            src={`${import.meta.env.BASE_URL}banner.jpg.jpg`}
            alt="RTS Multi Brand Car Care" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </motion.section>

      {/* Professional Excellence Section */}
      <section className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <InfoCard 
          icon={<Users className="w-8 h-8 text-blue-600" />}
          title="Expert Technicians"
          description="Over 15 years of deep industry experience with certified master mechanics."
        />
        <InfoCard 
          icon={<Wrench className="w-8 h-8 text-blue-600" />}
          title="Modern Equipment"
          description="Using state-of-the-art diagnostic tools for precise and efficient repairs."
        />
        <InfoCard 
          icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
          title="Quality Assured"
          description="Always utilizing genuine parts and fluids for maximum vehicle longevity."
        />
        <InfoCard 
          icon={<Award className="w-8 h-8 text-blue-600" />}
          title="Multi-Brand Experts"
          description="Specialized service for all luxury, domestic, and international brands."
        />
      </section>

      {/* Navigation Grid - Optimized Sizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 pb-12">
        <NavButton 
          label="Home" 
          onClick={() => navigate('/home')} 
          active
          blink
        />
        <NavButton 
          label="Service" 
          onClick={() => navigate('/service')} 
          blink
        />
        <NavButton 
          label="Applications" 
          onClick={() => navigate('/applications')} 
          blink
        />
        <NavButton 
          label="Call Us" 
          onClick={() => navigate('/call-us')} 
          blink
        />
      </div>
    </div>
  );
};

interface NavButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  blink?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick, active, blink }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      flex flex-col items-center justify-center p-8 rounded-[2.5rem] shadow-xl transition-all duration-500 min-h-[180px] relative overflow-hidden
      ${active 
        ? 'bg-blue-600 text-white shadow-blue-500/40' 
        : 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-100 shadow-slate-200/30'}
    `}
  >
    {(blink || active) && (
      <motion.div
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-white/10"
      />
    )}
    <span className="text-xl font-display font-black uppercase tracking-widest relative z-10">{label}</span>
    <div className={`w-12 h-1 mt-6 rounded-full relative z-10 ${active ? 'bg-white/40' : 'bg-blue-600'}`} />
  </motion.button>
);

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-lg flex flex-col items-center text-center space-y-4"
  >
    <div className="p-4 bg-blue-50 rounded-2xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);
