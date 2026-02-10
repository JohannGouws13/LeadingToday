"use client";

import { motion } from "framer-motion";
import { MessageSquareX, Unplug, FileX } from "lucide-react";

export default function ThreeProblemsCore() {
  const problems = [
    {
      icon: MessageSquareX,
      title: "Unclear Messaging",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Unplug,
      title: "Broken Systems",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FileX,
      title: "Admin Chaos",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Three Things Killing Your Business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group flex"
            >
              {/* Card */}
              <div className="bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden w-full flex flex-col">
                {/* Gradient accent bar on top */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${problem.color}`}></div>

                {/* Icon */}
                <div className="flex justify-center mb-4 mt-2">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl font-bold text-center bg-gradient-to-r ${problem.color} text-transparent bg-clip-text`}>
                  {problem.title}
                </h3>

                {/* Animated underline */}
                <div className={`h-1 bg-gradient-to-r ${problem.color} mx-auto mt-4 transition-all duration-300 group-hover:w-full w-12 rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-xl md:text-2xl text-white/90 font-semibold">
            We fix all three.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
