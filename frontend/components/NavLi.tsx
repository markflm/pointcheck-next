import Link from 'next/link'

export interface NavItem {
  name: string
  route: string
}

const NavLi: React.FC<NavItem> = (navItem) => {
  return (
    <li
      // conditional styling example
      className={`${
        navItem.name === 'Home' ? 'text-red-300' : 'text-white '
      } mx-2 font-mono text-xl`}
    >
      <Link href={navItem.route}>{navItem.name}</Link>
    </li>
  )
}

export default NavLi
