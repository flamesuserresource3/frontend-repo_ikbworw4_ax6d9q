import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import ReviewsFAQFooter from './components/ReviewsFAQFooter'

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-emerald-50/30 to-sky-50/40 text-[#2b2b2b]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400" />
            <span className="text-xl font-extrabold tracking-tight">Zylo Kids</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-[#5b5b5b]">
            <a href="#how" className="hover:text-emerald-600">How it works</a>
            <a href="#products" className="hover:text-emerald-600">Products</a>
            <a href="#reviews" className="hover:text-emerald-600">Reviews</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          </nav>
          <a href="#create" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-semibold px-4 py-2 hover:bg-emerald-600 transition">Create Now</a>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <ReviewsFAQFooter />
      </main>
    </div>
  )
}
