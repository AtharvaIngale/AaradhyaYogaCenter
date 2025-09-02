import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-display text-2xl text-tealDeep">Aaradhya Yoga Center</a>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#classes" className="hover:text-tealDeep">Classes</a>
          <a href="#about" className="hover:text-tealDeep">About</a>
          <a href="#testimonials" className="hover:text-tealDeep">Stories</a>
          <a href="#contact" className="hover:text-tealDeep">Contact</a>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-xl bg-tealDeep text-white text-sm shadow-soft"
        >
          Book a Trial
        </motion.a>
      </div>
    </nav>
  )
}
