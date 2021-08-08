import {
  NavLink
} from "react-router-dom";
const Menu = () => {

  const handleClick = (e) => {

    const hamIcon = document.querySelector('.hamburger-icon')
    hamIcon.click()
  }

  return (
    <ul className="menu">
      <div className="menu__close" onClick={handleClick}></div>
      <li>
        <NavLink exact to="/about" activeClassName="selected" className="link" >About us</NavLink>
      </li>
      <li>
        <NavLink exact to="/process" activeClassName="selected" className="link" >The Process</NavLink>
      </li>
      <li>
        <NavLink exact to="/cocktails" activeClassName="selected" className="link" >Cocktails</NavLink>
      </li>
      <li>
        <NavLink exact to="/where-buy" activeClassName="selected" className="link" >Where to Buy</NavLink>
      </li>
      <li>
        <NavLink exact to="/contact" activeClassName="selected" className="link" >Contact</NavLink>
      </li>
    </ul>
  )
}


export default Menu