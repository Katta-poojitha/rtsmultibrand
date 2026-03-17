import React from 'react';
import { useParams } from 'react-router-dom';

const SERVICE_DATA: Record<string, { title: string; content: string; image: string | string[] }> = {
  'denting-painting': {
    title: 'Denting & Painting',
    content: 'Our expert painting and denting services restore your car to its original glory. We use high-quality paints and advanced techniques to ensure a perfect match and a long-lasting finish.',
    image: ['/painting.jpg', '/painting-2.JPG']
  },
  'repairing': {
    title: 'Mechanical Repairing',
    content: 'From engine diagnostics to suspension work, our certified mechanics handle all types of mechanical repairs with precision and care, using genuine parts for reliability.',
    image: '/repair.jpg'
  },
  'washing': {
    title: 'Premium Washing',
    content: 'Experience the ultimate clean with our premium washing services. We use pH-neutral shampoos and microfiber towels to protect your car\'s paint while removing every speck of dirt.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800'
  },
  'engine-segregation': {
    title: 'Engine Segregation',
    content: 'Our specialized engine segregation and cleaning service ensures your engine runs cool and efficiently. We deep clean every component to prevent wear and tear.',
    image: ['/engine.jpg', '/engine-2.jpg', '/engine-3.jpg']
  }
};

export const ServiceDetail: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const data = type ? SERVICE_DATA[type] : null;

  if (!data) return <div className="text-center py-20 text-2xl">Service not found</div>;

  const isArray = Array.isArray(data.image);
  const imageCount = isArray ? (data.image as string[]).length : 1;

  return (
    <div className="max-w-6xl mx-auto space-y-4 px-4 pb-12">
      {isArray ? (
        <div className={`grid grid-cols-1 ${imageCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
          {(data.image as string[]).map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${data.title} ${index + 1}`} 
              className="w-full h-auto max-h-[600px] object-cover rounded-[3rem] shadow-2xl bg-slate-100/30"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      ) : (
        <img 
          src={data.image as string} 
          alt={data.title} 
          className="w-full h-auto max-h-[800px] object-contain rounded-[4rem] shadow-2xl bg-slate-100/30"
          referrerPolicy="no-referrer"
        />
      )}
      <div className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] shadow-xl border border-white/20">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">{data.title}</h2>
        <p className="text-slate-600 text-xl leading-relaxed">
          {data.content}
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-50 rounded-3xl">
            <span className="block text-3xl font-bold text-blue-600">100%</span>
            <span className="text-slate-500 font-medium">Quality</span>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-3xl">
            <span className="block text-3xl font-bold text-blue-600">Expert</span>
            <span className="text-slate-500 font-medium">Staff</span>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-3xl">
            <span className="block text-3xl font-bold text-blue-600">Fast</span>
            <span className="text-slate-500 font-medium">Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};
