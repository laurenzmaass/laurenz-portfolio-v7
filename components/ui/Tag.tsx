import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span className={cn('tag', variant === 'accent' && 'tag-accent', className)}>
      {children}
    </span>
  )
}
