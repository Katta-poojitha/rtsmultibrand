import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const CallUs: React.FC = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "911234567890";
    const text = encodeURIComponent(`Hi, my name is ${name}. ${message}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <section className="text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">Contact Us</h2>
        <p className="text-slate-600 text-xl">
          We're here to help you with all your car care needs. Reach out to us today!
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactInfo
            icon={<Phone className="text-blue-600" />}
            title="Phone"
            detail="+91 1234567890"
            href="tel:+911234567890"
          />
          <ContactInfo
            icon={<Mail className="text-blue-600" />}
            title="Email"
            detail="carwebsite@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=carwebsite@gmail.com"
          />
          <ContactInfo
            icon={<Clock className="text-blue-600" />}
            title="Hours"
            detail="Mon - Sat: 8:00 AM - 7:00 PM"
          />
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 space-y-6"
        >
          <div>
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="Your Name" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl h-32 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="How can we help?"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <section className="group relative w-full h-[450px] rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow cursor-pointer">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Zen+Technologies+Limited+Hardware+Park+Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          title="View on Google Maps"
        />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.082725227181!2d78.571479375171!3d17.26296338360249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1d75c88998b%3A0xc3484f9011f4228!2sZen%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1710688000000!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Zen Technologies Location"
          className="relative z-10"
        ></iframe>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg pointer-events-none">
          <p className="text-sm font-bold text-slate-900">Click to view on Google Maps</p>
        </div>
      </section>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; detail: string; href?: string }> = ({ icon, title, detail, href }) => {
  const content = (
    <div className="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-md border border-slate-50 w-full hover:bg-slate-50 transition-colors">
      <div className="p-4 bg-blue-50 rounded-2xl">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{title}</h4>
        <p className="text-xl font-bold text-slate-800">{detail}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block w-full">
        {content}
      </a>
    );
  }

  return content;
};
