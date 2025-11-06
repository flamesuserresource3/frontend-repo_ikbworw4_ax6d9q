import React from 'react'
import { Star } from 'lucide-react'

export default function ReviewsFAQFooter() {
  return (
    <>
      <Reviews />
      <FAQ />
      <Footer />
    </>
  )
}

function Reviews() {
  const items = [
    {
      name: 'Maya, 4',
      text: 'She squealed when she saw her name on every page! The pictures look like her too.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Ethan, 6',
      text: 'The alphabet book made bedtime so much fun. He calls it his magic ABCs.',
      img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Zara, 5',
      text: 'We loved the gentle colors and how safe and sweet everything feels.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50/40 to-white" id="reviews">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b2b2b] text-center">Loved by Little Readers</h2>
        <p className="mt-2 text-center text-[#5b5b5b]">Real smiles from real families</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((r) => (
            <div key={r.name} className="rounded-3xl bg-white border border-emerald-100 p-5 shadow-sm">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />)}
              </div>
              <p className="mt-2 text-sm text-[#2b2b2b]">“{r.text}”</p>
              <p className="mt-1 text-xs text-[#5b5b5b]">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'Is this safe for kids?',
      a: 'Absolutely. We use child-safe prompts and human review to ensure images are gentle, positive, and age appropriate.'
    },
    {
      q: 'How long does it take?',
      a: 'Most orders are generated in minutes and ship within a few days.'
    },
    {
      q: 'Can I preview before I buy?',
      a: 'Yes! You can see sample pages or mockups before checkout.'
    }
  ]

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b2b2b] text-center">FAQ & Our Safety Promise</h2>
        <p className="mt-2 text-center text-[#5b5b5b]">Warm, transparent, and parent-approved</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-[#2b2b2b]">{f.q}</h3>
              <p className="mt-2 text-sm text-[#5b5b5b]">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-emerald-50 via-sky-50 to-rose-50 border border-emerald-100 p-6 text-center">
          <p className="text-sm text-[#2b2b2b]"><span className="font-semibold">Safe for Kids:</span> No faces are shared publicly, data is encrypted, and every illustration is reviewed for kindness and inclusivity.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg aria-hidden="true" className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#ecfeff" d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
      </div>
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xl font-extrabold text-[#2b2b2b]">Zylo Kids</p>
            <p className="text-sm text-[#5b5b5b]">Where little hearts meet big imagination.</p>
          </div>
          <nav className="flex gap-6 text-sm text-[#5b5b5b]">
            <a href="#how" className="hover:text-emerald-600">How it works</a>
            <a href="#products" className="hover:text-emerald-600">Products</a>
            <a href="#reviews" className="hover:text-emerald-600">Reviews</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-[#9b9b9b]">© {new Date().getFullYear()} Zylo Kids. All rights reserved.</div>
      </div>
    </footer>
  )
}
