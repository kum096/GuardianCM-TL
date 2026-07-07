// GuardianCM Root Application
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { DemoResources } from './sections/DemoResources';
import { Vision } from './sections/Vision';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Vision />
        <DemoResources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
