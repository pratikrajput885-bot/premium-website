import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-sm bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Premium<span className="text-indigo-600">.</span></div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <a href="#pricing" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Get Quote</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="open menu" className="px-3 py-2 bg-slate-100 rounded-lg">Menu</button>
        </div>
      </div>
    </header>
  )
}
