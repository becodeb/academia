import { motion } from 'framer-motion'

const dirs = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
}

export function Reveal({ children, delay = 0, direction = 'up', className, blur = true, as = 'div' }) {
  const Comp = motion[as] ?? motion.div
  const offset = dirs[direction] ?? dirs.up
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offset, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
