"use client";

import { motion } from "framer-motion";
import { MessageSquareX, Unplug, FileX } from "lucide-react";

interface LandingHeroProps {
  onDownloadClick: () => void;
}

export default function LandingHero({ onDownloadClick }: LandingHeroProps) {
  const problems = [
    {
      icon: MessageSquareX,
      title: "Unclear Messaging",
      color: "blue-600",
    },
    {
      icon: Unplug,
      title: "Broken Systems",
      color: "blue-600",
    },
    {
      icon: FileX,
      title: "Admin Chaos",
      color: "blue-600",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-indigo-50 pt-20 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            You're One Story Away From{" "}
            <span className="text-blue-600">
              Doubling Your Revenue
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            The difference between entrepreneurs who scale and those who struggle isn't talent.{" "}
            <span className="font-semibold text-gray-900">It's clarity.</span> And clarity takes 7 seconds.
          </motion.p>

          {/* Three Things Killing Your Business */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Three things killing your business:
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="relative group flex"
                >
                  <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden w-full flex flex-col items-center">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-${problem.color}`}></div>

                    <div className={`w-16 h-16 rounded-full bg-${problem.color} flex items-center justify-center shadow-lg mb-4 mt-2`}>
                      <problem.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    <h3 className={`text-xl md:text-2xl font-bold text-center text-${problem.color}`}>
                      {problem.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What if this changed? */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8"
            >
              What if this changed?
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-4xl mx-auto"
          >
            <button
              onClick={onDownloadClick}
              className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Download The Hook
            </button>
            <a
              href="https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg border-2 border-blue-600 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Book 30 Minutes That Could Save You 300 Hours
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
