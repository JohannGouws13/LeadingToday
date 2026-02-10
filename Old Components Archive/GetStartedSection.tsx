"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Download The HOOK Framework",
    description: "Four lines that answer: What problem do you solve? Who for? What result? What's next? Takes 7 seconds.",
    cta: "Download Now",
    href: "#clarity-checklist",
  },
  {
    number: "2",
    title: "Book a Coffee with Johann",
    description: "No pitch. Just clarity. 30 minutes to diagnose where you're stuck.",
    cta: "Grab a Coffee",
    href: "#coffee-booking",
  },
  {
    number: "3",
    title: "Build the System (If It's a Fit)",
    description: "Master The HOOK Framework. Automate operations. Build systems that run without you.",
    cta: "Learn More",
    href: "#about",
  },
];

export default function GetStartedSection() {
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
          <h2 className="text-section-headline mb-6">How to Get Started</h2>
          <p className="text-body-large text-primary-gray max-w-[720px] mx-auto">
            Three simple steps to fix your messaging, systems, and time freedom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card relative"
            >
              {/* Large Number */}
              <div className="absolute top-4 right-4 text-7xl font-bold text-gray-100 leading-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent-orange text-white flex items-center justify-center font-bold text-xl mb-6">
                  {step.number}
                </div>

                <h3 className="text-subsection-headline mb-4">{step.title}</h3>
                <p className="text-body-regular text-primary-gray mb-6">
                  {step.description}
                </p>

                <motion.a
                  href={step.href}
                  className="text-primary-accent font-semibold hover:underline inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {step.cta} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
