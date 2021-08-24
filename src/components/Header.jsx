// import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
// import imgs from "../assets/images_header"
import logo from "../assets/img/logo-bueno.svg"
import {
  NavLink
} from "react-router-dom";
import {MobileView} from "react-device-detect";
import Social from './social'

const Header = () => {
  
  return (
    <header className="main-header" id="mainHeader">
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
export default Header