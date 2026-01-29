"use client"

import React, { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConnectPage() {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement("script")
    script.src = "https://kit.com/forms/8978292/subscriptions"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

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
            {/* ConvertKit Embed Form */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <form id="ck_form_8978292" class="ck-form" action="https://app.kit.com/forms/8978292/subscriptions" data-remote="true" method="post" style="box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1); background-color: #1a2e4c; border-radius: 0px; padding: 20px 0;">
                    <div class="ck-form-content" style="color: #fff; max-width: 100%; margin: 0 auto;">
                      <div style="text-align: center; margin-bottom: 15px;">
                        <input class="ck-input" name="first_name" placeholder="First Name" type="text" style="width: 90%; max-width: 300px; padding: 8px 12px; margin-bottom: 10px; border: none; border-radius: 4px; font-family: -apple-system,BlinkMacSystemFont,segoe ui,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 14px;" />
                      </div>
                      <div style="text-align: center; margin-bottom: 15px;">
                        <input class="ck-input" name="email_address" placeholder="Email Address" type="email" required style="width: 90%; max-width: 300px; padding: 8px 12px; margin-bottom: 10px; border: none; border-radius: 4px; font-family: -apple-system,BlinkMacSystemFont,segoe ui,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 14px;" />
                      </div>
                      <button class="ck-button ck-button-primary" type="submit" style="color: #1a2e4c; background-color: #d4a84b; border-radius: 4px; padding: 10px 20px; font-weight: bold; font-family: -apple-system,BlinkMacSystemFont,segoe ui,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 14px; border: none; cursor: pointer;">Subscribe</button>
                    </div>
                    <div class="ck-guaranty" style="font-size: 12px; text-align: center; color: rgba(255,255,255,0.7); margin-top: 15px;">
                      Thanks for subscribing. Please check your email to confirm your subscription. Once confirmed, you'll receive MMERI updates and key college planning guidance.
                    </div>
                  </form>
                  <script>
                    (function(w){if(w.ConvertKit){w.setTimeout(function(){w.ConvertKit.attachCircleWidget({element:"ck_form_8978292",className:"ck-circle"})},50)}})(window);
                  </script>
                `,
              }}
            />
            <p className="font-serif text-xs text-white/80 mt-4">
              Your information is confidential and protected by us. Consulting with you with MMERI Scholars
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
