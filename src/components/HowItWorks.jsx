import React from 'react'
import { Upload, User, Shirt } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Child Photo',
      desc: 'Add a cute photo so our AI can personalize illustrations.'
    },
    {
      icon: User,
      title: 'Enter Name & Age',
      desc: 'Tell us their name and birthday for a truly personal touch.'
    },
    {
      icon: Shirt,
      title: 'Get Magic Made',
      desc: 'Generate a unique book or tee they will treasure forever.'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50/40" id="how">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b2b2b] text-center">
          How It Works
        </h2>
        <p className="mt-2 text-center text-[#5b5b5b]">Three simple steps to create joy.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <Icon className="text-emerald-500" />
              </div>
              <h3 className="mt-4 font-bold text-lg text-[#2b2b2b]">{title}</h3>
              <p className="mt-2 text-sm text-[#5b5b5b]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
