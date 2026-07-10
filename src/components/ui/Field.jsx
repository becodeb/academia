import { cn } from '@/lib/utils'

const base =
  'w-full border-b border-ink/20 bg-transparent py-3 text-[1.05rem] text-ink placeholder:text-stone focus:border-ink outline-none transition-colors duration-300'

export function Input({ className, ...props }) {
  return <input className={cn(base, className)} {...props} />
}

export function Textarea({ className, ...props }) {
  return <textarea className={cn(base, 'resize-none', className)} {...props} />
}

export function Select({ className, children, ...props }) {
  return (
    <select className={cn(base, 'appearance-none', className)} {...props}>
      {children}
    </select>
  )
}
