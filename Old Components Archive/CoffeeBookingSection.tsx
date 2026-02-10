"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { Check } from "lucide-react";

export default function CoffeeBookingSection() {
  return (
    <section id="coffee-booking" className="section-spacing bg-bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="content-custom text-center"
        >
          <h2 className="text-section-headline mb-4">
            Book a Coffee with Johann
          </h2>
          <p className="text-body-large text-primary-gray mb-8">
            30 Minutes. No Pitch. Just Clarity.
          </p>

          <div className="bg-bg-lightGray rounded-lg p-8 mb-8 text-left">
            <h3 className="text-xl font-semibold mb-4 text-primary-dark">
              What Happens in This Call:
            </h3>
            <ul className="space-y-3 text-body-regular text-primary-gray">
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>We'll talk about where you're stuck—unclear messaging, broken systems, or both.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>You'll walk away with clarity on your biggest bottleneck.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Actionable next steps (even if we don't work together).</span>
              </li>
            </ul>
          </div>

          <p className="text-body-small italic text-primary-gray mb-8">
            "This isn't a sales call. It's a strategy session. Even if we never work together, you'll leave with something useful."
          </p>

          {/* Calendly inline widget */}
          <div className="bg-bg-white rounded-lg overflow-hidden mb-8">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Calendly script */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />

          {/* Alternative: External Link Button */}
          <motion.a
            href="https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Coffee Chat Now
          </motion.a>

          <p className="text-body-small text-primary-gray mt-4">
            (Opens in new tab)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
