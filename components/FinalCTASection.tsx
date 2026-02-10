"use client";

import { motion } from "framer-motion";
import { Download, Calendar, PlayCircle, ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  onDownloadClick: () => void;
}

export default function FinalCTASection({ onDownloadClick }: FinalCTASectionProps) {
  const ctas = [
    {
      icon: Download,
      title: "Get The 7-Second Pitch",
      description: "Download The HOOK Framework for free",
      action: "download",
      buttonText: "Download Now (Free)",
    },
    {
      icon: Calendar,
      title: "Book Coffee With Johann",
      description: "30 minutes to identify your exact bottleneck",
      action: "calendly",
      buttonText: "Schedule Your Coffee",
    },
    {
      icon: PlayCircle,
      title: "Watch The Case Study",
      description: "See how we built a 48-hour automation system",
      action: "calendly",
      buttonText: "Watch Now",
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
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            You've Read This Far. That Means Something.
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
            You know something's broken.
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            You didn't start a business to be confused, chaotic, and burned out.
          </p>
          <p className="text-2xl font-bold text-white">
            Let's fix that. Together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Choose your next step:
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {ctas.map((cta, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
                  <cta.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {cta.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 mb-6 min-h-[50px]">
                  {cta.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => handleCtaClick(cta.action)}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {cta.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
