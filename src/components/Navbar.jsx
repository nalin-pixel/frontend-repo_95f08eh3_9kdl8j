import { ShoppingBag, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500" />
            <span className="font-semibold text-gray-900 text-lg">ProjectMart</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#browse" className="text-sm text-gray-700 hover:text-gray-900">Browse</a>
            <a href="#sell" className="text-sm text-gray-700 hover:text-gray-900">Sell</a>
            <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-sm text-gray-700 hover:text-gray-900">FAQ</a>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700 text-sm">
              <Search className="h-4 w-4" />
              Search
            </button>
            <button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300">
              <ShoppingBag className="h-5 w-5 text-gray-800" />
            </button>
            <button className="ml-1 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm flex items-center gap-2 hover:bg-black">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
