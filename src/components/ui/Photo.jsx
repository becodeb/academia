import { cn } from '@/lib/utils'

/**
 * Real stock photo with a duotone treatment (grayscale + brand-color overlay)
 * so any source photo reads as part of the same visual system.
 */
export function Photo({ seed, tone = 'from-ink/70 via-ink/20 to-transparent', className, imgClassName, w = 900, h = 1100, alt = '', children }) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
        alt={alt}
        loading="lazy"
        className={cn('absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08] brightness-[0.85]', imgClassName)}
      />
      <div className={cn('absolute inset-0 bg-gradient-to-br mix-blend-multiply', tone)} />
      {children}
    </div>
  )
}
