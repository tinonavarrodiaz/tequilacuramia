import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import {
  NavLink
} from "react-router-dom";
const Header = () => {

  return (
    <header className="main-header" id="mainHeader">
      <NavLink to="/" className="link">
        <Logo />
      </NavLink>
      <Hamburger />
      <nav className="main-nav" >
        <Menu />
      </nav>
    </header>
  )
}
export default Header