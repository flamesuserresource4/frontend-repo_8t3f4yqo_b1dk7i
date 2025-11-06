import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, CreditCard, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-indigo-50 via-sky-50 to-white overflow-hidden">
      {/* Background Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast (does not block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-300 to-indigo-300 shadow-inner" />
            <span className="font-semibold text-slate-800">PastelPay</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-600">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#auth" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Sign in</a>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pb-24 pt-16 md:pt-24 lg:pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <span className="text-sm">Modern fintech infrastructure</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Soft, simple, secure payments for your SaaS
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700">
              Launch faster with a pastel-perfect experience. Cards, checkouts, and compliance handled — you focus on customers.
            </p>

            <div id="auth" className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Get started free
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/80 backdrop-blur text-slate-900 px-5 py-3 font-medium shadow ring-1 ring-slate-200 hover:bg-white"
              >
                View pricing
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur rounded-lg p-3 ring-1 ring-slate-200">
                <Shield className="h-5 w-5 text-emerald-500" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur rounded-lg p-3 ring-1 ring-slate-200">
                <CreditCard className="h-5 w-5 text-sky-500" />
                <span>Global cards & wallets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to control hero height */}
      <div className="relative" style={{ height: '65vh', minHeight: 520 }} />
    </section>
  );
}
