import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  narrow?: boolean
}

export function Container({ children, className, as: Tag = 'div', narrow }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full mx-auto px-5 md:px-10',
        narrow ? 'max-w-[860px]' : 'max-w-[1440px]',
        className
      )}
    >
      {children}
    </Tag>
  )
}
