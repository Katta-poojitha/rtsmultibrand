import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Paintbrush, Wrench, Droplets, Cpu } from 'lucide-react';

export const Service: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Premium Services</h2>
        <p className="text-slate-600 text-xl">
          Choose from our wide range of professional car care solutions designed to keep your vehicle in pristine condition.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        <ServiceButton 
          icon={<Paintbrush />} 
          label="Denting & Painting" 
          onClick={() => navigate('/service/denting-painting')} 
          color="bg-rose-500"
        />
        <ServiceButton 
          icon={<Wrench />} 
          label="Repairing" 
          onClick={() => navigate('/service/repairing')} 
          color="bg-blue-500"
        />
        <ServiceButton 
          icon={<Droplets />} 
          label="Washing" 
          onClick={() => navigate('/service/washing')} 
          color="bg-cyan-500"
        />
        <ServiceButton 
          icon={<Cpu />} 
          label="Engine Segregation" 
          onClick={() => navigate('/service/engine-segregation')} 
          color="bg-amber-500"
        />
      </div>
    </div>
  );
};

interface ServiceButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, label, onClick, color }) => (
  <motion.button
    whileHover={{ scale: 1.03, y: -8 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group transition-all"
  >
    <div className={`p-6 rounded-3xl ${color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon as React.ReactElement, { className: 'w-12 h-12' })}
    </div>
    <span className="text-2xl font-bold text-slate-800">{label}</span>
    <p className="mt-4 text-slate-500 font-medium">Professional care for your vehicle's needs.</p>
  </motion.button>
);
