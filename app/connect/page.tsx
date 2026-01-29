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
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", newsletterEmail)
    setNewsletterEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-2xl">
          {/* Page Headline */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-mmeri-navy mb-2">
              Connect With MMERI Scholars
            </h1>
          </div>

          {/* Main Card Container */}
          <div className="border-2 border-mmeri-navy/40 bg-mmeri-cream p-8 md:p-10 mb-8">
            {/* Call-to-Action Section */}
            <div className="text-center mb-8 pb-8 border-b border-mmeri-navy/15">
              <p className="font-sans text-sm text-mmeri-navy/70 uppercase tracking-widest mb-4">
                Start prompt line
              </p>
              <a
                href="https://calendly.com/lisabanyem/mmeri-scholars-free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans font-bold text-white bg-mmeri-maroon hover:bg-mmeri-maroon/90 px-8 py-3 rounded-md transition-colors mb-4"
              >
                Schedule a Clarity Call
              </a>
              <p className="font-serif text-sm text-mmeri-navy/70">
                Not ready to schedule yet? That's okay.
              </p>
            </div>

            {/* Quick Question Form */}
            <div className="mb-8">
              <h2 className="font-serif font-bold text-mmeri-navy text-lg mb-6">Ask a Quick Question</h2>
              <p className="font-serif text-sm text-mmeri-navy/70 mb-4">
                Please don't hesitate to reach out
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="font-sans text-sm px-4 py-2.5 border border-mmeri-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mmeri-maroon/50 bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-sans text-sm px-4 py-2.5 border border-mmeri-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mmeri-maroon/50 bg-white"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="font-sans text-sm px-4 py-2.5 border border-mmeri-navy/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mmeri-maroon/50 w-full resize-none bg-white"
                />
                <button
                  type="submit"
                  className="font-sans font-bold text-white bg-mmeri-navy hover:bg-mmeri-navy/90 px-6 py-2.5 rounded-md transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="font-serif font-bold text-mmeri-navy text-lg mb-4">What to Expect</h2>
              <ul className="space-y-2 font-serif text-sm text-mmeri-navy/80">
                <li className="flex gap-3">
                  <span className="text-mmeri-maroon font-bold">•</span>
                  <span>We'll respond within 1-2 business days</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-mmeri-maroon font-bold">•</span>
                  <span>We'll connect you with a relevant MMERI team member</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-mmeri-navy text-white p-8 md:p-10 text-center">
            <h2 className="font-sans text-xl md:text-2xl font-bold mb-4">Stay informed about our work</h2>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <input
                type="email"
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="font-sans text-sm px-4 py-2.5 rounded-md border border-mmeri-navy/20 focus:outline-none focus:ring-2 focus:ring-mmeri-gold/50 min-w-[200px] text-mmeri-navy"
              />
              <button
                type="submit"
                className="font-sans font-bold text-mmeri-navy bg-mmeri-gold hover:bg-mmeri-gold/90 px-6 py-2.5 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="font-serif text-xs text-white/75 mt-4">
              Your information is confidential and protected by us with MMERI Scholars
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
