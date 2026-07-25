export default function Services() {
  const services = [
    {
      title: 'Haircut',
      description: 'Stylish cuts tailored to your personality.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.5 11.7M8.5 12.3L20 20" />
        </svg>
      ),
    },
    {
      title: 'Beard Styling',
      description: 'Shape, trim & define your perfect beard.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-1.5-1.5-3.5-2-5-2-2 0-4 1-5 2.5 1.5 2 4.5 2.5 6 1 .5-.5 1-1.5 1-1.5s.5 1 1 1.5c1.5 1.5 4.5 1 6-1-1-1.5-3-2.5-5-2.5-1.5 0-3.5.5-5 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5M9 4h6" />
        </svg>
      ),
    },
    {
      title: 'Hair Spa',
      description: 'Nourishing spa for healthy hair.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-4 4.5-4 8.5S10 17 12 17s4-1 4-5.5S12 3 12 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17c-2 0-6.5-1.5-8-5.5 1.5-1 4.5-1.5 6.5 1.5M12 17c2 0 6.5-1.5 8-5.5-1.5-1-4.5-1.5-6.5 1.5M12 17v4M7 21h10" />
        </svg>
      ),
    },
    {
      title: 'Facial',
      description: 'Deep cleansing facial for glowing skin.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4.97 0 9-4.03 9-9 0-6.5-4-11-9-11S3 6.5 3 13c0 4.97 4.03 9 9 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5c.5-.5 1.5-.5 2 0M14 12.5c.5-.5 1.5-.5 2 0M10 16.5c1 1 3 1 4 0" />
        </svg>
      ),
    },
    {
      title: 'Hair Coloring',
      description: 'Premium hair color with perfection.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 3L6 15v5h5L21 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l3 3M6 15l-3 3M10 19v2M12 21h2" />
        </svg>
      ),
    },
    {
      title: 'Kids Haircut',
      description: 'Stylish & comfortable haircuts for kids.',
      icon: (
        <svg className="w-8 h-8 text-[#c59842] fill-none stroke-current stroke-[1.2]" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14a4 4 0 008 0" />
          <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="10.5" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 9c2-1 4-1 6-1 2 0 3 .5 4 2" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 bg-white border-t border-stone-200/40 lg:min-h-screen lg:flex lg:items-center"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center">
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-amber-800 uppercase mb-3">
            Our Services
          </span>
          <h2 
            id="services-heading" 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-stone-900"
          >
            Look Good, Feel Great
          </h2>
          
          {/* Custom Elegant Cross Divider */}
          <div className="flex items-center justify-center gap-4 my-6" aria-hidden="true">
            <div className="w-12 h-px bg-stone-300" />
            <span className="text-[#c59842] text-[10px] font-semibold tracking-widest">✕</span>
            <div className="w-12 h-px bg-stone-300" />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 mt-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-between p-3.5 sm:p-6 bg-[#FAF8F5] border border-stone-200/50 rounded-sm shadow-sm hover:shadow-md hover:border-[#c59842]/40 transition-all duration-300 group text-center min-h-[180px] sm:min-h-[260px]"
            >
              <div className="flex flex-col items-center w-full">
                {/* Gold Icon */}
                <div 
                  className="mb-2 sm:mb-4 text-[#c59842] group-hover:scale-110 transition-transform duration-300 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-sans font-bold text-[10px] sm:text-sm tracking-wider sm:tracking-widest text-stone-900 uppercase mb-1 sm:mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-stone-500 font-light text-[9px] sm:text-xs leading-tight sm:leading-relaxed max-w-[160px] hidden xs:block">
                  {service.description}
                </p>
              </div>
              
              {/* Sleek CTA Link (Replaces price) */}
              <a 
                href={`https://wa.me/917356568307?text=${encodeURIComponent(
                  `Please enter the details...\nName:\nDate:\nService: ${service.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[8px] sm:text-[9px] tracking-normal sm:tracking-[0.25em] font-bold uppercase text-[#c59842] hover:text-[#b58832] transition-colors mt-3 sm:mt-6 group/link focus-visible:outline-none"
              >
                <span>Book Now</span>
                <svg 
                  className="w-2.5 h-2.5 transform group-hover/link:translate-x-0.5 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="flex justify-center mt-16">
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-3 bg-[#c59842] hover:bg-[#b58832] text-white text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase px-10 py-5 transition-all duration-300 shadow-lg shadow-gold-500/10 group focus:outline-none focus:ring-2 focus:ring-[#c59842] focus:ring-offset-2"
          >
            <span>View All Services</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
