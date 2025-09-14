import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'

const services = [
  { title: 'Web Design', desc: 'Premium websites that convert.' },
  { title: 'SEO & Content', desc: 'Get found on Google.' },
  { title: 'Digital Marketing', desc: 'Paid ads that scale.' },
]

export default function Home() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <Hero />
      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.desc} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial name="Ravi" role="CEO" text="Amazing results!" />
          <Testimonial name="Sana" role="CMO" text="Professional team." />
          <Testimonial name="Ishaan" role="Founder" text="Highly recommended." />
        </div>
      </div>
    </section>
  )
}
