import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[560px] w-full">
        <Spline
          scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-50/40 via-white/50 to-white" />
      </div>

      <div className="container mx-auto px-6 -mt-40 relative z-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/60 p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b2b2b] tracking-tight">
                Make Your Child the Star of Their Own Story
              </h1>
              <p className="mt-4 text-[#5b5b5b] text-lg">
                Beautiful AI-personalized books & clothes crafted just for them.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#create"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition shadow-emerald-200"
                >
                  Create Now
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#2b2b2b] font-semibold px-6 py-3 border border-emerald-100 hover:bg-emerald-50 transition"
                >
                  See Samples
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <HeroCardGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroCardGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 p-4 border border-emerald-100 shadow-sm">
        <div className="aspect-[4/3] rounded-xl bg-white flex items-center justify-center">
          <span className="text-emerald-500 font-bold">A • B • C</span>
        </div>
        <p className="mt-3 text-sm text-[#5b5b5b]">My First Alphabet Book</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-rose-50 p-4 border border-amber-100 shadow-sm">
        <div className="aspect-[4/3] rounded-xl bg-white flex items-center justify-center">
          <span className="text-rose-500 font-bold">Story Time</span>
        </div>
        <p className="mt-3 text-sm text-[#5b5b5b]">Personalized Story Books</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 p-4 border border-sky-100 shadow-sm">
        <div className="aspect-[4/3] rounded-xl bg-white flex items-center justify-center">
          <span className="text-sky-500 font-bold">T-Shirts</span>
        </div>
        <p className="mt-3 text-sm text-[#5b5b5b]">Custom Name & Photo Tees</p>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-purple-50 p-4 border border-rose-100 shadow-sm">
        <div className="aspect-[4/3] rounded-xl bg-white flex items-center justify-center">
          <span className="text-purple-500 font-bold">Magic Inside</span>
        </div>
        <p className="mt-3 text-sm text-[#5b5b5b]">Made with Love & Safety</p>
      </div>
    </div>
  )
}
