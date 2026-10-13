import { motion } from 'motion/react';
import { Wand2, Zap, Target } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-300">✨ AI-Powered Prompt Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Transform Your Ideas Into
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Prompts
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Convert any text into well-structured, optimized prompts with AI assistance. 
            Enhance your creativity and get better results from AI models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-white">Smart Conversion</h3>
            <p className="text-gray-400">
              Transform simple text into professionally structured prompts instantly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-white">AI Enhancement</h3>
            <p className="text-gray-400">
              Upgrade your prompts with AI-powered improvements and optimizations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-2 text-white">Better Results</h3>
            <p className="text-gray-400">
              Get more accurate and contextual responses from AI models
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
