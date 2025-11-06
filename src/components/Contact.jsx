import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      // This would normally call your backend; for now we simulate success
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-sm">
            <Mail className="h-4 w-4" />
            Contact
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Let’s build something delightful</h2>
          <p className="mt-3 text-slate-600">Have questions about pricing, features, or enterprise? Send us a message and we’ll get back within one business day.</p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Friendly, human support</li>
            <li>• 99.99% uptime SLA on Scale plan</li>
            <li>• EU & US data residency options</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur rounded-2xl p-6 ring-1 ring-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border-slate-200 focus:border-indigo-400 focus:ring-indigo-400"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border-slate-200 focus:border-indigo-400 focus:ring-indigo-400"
                placeholder="jane@company.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-slate-600">Message</label>
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border-slate-200 focus:border-indigo-400 focus:ring-indigo-400"
                placeholder="Tell us a bit about your project..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-500 disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : (
              <>
                Send message
                <Send className="h-5 w-5" />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-3 text-emerald-700">Thanks! We’ll be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-rose-700">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
