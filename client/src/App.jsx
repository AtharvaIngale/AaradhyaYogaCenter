import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import ClassCard from './components/ClassCard.jsx'
import TestimonialCarousel from './components/TestimonialCarousel.jsx'
import Footer from './components/Footer.jsx'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'

export default function App() {
  const [classes, setClasses] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get(`${API_BASE}/api/classes`).then(res => setClasses(res.data)).catch(() => {})
  }, [])

  const submitInquiry = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${API_BASE}/api/inquiries`, { name, email, message })
      alert("Thank you! We'll get back to you shortly.")
      setName(''); setEmail(''); setMessage('')
    } catch (e) {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <Section id="classes" title="Our Classes" subtitle="Choose the style that fits your flow.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map(c => <ClassCard key={c.id} data={c} />)}
        </div>
      </Section>

      <Section id="about" title="About Aaradhya" subtitle="Traditional wisdom meets modern wellbeing.">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.img
            src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop"
            alt="Yoga pose"
            className="rounded-2xl shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="leading-7">
              At Aaradhya Yoga Center, we believe yoga is for every body. Our expert instructors guide
              you through mindful movement, breathwork, and meditation for a balanced, joyful life.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Certified, experienced teachers</li>
              <li>Personalized attention in small groups</li>
              <li>Peaceful studio ambiance and community events</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="testimonials" title="What Students Say" subtitle="Real stories from our community.">
        <TestimonialCarousel />
      </Section>

      <Section id="contact" title="Get in Touch" subtitle="We’d love to hear from you.">
        <form onSubmit={submitInquiry} className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-soft space-y-4">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" className="w-full border rounded-xl p-3 outline-tealDeep/40 focus:ring-2 focus:ring-tealDeep" required />
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded-xl p-3 outline-tealDeep/40 focus:ring-2 focus:ring-tealDeep" required />
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" rows="4" className="w-full border rounded-xl p-3 outline-tealDeep/40 focus:ring-2 focus:ring-tealDeep" required></textarea>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-tealDeep text-white rounded-xl py-3 font-medium"
          >
            Send Message
          </motion.button>
        </form>
      </Section>

      <Footer />
    </div>
  )
}
