import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-tealDeep"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        {subtitle && <p className="text-charcoal/80 mt-1">{subtitle}</p>}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
