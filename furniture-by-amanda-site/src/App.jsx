import React, { useState } from 'react'

const PRODUCTS = [
  { id: 1, title: 'Farmhouse Dining Set', price: 899, status: 'Available', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop', badges: ['Solid Wood', 'Hand-Finished'] },
  { id: 2, title: 'Vintage Sideboard', price: 540, status: 'Sold', img: 'https://images.unsplash.com/photo-1616627988854-6dee8f8b4ac4?q=80&w=1600&auto=format&fit=crop', badges: ['1920s', 'Matte Topcoat'] },
  { id: 3, title: 'Mid-Century Dresser', price: 620, status: 'Available', img: 'https://images.unsplash.com/photo-1540575161537-1c0b0aa2c16b?q=80&w=1600&auto=format&fit=crop', badges: ['Walnut', 'Original Hardware'] },
  { id: 4, title: 'Entryway Console', price: 350, status: 'Available', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop', badges: ['Custom Color', 'Sealed'] },
]

const STEPS = [
  { title: 'Source', text: 'We hand-pick quality pieces built to last.' },
  { title: 'Refinish', text: 'Repair, sand, prime, paint/stain, seal, and hardware.' },
  { title: 'Style', text: "Modern finishes that honor each piece's character." },
  { title: 'Deliver', text: 'Pickup in town or affordable local delivery.' },
]

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <img src="/logo.jpg" alt="Furniture by Amanda" className="w-10 h-10 rounded-full border" />
            <span className="text-lg">Furniture by Amanda</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:opacity-70">Shop</a>
            <a href="#process" className="hover:opacity-70">Our Process</a>
            <a href="#custom" className="hover:opacity-70">Custom Work</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary">Inquire</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Beautiful, durable furniture—
              <span className="block">refinished by hand.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Refinished, Reloved, Ready for Home. Thoughtful craftsmanship, premium finishes, and honest pricing. Shop ready-to-go pieces or request a custom refinish.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="btn-primary">Browse the Shop</a>
              <a href="#custom" className="btn-outline">Custom Project</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1616627973560-3b1dbff63d58?q=80&w=1600&auto=format&fit=crop" alt="Refinished furniture vignette" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Shop Ready Pieces</h2>
              <p className="text-slate-600">Curated, restored, and sealed for everyday use.</p>
            </div>
            <a href="#contact" className="btn-outline">Ask About a Piece</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="card overflow-hidden">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {p.badges.map((b, i) => (
                      <span key={i} className="badge">{b}</span>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`badge ${p.status === 'Sold' ? 'border-red-300' : 'border-slate-300'}`}>{p.status}</span>
                  </div>
                </div>
                <div className="p-4">

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold leading-tight">{p.title}</h3>
                      <p className="text-slate-500 text-sm">Sealed, durable finish</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">${p.price}</p>
                      <p className="text-xs text-slate-500">tax included</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between">
                  <a href="#contact" className="btn-primary">Inquire</a>
                  <button className="btn-outline">Reserve</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Our Process</h2>
          <p className="text-slate-600">From diamond-in-the-rough to room-defining centerpiece.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {STEPS.map((s, i) => (
              <div key={i} className="card p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Work */}
      <section id="custom" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Custom Refinishing</h2>
            <p className="mt-2 text-slate-600">
              Have a piece you love but hate the finish? We offer color matching, hardware swaps, topcoat upgrades, and structural repairs.
            </p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>• Color consult with sample boards</li>
              <li>• Durable waterborne topcoats</li>
              <li>• Drawer tune-ups & glide repair</li>
              <li>• Pet- & kid-friendly finishes</li>
            </ul>
            <div className="mt-4">
              <a href="#contact" className="btn-primary">Get a Quote</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1600&auto=format&fit=crop" alt="Before and after refinishing" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About Furniture by Amanda</h2>
            <p className="mt-3 text-slate-600">
              We’re a small, family-run shop that believes old furniture deserves a second life. Every piece is repaired, refinished, and sealed to handle real family living.
            </p>
            <div className="mt-6 card p-5">
              <p className="text-sm text-slate-700">
                <strong>Eco-friendly:</strong> Refinishing keeps quality wood out of landfills while costing less than new mass-market items.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <p className="italic">“The dresser is gorgeous—smooth drawers and the finish is flawless. It looks custom and cost way less than new!”</p>
              <p className="mt-3 text-sm text-slate-600">— Hannah R.</p>
            </div>
            <div className="card p-5">
              <p className="italic">“Fast communication, fair price, and they helped load it. Our dining room finally feels complete.”</p>
              <p className="mt-3 text-sm text-slate-600">— Miguel P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
            <p className="text-slate-600">Ask about a piece, request a custom quote, or schedule pickup.</p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              <div>📞 (555) 123-4567</div>
              <div>✉️ hello@furniturebyamanda.com</div>
              <div>📍 Your City, ST</div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you ASAP."); }}
            className="card p-5 grid gap-4"
          >
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <input className="rounded-xl border-slate-300" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="rounded-xl border-slate-300" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows="5" className="rounded-xl border-slate-300" required />
            </div>
            <button type="submit" className="btn-primary w-fit">Send</button>
          </form>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 md:grid-cols-3 items-start">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-semibold"><img src="/logo.jpg" alt="logo" className="w-6 h-6 rounded-full border"/> Furniture by Amanda</div>
            <p className="text-sm text-slate-600 max-w-sm">Quality, character, and finishes that last.</p>
          </div>
          <div className="grid gap-2 text-sm">
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#custom" className="hover:underline">Custom</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Furniture by Amanda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
