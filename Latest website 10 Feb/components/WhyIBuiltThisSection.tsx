"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import Image from "next/image";

export default function WhyIBuiltThisSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-5xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why I Built LeadingToday
          </h2>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            I'm Johann Gouws. For 10 years, I've worked with professional athletes, leaders, business owners and entrepreneurs across South Africa. I've seen what works—and what doesn't.
          </p>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The Problem
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            I've watched brilliant entrepreneurs lose customers because their systems are ancient and overwhelming - and they don't have to be. I've seen businesses drown in manual admin that could be automated in an afternoon. And I've met too many founders who can't remember the last time they had dinner with their family—because their business runs on their constant attention.
          </p>
        </motion.div>

        {/* What I Believe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What I Believe
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Here's what I believe:
          </p>

          <div className="space-y-6 bg-blue-50 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">
                  CONFUSION kills sales.
                </p>
                <p className="text-gray-700">
                  When our systems are confusing and overwhelming, it's confusing for clients too.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">
                  CHAOS kills growth.
                </p>
                <p className="text-gray-700">
                  We build automation systems—together.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">
                  BURNOUT kills everything.
                </p>
                <p className="text-gray-700">
                  We give you your time back—so you can live.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/connection-moment.png"
            alt="Johann Gouws - LeadingToday Founder"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
