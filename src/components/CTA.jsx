import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="sell" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gray-900 text-white p-10 sm:p-14 overflow-hidden"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Monetize your code in days, not months
              </h3>
              <p className="mt-4 text-gray-300">
                List your project, set a price, and reach buyers who want production-ready code.
                We handle licenses, payouts, and delivery — you focus on building.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100"
              >
                Create a listing
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#pricing"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10"
              >
                See pricing
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
