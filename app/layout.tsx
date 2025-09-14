import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Premium Agency - Web Design & Digital Marketing',
    template: '%s | Premium Agency'
  },
  description: 'Premium marketing & web solutions. We design beautiful, fast, and SEO-friendly websites for businesses that want growth.',
  keywords: ['web design', 'digital marketing', 'SEO', 'premium websites'],
  authors: [{ name: 'Premium Agency' }],
  creator: 'Premium Agency',
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.vercel.app',
    title: 'Premium Agency - Web Design & Digital Marketing',
    description: 'Premium marketing & web solutions. We design beautiful, fast, and SEO-friendly websites for businesses that want growth.',
    siteName: 'Premium Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Agency - Web Design & Digital Marketing',
    description: 'Premium marketing & web solutions. We design beautiful, fast, and SEO-friendly websites for businesses that want growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
