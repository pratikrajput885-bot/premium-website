'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TestimonialProps {
  name: string
  role: string
  text: string
  rating?: number
  image?: string
  index?: number
}

export default function Testimonial({ name, role, text, rating = 5, image, index = 0 }: TestimonialProps) {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <motion.div 
      className="group glass p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-indigo-200 group-hover:text-indigo-300 transition-colors duration-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Stars */}
      <div className="flex items-center mb-4">
        {renderStars()}
      </div>
      
      {/* Testimonial Text */}
      <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed italic">
        "{text}"
      </blockquote>
      
      {/* Author Info */}
      <div className="flex items-center">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
          {name.charAt(0)}
        </div>
        
        {/* Name and Role */}
        <div>
          <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
            {name}
          </div>
          <div className="text-sm text-slate-600">
            {role}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
