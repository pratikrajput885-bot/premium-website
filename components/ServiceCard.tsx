'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  features?: string[]
  index?: number
}

export default function ServiceCard({ title, description, icon, features, index = 0 }: ServiceCardProps) {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const handleContactClick = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div 
      className="group glass p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-600">
                  <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* CTA Button */}
        <button 
          onClick={handleContactClick}
          className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 group-hover:translate-x-1 transition-all duration-300"
        >
          Start Project
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    </motion.div>
  )
}
