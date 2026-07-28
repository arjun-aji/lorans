'use client';

import { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer groom makeup services in Ernakulam?",
      answer: "Yes, we specialize in modern Groom Makeup, HD Makeup, Glass Makeup, Waterproof Makeup, and wedding grooming packages for grooms across Ramalloor, Kothamangalam, and Ernakulam.",
    },
    {
      question: "Do you provide ladies haircuts and hair styling?",
      answer: "Yes, in addition to men's grooming, we offer expert ladies' haircuts including layer cuts, bob cuts, butterfly cuts, wolf cuts, and customized styling.",
    },
    {
      question: "What hair treatments and Keratin options are available at Loran's?",
      answer: "We offer deep restorative Hair Spa, Keratin Treatments, Hair Botox, Hair Smoothening, Permanent Straightening, Scalp Detox, and grey coverage coloring using scalp-safe products.",
    },
    {
      question: "Do you offer Hydra Facial and clinical facial treatments in Ramalloor?",
      answer: "Yes, we feature over 100+ facial treatments including Hydra Facial, Korean Glass Skin Facial, Gold & Diamond Facials, De-Tan, and deep cleansing Clean Ups.",
    },
    {
      question: "What are Loran's salon timings and appointment booking methods?",
      answer: "We are open Monday through Saturday from 9:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 8:00 PM. Walk-ins are welcome, but advance online or WhatsApp booking is recommended for seamless service.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white border-t border-stone-200/40 lg:min-h-screen lg:flex lg:items-center"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 w-full">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] font-semibold text-amber-800 uppercase mb-3">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-stone-900 uppercase"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-stone-300 my-6" aria-hidden="true" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b border-stone-200/60 pb-4 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left py-3 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-sans font-semibold text-sm sm:text-base text-stone-850 group-hover:text-[#c59842] transition-colors duration-300">
                    {faq.question}
                  </span>

                  {/* Chevron Icon */}
                  <span
                    className={`ml-4 text-stone-400 group-hover:text-[#c59842] transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-[#c59842]' : ''
                      }`}
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Expandable Answer */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="font-sans text-stone-500 font-light text-xs sm:text-sm leading-relaxed max-w-3xl pb-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
