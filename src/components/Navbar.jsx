import { ShoppingBag, User, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="mt-4 h-14 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between px-3 sm:px-4"
        >
          <a href="#" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              className="h-8 w-8 rounded-xl bg-gradient-to-tr from-violet-500 via-purple-500 to-fuchsia-500"
            />
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              ProjectMart
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '#browse', label: 'Browse' },
              { href: '#sell', label: 'Sell' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#faq', label: 'FAQ' },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -1 }}
                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.button whileTap={{ scale: 0.98 }} className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200/80 hover:border-gray-300 text-gray-700 text-sm bg-white/70">
              <Search className="h-4 w-4" />
              Search
            </motion.button>
            <motion.button whileTap={{ scale: 0.96 }} className="p-2 rounded-xl border border-gray-200/80 hover:border-gray-300 bg-white/70">
              <ShoppingBag className="h-5 w-5 text-gray-800" />
            </motion.button>
            <motion.button whileTap={{ scale: 0.96 }} className="ml-1 px-3 py-2 rounded-xl bg-gray-900 text-white text-sm flex items-center gap-2 hover:bg-black shadow-sm">
              <User className="h-4 w-4" />
              Sign in
            </motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
