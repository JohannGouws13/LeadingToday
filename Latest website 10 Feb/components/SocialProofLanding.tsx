"use client";

import { motion } from "framer-motion";
import { Users, Clock, TrendingUp, Star, Quote } from "lucide-react";

interface SocialProofLandingProps {
  onDownloadClick: () => void;
}

export default function SocialProofLanding({ onDownloadClick }: SocialProofLandingProps) {
  const testimonials = [
    {
      quote: "I used to explain my business in 3 minutes. Now 10 seconds—and I close 40% more deals.",
      author: "Sarah M.",
      location: "Cape Town",
    },
    {
      quote: "Haven't manually sent an invoice in 6 months. I actually took a holiday.",
      author: "David K.",
      location: "Johannesburg",
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "South African business owners are using systems built by LeadingToday and it's partners",
    },
    {
      icon: Clock,
      number: "15 hours",
      label: "saved per week on average",
    },
    {
      icon: TrendingUp,
      number: "43%",
      label: "increase in business visibility and sales",
    },
  ];

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
            WHAT HAPPENS WHEN YOU FIX THE MESSAGE
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-indigo-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            The Numbers:
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-5xl font-bold mb-2 text-blue-600">
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-gray-700 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onDownloadClick}
            className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Do A Systems Audit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
