import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="faq" className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-violet-500 via-purple-500 to-fuchsia-500" />
              <span className="font-semibold text-gray-900 text-lg">ProjectMart</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              A marketplace for complete, production-ready projects. Buy, ship, and grow faster.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <h4 className="font-medium text-gray-900">Marketplace</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#browse" className="hover:text-gray-900">Browse</a></li>
              <li><a href="#sell" className="hover:text-gray-900">Sell</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <h4 className="font-medium text-gray-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#faq" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Docs</a></li>
            </ul>
          </motion.div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ProjectMart Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
