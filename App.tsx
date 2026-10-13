import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromptConverter } from './components/PromptConverter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <PromptConverter />
      <Footer />
    </div>
  );
}
