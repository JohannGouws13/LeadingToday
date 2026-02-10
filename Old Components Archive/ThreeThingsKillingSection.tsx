"use client";

import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Unclear Messaging",
    problem: "You can't explain what you do at a networking event. Customers leave confused. Confused customers don't buy.",
    fix: "We teach you The HOOK Framework—a 7-second pitch that makes people lean in and say \"tell me more.\"",
    details: "Four lines that answer: What problem do you solve? Who for? What result? What's next?",
    cta: "Download: The HOOK Framework",
    ctaLink: "#clarity-checklist",
    hasBefore: true,
  },
  {
    number: "02",
    title: "Broken Systems",
    problem: "Customers book through 8 manual steps and WhatsApp messages. You're answering texts at 9pm while putting your kids to bed.",
    fix: "We build automation: 8 steps become 2 clicks. Book and pay—done.",
    cta: "Watch: How We Built Our Systems",
    ctaLink: "#coffee-booking",
    hasBefore: false,
  },
  {
    number: "03",
    title: "Admin Chaos",
    problem: "Your weekends disappear into spreadsheets and confirmations. You're running a business, but the business is running you.",
    fix: "We create systems that run while you rest. Your business works Monday while you were at the beach on Saturday.",
    cta: "Book a Coffee—Let's Talk About Your System",
    ctaLink: "#coffee-booking",
    hasBefore: false,
  },
];

export default function ThreeThingsKillingSection() {
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
          <h2 className="text-section-headline mb-6">Three Things Killing Your Business</h2>
        </motion.div>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-lg border border-border-gray"
            >
              {/* Number and Title */}
              <div className="mb-8">
                <div className="text-5xl font-bold text-gray-200 mb-4">{problem.number}</div>
                <h3 className="text-3xl font-bold mb-6">{problem.title}</h3>
              </div>

              {/* The Problem */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-dark">The Problem:</h4>
                <p className="text-body-regular text-primary-gray">{problem.problem}</p>
              </div>

              {/* The Fix */}
              <div className="mb-6 border-t border-border-gray pt-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-dark">The Fix:</h4>
                <p className="text-body-regular text-primary-gray">
                  {problem.fix.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i}>{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              </div>

              {/* Details (for HOOK Framework) */}
              {problem.details && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary-dark">What's The HOOK Framework?</h4>
                  <p className="text-body-regular text-primary-gray">{problem.details}</p>
                </div>
              )}

              {/* Before vs. After (only for Unclear Messaging) */}
              {problem.hasBefore && (
                <div className="mb-8 bg-bg-offWhite p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-center">Before vs. After:</h4>

                  <div className="mb-4">
                    <p className="text-body-small font-semibold mb-2">Before:</p>
                    <p className="text-body-regular italic text-primary-gray">"I work in IT."</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-body-small font-semibold mb-2">After:</p>
                    <p className="text-body-regular italic text-primary-gray">
                      "You know how most entrepreneurs are great at their product or service, but they really struggle to build systems because they don't always know how?
                    </p>
                    <p className="text-body-regular italic text-primary-gray mt-2">
                      I fix their systems so they can grow their businesses."
                    </p>
                  </div>

                  <p className="text-body-regular font-semibold text-center mt-4">
                    One gets a nod. The other gets: "Tell me more."
                  </p>
                </div>
              )}

              {/* CTA */}
              <motion.a
                href={problem.ctaLink}
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                → {problem.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
