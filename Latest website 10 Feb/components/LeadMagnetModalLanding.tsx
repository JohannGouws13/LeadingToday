"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Download } from "lucide-react";
import { useState } from "react";

interface LeadMagnetModalLandingProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadMagnetModalLanding({ isOpen, onClose }: LeadMagnetModalLandingProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);

    // Reset form after 5 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", businessType: "" });
      onClose();
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="bg-blue-600 p-6 rounded-t-2xl relative">
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-3 mb-2">
                      <Download className="w-8 h-8 text-white" />
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Get Your Free Framework
                      </h2>
                    </div>
                    <p className="text-white/90">
                      The 7-Second Pitch That Closes Deals
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Business Type Field */}
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-bold text-gray-900 mb-2">
                        Business Type <span className="text-gray-500 text-xs">(Optional)</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white"
                      >
                        <option value="">Select your business type</option>
                        <option value="coach">Coach</option>
                        <option value="consultant">Consultant</option>
                        <option value="sme-owner">SME Owner</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="agency">Agency Owner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
                    >
                      Send Me The 7-Second Pitch Framework
                    </button>

                    {/* Privacy Note */}
                    <p className="text-sm text-gray-600 text-center">
                      Your privacy matters. We'll never spam you.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Check Your Email!
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">
                    The framework is on its way.
                  </p>
                  <p className="text-gray-600">
                    Don't see it? Check spam.
                  </p>

                  <button
                    onClick={onClose}
                    className="mt-8 px-6 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
