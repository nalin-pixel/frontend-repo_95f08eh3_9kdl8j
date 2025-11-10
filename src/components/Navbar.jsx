import { ShoppingBag, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 h-14 rounded-2xl border border-white/50 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between px-3 sm:px-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-violet-500 via-purple-500 to-fuchsia-500" />
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              ProjectMart
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#browse" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Browse</a>
            <a href="#sell" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Sell</a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200/80 hover:border-gray-300 text-gray-700 text-sm bg-white/70">
              <Search className="h-4 w-4" />
              Search
            </button>
            <button className="p-2 rounded-xl border border-gray-200/80 hover:border-gray-300 bg-white/70">
              <ShoppingBag className="h-5 w-5 text-gray-800" />
            </button>
            <button className="ml-1 px-3 py-2 rounded-xl bg-gray-900 text-white text-sm flex items-center gap-2 hover:bg-black shadow-sm">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
