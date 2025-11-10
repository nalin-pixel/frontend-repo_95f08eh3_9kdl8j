export default function CTA() {
  return (
    <section id="sell" className="relative py-16">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-indigo-50 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-900 text-white p-8 sm:p-12 overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Monetize your code in days, not months</h3>
              <p className="mt-3 text-gray-300">List your project, set a price, and reach buyers who want production-ready code. We handle licenses, payouts, and delivery.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100">Create a listing</a>
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
