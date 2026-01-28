"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  expandedByDefault?: boolean
  category?: "expanded" | "collapsed"
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What does *MMERI* mean?",
    answer: "Is MMERI only for immigrant or disaara families?",
    category: "expanded",
    expandedByDefault: true,
  },
  {
    id: "2",
    question: "Why there benefits ah one-time plans and year-long advising?",
    answer:
      "One-time plans are designed for families who need guidance on specific aspects of the college application process, while year-long advising provides comprehensive support throughout the entire journey. Year-long advising includes regular check-ins, essay reviews, application strategy, and ongoing support through decision season.",
    category: "expanded",
    expandedByDefault: true,
  },
  {
    id: "3",
    question: "Why do you offer both one-time plan over Blaar-long blueprint plans?",
    answer:
      "We offer both options to accommodate different family needs and budgets. Some families need targeted support for specific aspects, while others benefit from continuous guidance over a longer period. This flexibility ensures we can serve families at various stages of their college planning journey.",
    category: "expanded",
    expandedByDefault: true,
  },
  {
    id: "4",
    question: "Can we upgrade from a one-time plan to yearry advising advising later?",
    answer:
      "Yes, absolutely. We understand that families' needs may evolve. You can upgrade from a one-time plan to year-long advising at any time. Please contact us to discuss the upgrade options and pricing.",
    category: "collapsed",
  },
  {
    id: "5",
    question: "How we upgrade from a one service require free from our one service year?",
    answer:
      "To upgrade your service, simply reach out to our team with your request. We'll review your current plan and provide options for upgrading to a package that better suits your needs. We'll ensure a smooth transition without losing any progress.",
    category: "collapsed",
  },
  {
    id: "6",
    question: "How you start time each service your multiple childrren?",
    answer:
      "For families with multiple children, we offer flexible options. You can start our service for each child at different times based on their grade level and college timeline. We can also provide package deals for families with multiple children to make our services more accessible.",
    category: "collapsed",
  },
  {
    id: "7",
    question: "Do you offer segment plans for matisons or multiple children?",
    answer:
      "Yes, we offer customized payment plans and packages for families with multiple children or those looking for segmented services. Our goal is to make our advising accessible to all families. Contact us to discuss options tailored to your family's needs.",
    category: "collapsed",
  },
  {
    id: "8",
    question: "Do you guarantee charge for familiesdes or scholarships or scholarships?",
    answer:
      "While we don't guarantee scholarships, we provide comprehensive guidance on identifying scholarship opportunities, strengthening applications, and positioning students for success. Our strategies have helped many families secure significant financial aid.",
    category: "collapsed",
  },
  {
    id: "9",
    question: "Do you review essays, transcripts, or applications during workshops?",
    answer:
      "Yes, depending on your service plan, we offer essay reviews, transcript analysis, and application reviews. Our year-long advising typically includes multiple rounds of essay feedback and application strategy sessions.",
    category: "collapsed",
  },
  {
    id: "10",
    question: "How quickly can we start after submitting your intake form?",
    answer:
      "We typically get back to families within 5-7 business days of submitting the intake form. If you need expedited support, please indicate this in your submission, and we'll do our best to accommodate your timeline.",
    category: "collapsed",
  },
]

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    faqData.filter((item) => item.expandedByDefault).map((item) => item.id)
  )

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const expandedItems_Data = faqData.filter((item) => item.category === "expanded")
  const collapsedItems_Data = faqData.filter((item) => item.category === "collapsed")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-3xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-mmeri-navy mb-2">
              Frequently Asked Questions
            </h1>
          </div>

          {/* FAQ Container with border */}
          <div className="border-2 border-mmeri-navy/30 p-6 md:p-8 bg-mmeri-cream/50">
            {/* Expanded by Default Section */}
            {expandedItems_Data.length > 0 && (
              <div className="mb-8">
                <div className="text-xs font-sans font-bold text-mmeri-navy/60 uppercase tracking-widest mb-4">
                  Expanded by Default
                </div>
                <div className="space-y-3 mb-8 border-b border-mmeri-navy/20 pb-8">
                  {expandedItems_Data.map((item) => (
                    <FAQAccordionItem
                      key={item.id}
                      item={item}
                      isExpanded={expandedItems.includes(item.id)}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Collapsed Section */}
            {collapsedItems_Data.length > 0 && (
              <div>
                <div className="text-xs font-sans font-bold text-mmeri-navy/60 uppercase tracking-widest mb-4">
                  Collapsed
                </div>
                <div className="space-y-3">
                  {collapsedItems_Data.map((item) => (
                    <FAQAccordionItem
                      key={item.id}
                      item={item}
                      isExpanded={expandedItems.includes(item.id)}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-mmeri-navy text-white p-8 md:p-10 text-center">
            <h2 className="font-sans text-xl md:text-2xl font-bold mb-3">Not sure where to start?</h2>
            <p className="font-serif text-sm md:text-base mb-6 text-white/90">
              We'll help you identify the right next step based your student's stage and needs
            </p>
            <a
              href="https://calendly.com/mmerischolars/scholars-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-bold text-mmeri-navy bg-mmeri-gold hover:bg-mmeri-gold/90 px-8 py-3 rounded-md transition-colors mb-4"
            >
              Schedule a Free Consultation
            </a>
            <p className="font-serif text-xs text-white/75">https://calendly.com/mmerischolars/scholars-free-consultation</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

interface FAQAccordionItemProps {
  item: FAQItem
  isExpanded: boolean
  onToggle: () => void
}

function FAQAccordionItem({ item, isExpanded, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="border border-mmeri-navy/20 bg-white hover:bg-mmeri-cream/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-4 text-left hover:bg-mmeri-cream/50 transition-colors"
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 bg-mmeri-maroon"></div>
        </div>

        {/* Question and Toggle */}
        <div className="flex-1 min-w-0">
          <p className="font-sans font-bold text-mmeri-navy text-sm md:text-base leading-tight">{item.question}</p>
        </div>

        {/* Expand/Collapse Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-8 h-8 border-2 border-mmeri-navy/40 rounded-full flex items-center justify-center hover:border-mmeri-navy/60 transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-mmeri-navy" />
            ) : (
              <ChevronDown className="w-4 h-4 text-mmeri-navy" />
            )}
          </div>
        </div>
      </button>

      {/* Answer */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-0 border-t border-mmeri-navy/10 bg-white">
          <div className="ml-10">
            <p className="font-serif text-mmeri-navy/80 text-sm md:text-base leading-relaxed">{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
