import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: "Riya S.", text: "The classes are calming yet energizing. I sleep better and feel stronger!" },
  { name: "Amit K.", text: "Instructors are patient and skilled. The vibe is so positive." },
  { name: "Neha P.", text: "I love the small batches and personal guidance. Highly recommend!" }
]

export default function TestimonialCarousel() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((i) => (i + 1) % items.length), 3500)
    return () => clearInterval(id)
  }, [])

  const item = items[i]

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-soft text-center"
      >
        <p className="text-lg">“{item.text}”</p>
        <div className="mt-3 text-sm text-charcoal/70">— {item.name}</div>
      </motion.div>
      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`h-2 w-2 rounded-full ${i===idx?'bg-tealDeep':'bg-sage/50'}`}></button>
        ))}
      </div>
    </div>
  )
}
