
import Logo from '../assets/img/logo.png';
import { NavLink } from "react-router-dom";
const Footer = () => {

  return (
    <footer className="main-footer">
      <nav className="footerNav">
        <ul className="footerMenu">
          <li><NavLink to="/about">About us</NavLink></li>
          <li><NavLink exact to="/contact">Get in Touch</NavLink></li>
          <li><NavLink exact to="/privacy-policy">Privacy Policy</NavLink></li>
        </ul>
      </nav>
      <NavLink exact to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
    </footer>
  )
}

export default Footer