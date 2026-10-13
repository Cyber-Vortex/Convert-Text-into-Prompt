import { Sparkles, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 mt-20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-xl text-white">
                Prompter<span className="text-purple-400">KMS</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transform your ideas into perfect prompts with AI-powered assistance. 
              Enhance your creativity and get better results.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#converter" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Converter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>© 2025 PrompterKMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
