// import Logo from "./Logo";
import Hamburger from "./HamburgerLight";
import Menu from "./Menu";
import logo from "../assets/img/logoLight.png"
import {
  NavLink
} from "react-router-dom";

const HeaderFixed = () => {

  return (
    <header className="main-header fixed" id="mainHeader">
      <NavLink to="/" className="link">
        <img className="main-logo" src={logo} alt=""/>
      </NavLink>
      <Hamburger />
      <nav className="main-nav" >
        <Menu />
      </nav>
    </header>
  )
}
export default HeaderFixed