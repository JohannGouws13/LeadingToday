"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const leadMagnetSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  businessType: z.string().optional(),
});

type LeadMagnetFormData = z.infer<typeof leadMagnetSchema>;

export default function LeadMagnetSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadMagnetFormData>({
    resolver: zodResolver(leadMagnetSchema),
  });

  const onSubmit = async (data: LeadMagnetFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);

    // TODO: Replace with actual API call to ConvertKit/Mailchimp
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify(data) });

    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="clarity-checklist" className="section-spacing bg-bg-lightGray">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-headline mb-4">
              Download: The HOOK Framework
            </h2>
            <p className="text-body-large text-primary-gray mb-6">
              Four lines that answer: What problem do you solve? Who for? What result? What's next?
            </p>
            <p className="text-body-regular font-bold text-primary-dark mb-8">
              Takes 7 seconds to say. Changes everything.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent-green/10 border border-accent-green p-6 rounded-lg"
              >
                <p className="text-lg font-semibold text-accent-green mb-2">
                  Check your email!
                </p>
                <p className="text-body-regular text-primary-gray">
                  The HOOK Framework is on its way. If you don't see it in a few minutes, check your spam folder.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-body-small font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-small font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-body-small font-semibold mb-2">
                    Business Type (Optional)
                  </label>
                  <select
                    {...register("businessType")}
                    id="businessType"
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
                  >
                    <option value="">Select...</option>
                    <option value="coaching">Coaching / Consulting</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="professional">Professional Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Download The HOOK Framework Now"}
                </button>

                <p className="text-body-small text-primary-gray italic text-center">
                  We respect your inbox. No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-dark rounded-lg p-12 shadow-xl flex items-center justify-center min-h-[500px] border-8 border-primary-dark"
          >
            <div className="text-center">
              <div className="space-y-6">
                <div className="text-left space-y-3">
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                </div>
                <p className="text-white/60 text-sm mt-6">
                  The HOOK Framework
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
