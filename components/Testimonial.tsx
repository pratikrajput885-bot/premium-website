import React from 'react'

export default function Testimonial({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <div className="p-6 glass">
      <p className="text-slate-700">"{text}"</p>
      <div className="mt-4 text-sm text-slate-600">— {name}, {role}</div>
    </div>
  )
}
