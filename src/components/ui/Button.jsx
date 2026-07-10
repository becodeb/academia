import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-ink text-paper hover:bg-amber',
        outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper',
        ghost: 'text-ink hover:text-amber',
        amber: 'bg-amber text-paper hover:bg-amber-dim',
      },
      size: {
        default: 'h-13 px-7 text-[0.95rem] py-3.5',
        sm: 'h-10 px-5 text-sm py-2',
        lg: 'h-14 px-9 text-base py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

const Button = forwardRef(({ className, variant, size, children, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
