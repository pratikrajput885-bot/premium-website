import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'

const services = [
  { 
    title: 'Web Design & Development', 
    desc: 'Premium websites that convert visitors into customers with modern design and optimal performance.',
    icon: '🎨',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First']
  },
  { 
    title: 'SEO & Content Strategy', 
    desc: 'Get found on Google with our proven SEO strategies and high-quality content marketing.',
    icon: '📈',
    features: ['Keyword Research', 'Content Creation', 'Link Building', 'Analytics']
  },
  { 
    title: 'Digital Marketing & Ads', 
    desc: 'Paid advertising campaigns that scale your business with measurable ROI.',
    icon: '🚀',
    features: ['Google Ads', 'Facebook Ads', 'Conversion Tracking', 'A/B Testing']
  },
]

const testimonials = [
  { 
    name: 'Ravi Kumar', 
    role: 'CEO, TechStart India', 
    text: 'Premium Agency transformed our online presence. Our website traffic increased by 300% within 3 months!',
    rating: 5,
    image: '/images/avatar-1.jpg'
  },
  { 
    name: 'Sana Sheikh', 
    role: 'Marketing Director, GrowthCo', 
    text: 'Professional team with exceptional results. Their SEO strategy helped us rank #1 for our key terms.',
    rating: 5,
    image: '/images/avatar-2.jpg'
  },
  { 
    name: 'Ishaan Patel', 
    role: 'Founder, Digital Solutions', 
    text: 'Highly recommended! They delivered a stunning website that perfectly represents our brand.',
    rating: 5,
    image: '/images/avatar-3.jpg'
  },
]

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio-1.jpg',
    description: 'Modern e-commerce solution with advanced features'
  },
  {
    title: 'Corporate Website',
    category: 'Web Design',
    image: '/images/portfolio-2.jpg',
    description: 'Professional corporate website with CMS integration'
  },
  {
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    image: '/images/portfolio-3.jpg',
    description: 'Successful multi-channel marketing campaign'
  },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape
            </p>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                title={service.title} 
                description={service.desc}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and success stories
            </p>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div key={item.title} className="group glass hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <div className="font-semibold">{item.category}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={testimonial.name} 
                name={testimonial.name} 
                role={testimonial.role} 
                text={testimonial.text}
                rating={testimonial.rating}
                image={testimonial.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together. Get your free consultation today.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
