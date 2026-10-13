import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Copy, Check, Loader2 } from 'lucide-react';

export function PromptConverter() {
  const [inputText, setInputText] = useState('');
  const [convertedPrompt, setConvertedPrompt] = useState('');
  const [aiEnhancedPrompt, setAiEnhancedPrompt] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [copiedBasic, setCopiedBasic] = useState(false);
  const [copiedAI, setCopiedAI] = useState(false);

  const convertToPrompt = () => {
    if (!inputText.trim()) return;
    
    setIsConverting(true);
    setAiEnhancedPrompt('');
    
    // Simulate conversion process
    setTimeout(() => {
      const structured = `You are tasked with the following objective:

${inputText}

Please provide a comprehensive response that:
- Addresses all aspects of the request
- Uses clear and structured formatting
- Includes relevant details and examples where appropriate
- Maintains accuracy and helpfulness

Additional Context:
- Focus on practical and actionable information
- Consider edge cases and potential variations
- Provide explanations for your reasoning when relevant`;
      
      setConvertedPrompt(structured);
      setIsConverting(false);
    }, 1000);
  };

  const enhanceWithAI = () => {
    if (!convertedPrompt) return;
    
    setIsEnhancing(true);
    
    // Simulate AI enhancement
    setTimeout(() => {
      const enhanced = `# ADVANCED PROMPT STRUCTURE

## Primary Objective
${inputText}

## Execution Parameters
- **Response Format**: Structured and detailed
- **Depth Level**: Comprehensive analysis
- **Style**: Professional and clear
- **Target Audience**: General to advanced users

## Core Requirements
1. Provide a thorough and well-researched response
2. Break down complex concepts into digestible parts
3. Include practical examples and use cases
4. Address potential questions or concerns proactively

## Quality Standards
- Accuracy: Ensure all information is correct and up-to-date
- Clarity: Use clear language and logical flow
- Completeness: Cover all relevant aspects of the topic
- Actionability: Provide concrete steps or recommendations when applicable

## Additional Guidance
- Consider multiple perspectives and approaches
- Highlight best practices and common pitfalls
- Use formatting (bullets, numbers, headers) for readability
- Include relevant context and background information

## Output Expectations
Deliver a response that is informative, practical, and tailored to the user's needs while maintaining high quality standards.`;
      
      setAiEnhancedPrompt(enhanced);
      setIsEnhancing(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, type: 'basic' | 'ai') => {
    navigator.clipboard.writeText(text);
    if (type === 'basic') {
      setCopiedBasic(true);
      setTimeout(() => setCopiedBasic(false), 2000);
    } else {
      setCopiedAI(true);
      setTimeout(() => setCopiedAI(false), 2000);
    }
  };

  return (
    <section id="converter" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
            Start Converting
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Enter your text below and watch it transform into a perfect prompt
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <label className="block mb-3 text-lg text-purple-300">
                  Your Input Text
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter any text you want to convert into a structured prompt..."
                  className="w-full h-64 bg-slate-900/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                />
                <button
                  onClick={convertToPrompt}
                  disabled={!inputText.trim() || isConverting}
                  className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isConverting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    <>
                      Convert to Prompt
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Basic Conversion Result */}
              <AnimatePresence>
                {convertedPrompt && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-lg text-green-400">
                        Structured Prompt
                      </label>
                      <button
                        onClick={() => copyToClipboard(convertedPrompt, 'basic')}
                        className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                      >
                        {copiedBasic ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <div className="bg-slate-900/50 border border-green-500/20 rounded-xl px-4 py-3 h-48 overflow-y-auto text-gray-300 whitespace-pre-wrap">
                      {convertedPrompt}
                    </div>
                    <button
                      onClick={enhanceWithAI}
                      disabled={isEnhancing}
                      className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white hover:shadow-lg hover:shadow-green-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isEnhancing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enhancing with AI...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Enhance with AI
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* AI Enhanced Result */}
              <AnimatePresence>
                {aiEnhancedPrompt && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-lg shadow-purple-500/20"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-lg text-purple-400 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        AI Enhanced Prompt
                      </label>
                      <button
                        onClick={() => copyToClipboard(aiEnhancedPrompt, 'ai')}
                        className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                      >
                        {copiedAI ? (
                          <Check className="w-5 h-5 text-purple-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl px-4 py-3 h-80 overflow-y-auto text-gray-300 whitespace-pre-wrap">
                      {aiEnhancedPrompt}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
