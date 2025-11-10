import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Fullstack SaaS Boilerplate',
    price: 149,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    tags: ['Next.js', 'Stripe', 'Auth'],
  },
  {
    id: 2,
    title: 'E-commerce UI Kit',
    price: 79,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Landing Page Pack',
    price: 59,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tags: ['Framer', 'Motion'],
  },
  {
    id: 4,
    title: 'Mobile App Starter',
    price: 99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Expo', 'React Native'],
  },
];

export default function FeaturedGrid() {
  return (
    <section id="browse" className="py-20 bg-gradient-to-b from-white to-violet-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Featured projects</h2>
          <a href="#" className="text-purple-700 hover:text-purple-800 text-sm font-medium">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200/70 hover:border-gray-300 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-gray-900 line-clamp-2">{item.title}</h3>
                  <span className="text-purple-700 font-semibold">${item.price}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500 inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" /> {item.rating}
                  </span>
                  <motion.button whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300 text-sm">
                    <ShoppingCart className="h-4 w-4" />
                    Buy
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
