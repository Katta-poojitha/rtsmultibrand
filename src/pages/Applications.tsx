import React from 'react';

export const Applications: React.FC = () => {
  return (
    <div className="w-full space-y-16 py-8">
      <section className="text-center px-6">
        <h2 className="text-5xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Applications</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our specialized applications and technologies used in car care.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}washing.jpg`}
            alt="Professional Car Washing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/20">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Professional Washing Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Foam wash',
                'Pressure wash',
                'Interior vacuum cleaning',
                'Dashboard & seat cleaning',
                'Engine bay cleaning'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Keep your car fresh and spotless with our professional washing services. We use high-quality shampoos and advanced cleaning techniques to remove dirt, dust, and grime without damaging your vehicle’s paint.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}detailing.jpg`}
            alt="Expert Car Detailing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/10">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Expert Detailing Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Machine polishing',
                'Waxing & ceramic coating',
                'Scratch removal',
                'Interior deep cleaning',
                'Paint protection treatment'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Give your car a showroom-like finish with our expert detailing services. We restore shine, remove minor scratches, and protect your vehicle’s exterior and interior.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}mechanic.jpg`}
            alt="Reliable Mechanical Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/20">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Reliable Mechanical Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Engine diagnostics & repair',
                'Oil & filter change',
                'Brake service',
                'Clutch & gearbox repair',
                'Suspension service'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Ensure your vehicle runs smoothly with our reliable mechanical services. Our skilled technicians handle everything from minor fixes to major repairs.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}electric.jpg`}
            alt="Electrical System Checks" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/10">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Electrical System Checks
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Battery testing & replacement',
                'Wiring repair',
                'Light & indicator repair',
                'Starter & alternator service'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              We provide complete electrical system checks and repairs to keep your vehicle functioning efficiently and safely.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}wheel.jpg`}
            alt="Professional Tyre & Wheel Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/20">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Professional Tyre & Wheel Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Wheel alignment',
                'Wheel balancing',
                'Tyre replacement',
                'Puncture repair'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Improve safety and driving comfort with our professional tyre and wheel services.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}carbody.jpg`}
            alt="Expert Body Repair & Painting" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/10">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Body Repair & Painting
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Dent removal',
                'Scratch repair',
                'Full body painting',
                'Bumper repair',
                'Accident repair'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Restore your car’s original look with our expert body repair and painting services. We handle dents, scratches, and accident damage with precision.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}ac.jpg`}
            alt="AC & Cooling System Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/20">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              AC & Cooling System Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'AC gas refill',
                'AC repair & servicing',
                'Radiator service',
                'Cooling system check'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Stay comfortable during every drive with our complete AC and cooling system services.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse w-full border-y border-slate-100 bg-white">
        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}inspection.jpg`}
            alt="Advanced Diagnostics & Inspection" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-slate-50/10">
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
              Diagnostics & Inspection
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 text-base font-semibold uppercase tracking-wide">
              {[
                'Computer diagnostics',
                'Full vehicle inspection',
                'Pre-purchase inspection',
                'Performance check'
              ].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-slate-500 text-lg leading-relaxed border-l-4 border-blue-500 pl-8 py-2 max-w-2xl">
            <p>
              Get accurate insights into your vehicle’s condition with our advanced diagnostic tools and expert inspection services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
