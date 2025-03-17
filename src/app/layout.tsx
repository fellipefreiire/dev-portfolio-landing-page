import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/cn'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Dev Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-gray-900 font-sans text-white antialiased',
          inter.variable,
          calistoga.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
