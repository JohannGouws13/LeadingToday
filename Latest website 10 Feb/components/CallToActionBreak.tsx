"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function CallToActionBreak() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            You didn't start a business to drown in admin. You started to solve a problem—and create freedom. Let's build that. Together.
          </p>

          {/* CTA */}
          <a
            href="https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            <Coffee className="w-6 h-6" />
            Grab a Coffee with Johann
          </a>
        </motion.div>
      </div>
    </section>
  );
}
