"use client"

import React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", email: "", message: "" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-mmeri-cream">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-3xl">
          {/* Page Headline */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-mmeri-navy mb-1">
              Connect With MMERI Scholars
            </h1>
            <p className="font-serif text-sm text-mmeri-navy/60">Why</p>
          </div>

          {/* Main Card Container - bordered box */}
          <div className="border-2 border-mmeri-navy bg-white p-8 md:p-10 mb-8">
            {/* CTA Section */}
            <div className="text-center mb-6 pb-6 border-b border-mmeri-navy/20">
              <p className="font-serif text-xs text-mmeri-navy/70 mb-4 tracking-wide">
                Start prompt line
              </p>
              <a
                href="https://calendly.com/lisabanyem/mmeri-scholars-free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans font-bold text-white bg-mmeri-maroon hover:bg-mmeri-maroon/90 px-6 py-3 transition-colors"
              >
                Schedule a Clarity Call
              </a>
              <p className="font-serif text-xs text-mmeri-navy/70 mt-4">
                Not ready to schedule yet? That's okay.
              </p>
            </div>

            {/* Quick Question Form */}
            <div className="mb-8 pb-8 border-b border-mmeri-navy/20">
              <h2 className="font-sans font-bold text-mmeri-navy text-sm mb-1 uppercase tracking-widest">
                Ask a Quick Question
              </h2>
              <p className="font-serif text-xs text-mmeri-navy/70 mb-6">
                Request form | Choose option field
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="font-serif text-sm px-4 py-2 border border-mmeri-gold/30 bg-mmeri-cream focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-serif text-sm px-4 py-2 border border-mmeri-gold/30 bg-mmeri-cream focus:outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="font-serif text-sm px-4 py-2 border border-mmeri-gold/30 bg-mmeri-cream focus:outline-none w-full resize-none"
                />
                <button
                  type="submit"
                  className="font-sans font-bold text-white bg-mmeri-navy hover:bg-mmeri-navy/90 px-6 py-2 transition-colors text-sm"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="font-sans font-bold text-mmeri-navy text-sm mb-4 uppercase tracking-widest">
                What to Expect
              </h2>
              <ul className="space-y-2 font-serif text-sm text-mmeri-navy">
                <li>• We'll respond within 1-2 business days</li>
                <li>• We'll connect you with a relevant MMERI professional</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-mmeri-navy text-white p-8 md:p-10 text-center">
            <h2 className="font-sans font-bold text-mmeri-navy text-lg mb-4 uppercase tracking-widest" style={{ color: "white" }}>
              Stay informed about our work
            </h2>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
              <input
                type="email"
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="font-serif text-sm px-4 py-2.5 bg-white text-mmeri-navy focus:outline-none min-w-[200px]"
              />
              <button
                type="submit"
                className="font-sans font-bold text-mmeri-navy bg-mmeri-gold hover:bg-mmeri-gold/90 px-6 py-2.5 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="font-serif text-xs text-white/80">
              Your information is confidential and protected by us. Consulting you with MMERI Scholars
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
