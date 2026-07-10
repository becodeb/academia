import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491155550192"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-paper shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-forest/40" />
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  )
}
