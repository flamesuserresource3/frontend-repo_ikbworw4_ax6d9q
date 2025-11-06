import React from 'react'

export default function Products() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2b2b2b] text-center">Our Favorites</h2>
        <p className="mt-2 text-center text-[#5b5b5b]">Whimsical picks from Zylo Kids</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card
            title="My First Alphabet Book"
            subtitle="Personalized with name, photo, age & interests"
            badge="Best Seller"
            gradient="from-emerald-50 to-sky-50"
          >
            <div className="aspect-[4/3] rounded-xl bg-white grid place-items-center">
              <span className="text-2xl font-bold text-emerald-500">A to Z</span>
            </div>
          </Card>

          <Card
            title="Personalized Story Books"
            subtitle="New adventures arriving soon"
            badge="Coming Soon"
            gradient="from-rose-50 to-purple-50"
          >
            <div className="aspect-[4/3] rounded-xl bg-white grid place-items-center">
              <span className="text-rose-500 font-semibold">Story Worlds</span>
            </div>
          </Card>

          <Card
            title="Custom Name & Photo T-Shirts"
            subtitle="Playful tees made just for them"
            gradient="from-yellow-50 to-amber-50"
          >
            <div className="aspect-[4/3] rounded-xl bg-white grid place-items-center">
              <span className="text-amber-500 font-semibold">Tee Time</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Card({ title, subtitle, badge, gradient, children }) {
  return (
    <div className={`rounded-3xl p-5 border shadow-sm hover:shadow-md transition bg-gradient-to-br ${gradient} border-emerald-100/50`}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-[#2b2b2b]">{title}</h3>
        {badge && (
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500 text-white shadow">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-[#5b5b5b] mt-1">{subtitle}</p>
      <div className="mt-4">
        {children}
      </div>
      <div className="mt-4">
        <a href="#create" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-semibold px-4 py-2 hover:bg-emerald-600 transition">Create Now</a>
      </div>
    </div>
  )
}
