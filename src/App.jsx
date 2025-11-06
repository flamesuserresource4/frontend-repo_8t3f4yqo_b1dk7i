import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">PastelPay</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
            <a href="#blog" className="hover:text-emerald-600">Blog</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#auth" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50">Sign in</a>
            <a href="#pricing" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600">Start free</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto grid items-center justify-between gap-4 px-6 py-8 sm:flex">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-emerald-600">Privacy</a>
            <a href="#" className="hover:text-emerald-600">Terms</a>
            <a href="#" className="hover:text-emerald-600">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
