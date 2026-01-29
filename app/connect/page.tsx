"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F6EFDF" }}>
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-2xl">
          {/* Page Headline */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-mmeri-navy mb-1">
              Connect With MMERI Scholars
            </h1>
          </div>

          {/* Primary CTA Block - Visually Dominating */}
          <div
            className="border-2 p-12 md:p-16 mb-12 text-center"
            style={{
              borderColor: "#1a2e4c",
              backgroundColor: "#faf9f6",
            }}
          >
            <p className="font-serif text-mmeri-navy mb-8 text-lg leading-relaxed">
              Ready to talk through your student's situation?
            </p>
            <a
              href="https://calendly.com/lisabanyem/mmeri-scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-white px-8 py-4 transition-all hover:opacity-90 text-lg"
              style={{ backgroundColor: "#96181D" }}
            >
              Schedule a Clarity Call
            </a>
            <p className="font-serif text-mmeri-navy/70 mt-6 text-sm">
              Not ready to schedule yet? That's okay.
            </p>
          </div>

          {/* Ask a Quick Question Form */}
          <div className="mb-12">
            <h2 className="font-sans font-bold text-mmeri-navy text-base mb-6 uppercase tracking-widest">
              Ask a Quick Question
            </h2>
            <form
              action="https://formspree.io/f/mvzzgreg"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="font-serif text-sm px-4 py-3 border border-mmeri-navy/20 bg-white focus:outline-none"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="font-serif text-sm px-4 py-3 border border-mmeri-navy/20 bg-white focus:outline-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="font-serif text-sm px-4 py-3 border border-mmeri-navy/20 bg-white focus:outline-none w-full resize-none"
              />
              <button
                type="submit"
                className="font-sans font-bold text-white bg-mmeri-navy hover:bg-mmeri-navy/90 px-6 py-3 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* What to Expect */}
          <div className="mb-12">
            <h2 className="font-sans font-bold text-mmeri-navy text-base mb-4 uppercase tracking-widest">
              What to Expect
            </h2>
            <ul className="space-y-2 font-serif text-sm text-mmeri-navy">
              <li>• We'll respond within 1-2 business days</li>
              <li>• We'll connect you with a relevant MMERI professional</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-mmeri-navy text-white p-8 md:p-10 text-center">
            <h2 className="font-sans font-bold text-base mb-6 uppercase tracking-widest">
              Stay informed about our work
            </h2>
            <form className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
              <input
                type="email"
                placeholder="Email"
                className="font-serif text-sm px-4 py-3 bg-white text-mmeri-navy focus:outline-none min-w-[200px]"
              />
              <button
                type="submit"
                className="font-sans font-bold text-mmeri-navy bg-mmeri-gold hover:bg-mmeri-gold/90 px-6 py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="font-serif text-xs text-white/80">
              Your information is confidential and protected by us. Consulting with you with MMERI Scholars
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
