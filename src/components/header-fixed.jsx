// import Logo from "./Logo";
import Hamburger from "./HamburgerLight";
import Menu from "./Menu";
import logo from "../assets/img/logoLight.svg"
import {
  NavLink
} from "react-router-dom";
import {MobileView} from "react-device-detect";
import Social from './social'

const HeaderFixed = () => {

  return (
    <header className="main-header fixed" id="mainHeader">
      <Social></Social>
      <NavLink to="/" className="link">
        <img className="main-logo" src={logo} alt=""/>
      </NavLink>
      <MobileView>
        <Hamburger />
      </MobileView>
      <nav className="main-nav" >
        <Menu />
      </nav>
    </header>
  )
}
export default HeaderFixed