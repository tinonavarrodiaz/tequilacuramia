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
        <NavLink exact to="/curamia" activeClassName="selected" className="link" >Curamia</NavLink>
      </li>
      <li>
        <NavLink exact to="/process" activeClassName="selected" className="link" >Our Process</NavLink>
      </li>
      <li>
        <NavLink exact to="/tequilas" activeClassName="selected" className="link" >Our Tequilas</NavLink>
      </li>
      <li>
        <NavLink exact to="/cocktails" activeClassName="selected" className="link" >Cocktails</NavLink>
      </li>
      <li>
        <NavLink exact to="/lamujermasbella" activeClassName="selected" className="link" >#lamujermasbella</NavLink>
      </li>
      <li>
        <NavLink exact to="/press" activeClassName="selected" className="link" >Press</NavLink>
      </li>
      <li>
        <NavLink exact to="/where-buy" activeClassName="selected" className="link" >Buy</NavLink>
      </li>
      <li>
        <NavLink exact to="/contact" activeClassName="selected" className="link" >Contact</NavLink>
      </li>
    </ul>
  )
}


export default Menu