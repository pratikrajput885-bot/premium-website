import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="text-lg font-semibold">Premium.</div>
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Premium Agency</div>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-slate-600">Made with ♥ · Deploy on Vercel</div>
      </div>
    </footer>
  )
}
