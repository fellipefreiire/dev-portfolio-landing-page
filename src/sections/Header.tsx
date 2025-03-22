import { NavLink } from '@/components/NavLink'

export function Header() {
  return (
    <div className="fixed top-3 z-30 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-gray-800 p-0.5">
        <NavLink
          href="/"
          className="nav-item data-[current=true]:hover:text-gray-90 data-[current=true]:bg-white data-[current=true]:text-gray-900 data-[current=true]:hover:bg-white/70"
        >
          Home
        </NavLink>
        <NavLink
          href="#"
          className="nav-item data-[current=true]:hover:text-gray-90 data-[current=true]:bg-white data-[current=true]:text-gray-900 data-[current=true]:hover:bg-white/70"
        >
          Projects
        </NavLink>
        <NavLink
          href="#"
          className="nav-item data-[current=true]:hover:text-gray-90 data-[current=true]:bg-white data-[current=true]:text-gray-900 data-[current=true]:hover:bg-white/70"
        >
          About
        </NavLink>
        <NavLink
          href="#"
          className="nav-item data-[current=true]:hover:text-gray-90 data-[current=true]:bg-white data-[current=true]:text-gray-900 data-[current=true]:hover:bg-white/70"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  )
}
