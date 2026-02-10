"use client";

import { motion } from "framer-motion";

export default function SalesSystemSection() {
  const hookSteps = [
    {
      title: "Label the Pain",
      description: "They see themselves stuck in their current struggle",
    },
    {
      title: "Show Freedom",
      description: "You paint the transformation they're desperate for",
    },
    {
      title: "Sell the Map",
      description: "You position your product as THE guide to get there",
    },
    {
      title: "Reveal the Cost",
      description: "They understand what staying stuck will cost them",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* THE HOOK Box */}
          <div className="border-4 border-blue-600 bg-white rounded-lg px-8 py-4 inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 tracking-wide">
              THE HOOK
            </h2>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-900 font-semibold mb-4">
              The HOOK is a story-based framework that helps you sell to your customer.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              It invites them into a story where:
            </p>
          </div>
        </motion.div>

        {/* HOOK Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {hookSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
