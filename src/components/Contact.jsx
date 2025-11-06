import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-rose-50/40 via-sky-50/40 to-transparent" />
      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-xl">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact us</h2>
            <p className="mt-2 text-slate-600">We usually respond within one business day.</p>
          </div>
          <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow">
            {sent && (
              <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700 ring-1 ring-emerald-200">
                Message sent! We’ll get back soon.
              </div>
            )}
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>
            <textarea
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-600 transition"
            >
              <Mail className="h-5 w-5" /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
