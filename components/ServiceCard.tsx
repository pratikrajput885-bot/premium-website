import React from 'react'

export default function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="glass p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
      <div className="mt-4">
        <a href="#contact" className="text-indigo-600 font-medium">Start Project →</a>
      </div>
    </div>
  )
}
