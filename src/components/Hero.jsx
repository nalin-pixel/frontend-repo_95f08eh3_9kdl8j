import { Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Soft lilac backdrop with subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Premium copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm mb-6 ring-1 ring-purple-200/60"
            >
              <Star className="h-4 w-4" />
              Curated & quality-checked listings
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
            >
              Acquire premium, production-ready projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-5 text-lg text-gray-600 max-w-xl"
            >
              A refined marketplace for makers and teams to buy and sell polished codebases. Transparent licenses, instant delivery, and human support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#sell"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-black shadow-sm"
              >
                <Rocket className="h-5 w-5" /> Start selling
              </a>
              <a
                href="#browse"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-300/80 text-gray-800 font-medium backdrop-blur-sm hover:border-gray-400"
              >
                Explore projects
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex items-center gap-6 text-gray-600"
            >
              <div className="flex -space-x-2">
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    alt="avatar"
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    className="h-8 w-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm">Trusted by 5k+ developers and studios</p>
            </motion.div>
          </div>

          {/* Right: Spline 3D scene in a premium glass container */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative h-[420px] sm:h-[520px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-white/10 border border-white/40 shadow-[0_10px_40px_-10px_rgba(31,38,135,0.25)] backdrop-blur-xl overflow-hidden">
              <Spline
                scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Decorative light gradients that don't block interaction */}
              <div className="pointer-events-none absolute -left-10 -bottom-16 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-5 w-72"
            >
              <p className="text-sm font-semibold text-gray-900">The Fragrance of Creativity</p>
              <p className="text-xs text-gray-600 mt-1">Minimalist product display experience</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-purple-700 font-semibold">Featured</span>
                <button className="px-3 py-1.5 text-sm rounded-md bg-gray-900 text-white hover:bg-black">Preview</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
