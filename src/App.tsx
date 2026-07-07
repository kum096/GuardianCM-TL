import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Technology } from './sections/Technology';
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
        <Technology />
        <DemoResources />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;
