"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-2xl">
          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-mmeri-navy">
              Connect With MMERI Scholars
            </h1>
          </div>

          {/* Main CTA Card */}
          <div className="border-2 border-mmeri-navy bg-mmeri-cream/30 p-8 md:p-10 mb-8 text-center">
            <p className="font-serif text-mmeri-navy text-lg md:text-xl mb-6">
              Ready to talk through your student's situation?
            </p>
            <a
              href="https://calendly.com/lisabanyem/mmeri-scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-white bg-mmeri-maroon hover:bg-mmeri-maroon/90 px-8 py-3 rounded-md transition-colors mb-6"
            >
              Schedule a Clarity Call
            </a>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-mmeri-navy/20" />
              <span className="text-mmeri-navy/60 text-sm">or</span>
              <div className="flex-1 h-px bg-mmeri-navy/20" />
            </div>

            {/* Reassurance Message */}
            <p className="font-serif text-mmeri-navy/80 text-base">
              Not ready to schedule yet? That's okay.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
