import NavLi from './NavLi'

const Nav: React.FC<any> = () => {
  return (
    <nav>
      <ul className=" bg-black flex">
        <NavLi name="Home" route="/" />
        <NavLi name="About" route="/about" />
      </ul>
    </nav>
  )
}

export default Nav
