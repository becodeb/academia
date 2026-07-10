import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="border-b border-ink/10">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl md:text-2xl text-ink">{item.question}</span>
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-transform duration-300',
                  isOpen && 'rotate-45 bg-ink text-paper border-ink'
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pr-14 text-[1.05rem] leading-relaxed text-graphite">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
