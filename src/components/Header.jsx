// import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
// import imgs from "../assets/images_header"
import logo from "../assets/img/logo_1.svg"
import {
  NavLink
} from "react-router-dom";
const Header = () => {

  return (
    <header className="main-header" id="mainHeader">
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
export default Header