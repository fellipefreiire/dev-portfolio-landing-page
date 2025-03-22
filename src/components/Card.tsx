import grainImage from '@/assets/grain.jpg'
import { cn } from '@/utils/cn'
import type { ComponentPropsWithoutRef } from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
} & ComponentPropsWithoutRef<'div'>

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      {children}
    </div>
  )
}
