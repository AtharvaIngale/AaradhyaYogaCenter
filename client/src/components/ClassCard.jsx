import { motion } from 'framer-motion'

export default function ClassCard({ data }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-5 shadow-soft border border-sage/20"
    >
      <h3 className="font-display text-2xl">{data.name}</h3>
      <p className="text-sm text-charcoal/70 mt-1">{data.level} • {data.duration} mins</p>
      <div className="mt-3 text-sm">
        <span className="font-medium">Days: </span>{data.days.join(", ")}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">₹{data.price}</span>
        <a href="#contact" className="text-tealDeep hover:underline">Enroll</a>
      </div>
    </motion.div>
  )
}
