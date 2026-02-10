"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/connection-moment.png"
                alt="Johann Gouws having a strategy conversation with South African entrepreneur"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-section-headline mb-8">
              Why I Built LeadingToday
            </h2>

          <div className="space-y-6 text-body-regular text-primary-gray">
            <p className="italic">
              I'm Johann Gouws. For 10 years, I built Salesforce systems for businesses across South Africa. I've seen what works—and what doesn't.
            </p>

            <p>
              I've watched brilliant entrepreneurs lose customers because they couldn't explain what they do in 10 seconds. I've seen businesses drown in manual admin that could be automated in an afternoon. And I've met too many founders who can't remember the last time they had dinner with their family—because their business runs on their constant attention.
            </p>

            <p className="font-semibold text-primary-dark">
              Here's what I believe:
            </p>

            <ul className="space-y-4 pl-6">
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold flex-shrink-0">•</span>
                <span><strong>CONFUSION kills sales.</strong> We teach clarity frameworks—for free.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold flex-shrink-0">•</span>
                <span><strong>CHAOS kills growth.</strong> We build automation systems—together.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-orange font-bold flex-shrink-0">•</span>
                <span><strong>BURNOUT kills everything.</strong> We give you your time back—so you can live.</span>
              </li>
            </ul>

            <p className="text-body-large font-bold text-primary-dark pt-6">
              You didn't start a business to drown in admin. You started to solve a problem—and create freedom. Let's build that. Together.
            </p>
          </div>

            <div className="mt-12">
              <motion.a
                href="#coffee-booking"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Grab a Coffee with Johann
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
