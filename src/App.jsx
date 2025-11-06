import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      <Hero />
      <Pricing />
      <Blog />
      <Contact />
      <footer className="py-10 border-t border-slate-200 bg-white text-center text-slate-600">
        <p>© {new Date().getFullYear()} PastelPay — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
