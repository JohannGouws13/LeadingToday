"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

interface ThreeFixesSectionProps {
  onDownloadClick: () => void;
}

export default function ThreeFixesSection({ onDownloadClick }: ThreeFixesSectionProps) {
  const fixes = [
    {
      number: "01",
      title: "FROM CONFUSION TO CLARITY",
      problem: "You lost R20k at that networking event because the answer to \"what do you do\" put them to sleep.",
      fix: "The Hook",
      examples: [
        {
          before: '"I\'m in IT."',
          after: '"Label the Pain: Have you noticed how many entrepreneurs build a good business only to get trapped by it? Customers don\'t understand what they do, and their systems are failing them. When a customer is confused, we lose the sale.\n\n\nShow Freedom: Imagine a day where your customers know exactly what you do and how you solve their problem. It\'s easy to do business with you: Click. Pay. Done. Your message is clear and your systems run the business. You spend time with your family instead of sending out quotes manually.\n\n\nSell the Map: We help you clarify your message using The Hook Framework, then we audit your systems and build the ones that run your business. A business that scales while you sleep.\n\n\nReveal the Cost: Or continue doing things the same way—sending quotes manually, losing sales to confused customers, and working weekends while other entrepreneurs take that family trip. The question isn\'t whether you need to fix this. It\'s how much longer you can afford not to."',
        },
      ],
      cta: "Download The Hook",
      ctaAction: "download",
    },
    {
      number: "02",
      title: "FROM CHAOS TO AUTOMATION",
      problem: "Customers pay you through 8 manual steps. Too many steps = customers ghosting us.",
      fix: "Automate your business. 2 clicks. Click. Pay. Done. Your business continues while you sleep.",
      highlight: "Watch The 48-Hour Automation",
      cta: "Watch The 48-Hour Automation",
      ctaAction: "calendly",
    },
    {
      number: "03",
      title: "FROM BURNOUT TO FREEDOM",
      problem: "Saturday afternoon. Kid's playing outside. You're updating spreadsheets. Again.",
      fix: "Your systems are in place. Your business is growing itself. You get to spend time with those you love.",
      cta: "Book A Coffee—Let's Build Your Freedom",
      ctaAction: "calendly",
    },
  ];

  const handleCtaClick = (action: string) => {
    if (action === "download") {
      onDownloadClick();
    } else if (action === "calendly") {
      window.open("https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business", "_blank");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The LeadingToday Entrepreneurs Playbook
          </h2>
        </motion.div>

        <div className="space-y-16">
          {fixes.map((fix, idx) => (
            <div key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Large Number Background */}
                <div className="absolute top-0 right-0 text-[150px] md:text-[200px] font-bold text-gray-100 leading-none select-none">
                  {fix.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-2xl rounded-xl mb-4">
                    {fix.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {fix.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-red-600 mb-3">The Problem:</h4>
                    <p className="text-lg text-gray-700">{fix.problem}</p>
                  </div>

                  {/* The Fix */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-emerald-600 mb-3 flex items-center gap-2">
                      <Zap className="w-6 h-6" />
                      The Fix:
                    </h4>
                    <p className="text-lg text-gray-700 font-semibold">{fix.fix}</p>
                  </div>

                  {/* Before/After Examples (only for fix 01) */}
                  {fix.examples && (
                    <div className="space-y-6 mb-8">
                      {fix.examples.map((example, exampleIdx) => (
                        <div key={exampleIdx} className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
                            <h5 className="font-bold text-gray-900 mb-2">Before:</h5>
                            <p className="text-gray-700 italic">{example.before}</p>
                          </div>
                          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                            <h5 className="font-bold text-blue-900 mb-2">After:</h5>
                            <p className="text-gray-700 italic">{example.after}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => handleCtaClick(fix.ctaAction)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                  >
                    {fix.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {/* Add Image 2 after first fix */}
              {idx === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-16 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/clarity-breakthrough.png"
                    alt="LeadingToday Entrepreneurs Success Story"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}

              {/* Add Image 5 after second fix */}
              {idx === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-16 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/simple-systems.png"
                    alt="LeadingToday Automation Success"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}

              {/* Add Freedom Image after third fix */}
              {idx === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-16 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/Freedom%20Image.png"
                    alt="Freedom from burnout - spending time with family"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                    unoptimized
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
