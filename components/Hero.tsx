import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold leading-snug">
          Premium websites that <span className="text-indigo-600">convert</span>
        </motion.h1>
        <p className="mt-6 text-slate-600">We design beautiful, fast, and SEO-friendly websites for businesses that want growth.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow">Get a Quote</a>
          <a href="#portfolio" className="px-6 py-3 border border-slate-200 rounded-lg">Our Work</a>
        </div>
      </div>
    </section>
  )
}
