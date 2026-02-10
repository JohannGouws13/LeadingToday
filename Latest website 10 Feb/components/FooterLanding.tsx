"use client";

import { motion } from "framer-motion";
import { Linkedin, Youtube } from "lucide-react";

export default function FooterLanding() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">LeadingToday</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fixing unclear messaging, broken systems, and admin chaos for South African entrepreneurs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Pitch Framework
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/johanngouws13/the-call-that-builds-your-dream-business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Book Coffee
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} LeadingToday. Built with systems that actually work.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
