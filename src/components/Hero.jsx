import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm mb-5">
              <Star className="h-4 w-4" />
              New: Sell complete projects in minutes
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Discover and sell production-ready projects
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              A marketplace where makers list apps, templates, and components. Buyers get source code, licenses, and support in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#sell" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black">
                <Rocket className="h-5 w-5" /> Start selling
              </a>
              <a href="#browse" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:border-gray-400">Browse projects</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} alt="avatar" src={`https://i.pravatar.cc/40?img=${i+1}`} className="h-8 w-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <p className="text-sm">Trusted by 5k+ developers</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop" alt="product showcase" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-60">
              <p className="text-sm font-medium text-gray-900">Next.js SaaS Starter</p>
              <p className="text-xs text-gray-500">By CodeForge Studio</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-indigo-600 font-semibold">$129</span>
                <button className="px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
