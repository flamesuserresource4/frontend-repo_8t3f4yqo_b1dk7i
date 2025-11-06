import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Designing payments with pastel minimalism',
    excerpt: 'How soft color systems reduce cognitive load and improve trust in fintech UX.',
  },
  {
    id: 2,
    title: 'From MVP to scale: billing architecture that lasts',
    excerpt: 'A practical guide for SaaS teams designing pricing and subscriptions.',
  },
  {
    id: 3,
    title: 'Security, but friendly',
    excerpt: 'Balancing bank‑grade security with a delightful onboarding experience.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">From the blog</h2>
          <p className="mt-3 text-slate-600">Insights on product, design, and growth.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="group rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br from-sky-50 to-indigo-50">
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{post.title}</h3>
              <p className="mt-2 text-slate-700">{post.excerpt}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-indigo-700 font-medium">
                Read more
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
