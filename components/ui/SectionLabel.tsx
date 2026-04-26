import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function SectionLabel({ children, className, as: Tag = 'p' }: SectionLabelProps) {
  return (
    <Tag
      className={cn(
        'font-mono text-xs uppercase tracking-[0.12em] text-muted',
        className
      )}
    >
      {children}
    </Tag>
  )
}
