import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50"></div>
              <Sparkles className="relative w-8 h-8 text-purple-400" />
            </div>
            <span className="text-2xl text-white">
              Prompter<span className="text-purple-400">KMS</span>
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#converter" className="text-gray-300 hover:text-purple-400 transition-colors">
              Converter
            </a>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
