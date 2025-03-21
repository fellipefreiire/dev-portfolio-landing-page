import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  {
    title: 'YouTube',
    href: '#',
  },
  {
    title: 'Twitter',
    href: '',
  },
  {
    title: 'Instagram',
    href: '#',
  },
  {
    title: 'LinkedIn',
    href: '#',
  },
]

export function Footer() {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="items-centers flex flex-col gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center justify-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
