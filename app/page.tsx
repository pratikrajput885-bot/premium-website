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
