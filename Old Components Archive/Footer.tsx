"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">LeadingToday</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping South African entrepreneurs fix unclear messaging, broken systems, and admin chaos—so customers can actually buy from you.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-accent-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-accent-orange transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#clarity-checklist"
                  className="text-gray-400 hover:text-accent-orange transition-colors"
                >
                  Clarity Checklist
                </a>
              </li>
              <li>
                <a
                  href="#coffee-booking"
                  className="text-gray-400 hover:text-accent-orange transition-colors"
                >
                  Book a Coffee
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-orange transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </motion.a>
            </div>

            <p className="text-gray-400 text-sm">
              Newsletter signup coming soon.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} LeadingToday. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-accent-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-accent-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
