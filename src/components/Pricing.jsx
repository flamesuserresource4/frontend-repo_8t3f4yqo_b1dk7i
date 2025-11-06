import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    highlight: 'For testing and hobby projects',
    features: ['100 transactions/mo', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$29',
    cadence: 'per month',
    highlight: 'Everything to scale your SaaS',
    featured: true,
    features: [
      '10k transactions/mo',
      'Advanced analytics',
      'Priority support',
      'Custom checkout styles',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    highlight: 'For large teams and platforms',
    features: ['Unlimited volume', 'Dedicated CSM', 'SLA & SSO'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when you grow. No hidden fees.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 ring-1 ring-slate-200 bg-white/70 backdrop-blur shadow-sm ${tier.featured ? 'md:scale-105 md:-translate-y-2' : ''}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                {tier.featured && (
                  <span className="text-xs rounded-full bg-indigo-100 text-indigo-700 px-2 py-1">Most popular</span>
                )}
              </div>
              <p className="mt-2 text-slate-600">{tier.highlight}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                {tier.cadence && <span className="text-slate-500"> / {tier.cadence}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#contact" className={`w-full inline-flex justify-center items-center rounded-lg px-4 py-2 font-medium transition-colors ${tier.featured ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'}`}>
                  Choose {tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
