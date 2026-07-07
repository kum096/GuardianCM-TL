import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Technology } from './sections/Technology';
import { DemoResources } from './sections/DemoResources';
import { Vision } from './sections/Vision';
import { Footer } from './sections/Footer';

/**
 * GuardianCM App Component
 *
 * Root-cause analysis for white screen:
 * 1. Potential mounting issue resolved in main.tsx.
 * 2. CSS transparency/z-index issues addressed in index.css.
 * 3. Component runtime stability improved by ensuring proper imports.
 */
function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading GuardianCM...</div>}>
      <div className="relative w-full min-h-screen bg-slate-50">
        <Navbar />
        <main className="relative overflow-hidden">
          <Hero />
          <Features />
          <Technology />
          <DemoResources />
          <Vision />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
