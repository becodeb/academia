import { cn } from '@/lib/utils'

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-graphite',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
