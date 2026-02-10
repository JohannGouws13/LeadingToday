"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-spacing bg-bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h1 className="text-hero-headline mb-6 text-balance">
              You've Got a Great Product. But If Customers Can't Figure Out What You Do or How to Buy—You're Invisible.
            </h1>

            {/* Subheadline */}
            <p className="text-body-large text-primary-gray mb-8">
              Here's the truth: Most South African entrepreneurs have something worth buying. But when someone asks, "What do you do?"— We fumble the explanation...
            </p>

            {/* Pain Points */}
            <div className="text-left max-w-[600px] mx-auto mb-12 space-y-4">
              <p className="text-body-regular text-primary-gray">
                You couldn't explain what you do clearly at a networking event
              </p>
              <p className="text-body-regular text-primary-gray">
                A potential customer messaged you on WhatsApp at 9pm (while you were putting your kids to bed) and you couldn't respond fast enough
              </p>
              <p className="text-body-regular text-primary-gray">
                Someone asked, "How do I book?" and your answer involved three emails, a phone call, and a spreadsheet
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
              <motion.a
                href="#clarity-checklist"
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download: The HOOK Framework
              </motion.a>
              <motion.a
                href="#coffee-booking"
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Grab a Coffee with Johann
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-confusion.png"
                alt="South African entrepreneur struggling with unclear messaging and overwhelm"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
