import Logo from "./Logo";
import Hamburger from "./HamburgerLight";
import Menu from "./Menu";
import {
  NavLink
} from "react-router-dom";

const HeaderFixed = () => {

  return (
    <header className="main-header fixed" id="mainHeader">
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
export default HeaderFixed