"use client";

import { motion } from "framer-motion";

const things = [
  {
    number: "01",
    title: "Unclear Messaging",
    description: "When customers do not understand how our product makes their life better, or solves their problems, we lose them. We need to tell them how our products and services improve their lives.",
  },
  {
    number: "02",
    title: "Broken Systems",
    description: "Fix the message, then fix the system. Make it easy for them to do business with you. No more sheets, paper and messaging. Click and pay.",
  },
  {
    number: "03",
    title: "Admin Chaos",
    description: "Your system should be doing your admin, you should be building your business. Automate and grow.",
  },
];

export default function ThreeThingsSection() {
  return (
    <section className="section-spacing bg-bg-lightGray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-headline mb-6">Three Things We Fix</h2>
          <p className="text-body-large text-primary-gray max-w-[720px] mx-auto">
            Stop losing time, money, and sanity to these common problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {things.map((thing, index) => (
            <motion.div
              key={thing.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border border-border-gray transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-5xl font-bold text-gray-200 mb-4">{thing.number}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">{thing.title}</h3>
              <p className="text-base leading-relaxed text-primary-gray">{thing.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
