import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 bg-gradient-to-b from-peach/30 to-cream">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
            Find Your Balance at <span className="text-tealDeep">Aaradhya</span>
          </h1>
          <p className="mt-4 text-lg text-charcoal/80">
            Gentle flows, mindful breath, and a community that supports your wellbeing.
          </p>
          <div className="mt-6 flex gap-3">
            <motion.a href="#classes" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl bg-tealDeep text-white shadow-soft">Explore Classes</motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl bg-white border shadow-soft">Contact Us</motion.a>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1200&auto=format&fit=crop"
          alt="Yoga meditation"
          className="rounded-3xl shadow-soft"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {['Certified Instructors', 'Small Batches', 'Holistic Approach', 'Calm Studio'].map((item) => (
          <motion.div
            key={item}
            className="bg-white rounded-2xl p-4 shadow-soft text-center"
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
