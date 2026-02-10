"use client";

import { motion } from "framer-motion";
import { Download, Calendar, Rocket, ArrowRight } from "lucide-react";

interface HowItWorksLandingProps {
  onDownloadClick: () => void;
}

export default function HowItWorksLanding({ onDownloadClick }: HowItWorksLandingProps) {
  const steps = [
    {
      number: 1,
      icon: Download,
      title: "Do the Systems Autopsy",
      description: "30 minutes. We map your workflow and identify which of the 4 systems is bleeding you the most.",
      cta: "Take The Systems Autopsy (Free)",
      ctaAction: "download",
    },
    {
      number: 2,
      icon: Calendar,
      title: "Build Your System",
      description: "We automate your marketing, quoting, invoicing, and communications. Done-for-you. No DIY courses. Just working systems.",
      cta: "See If We're A Fit",
      ctaAction: "calendly",
    },
    {
      number: 3,
      icon: Rocket,
      title: "Reclaim Your Weekends",
      description: "Your business runs itself. Leads come in. Quotes go out. Invoices get paid. You work ON the business, not IN it.",
      cta: "Book A Coffee with Johann",
      ctaAction: "calendly",
    },
  ];

  const handleCtaClick = (action: string) => {
    if (action === "download") {
      onDownloadClick();
    } else if (action === "calendly") {
      window.open("https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business", "_blank");
    }
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Three simple steps to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-white/30 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-5 h-5 text-white/50" />
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300 h-full flex flex-col">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white font-bold text-2xl rounded-xl mb-3 shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-3">
                  <step.icon className="w-10 h-10 text-blue-600" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() => handleCtaClick(step.ctaAction)}
                  className="w-full px-5 py-3 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {step.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
