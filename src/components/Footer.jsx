
import Logo from '../assets/img/logo-bueno.svg';
import { NavLink } from "react-router-dom";
import Social from './social'
const Footer = () => {

  return (
    <footer className="footer">
      <Social></Social>
      <div className="footer-Right">
        <nav className="footerNav">
          <ul className="footerMenu">
            <li><NavLink exact to="/curamia">Curamia</NavLink></li>
            <li><NavLink exact to="/contact">Get in Touch</NavLink></li>
            <li><NavLink exact to="/privacy-policy">Privacy Policy</NavLink></li>
          </ul>
        </nav>
        <NavLink exact to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer