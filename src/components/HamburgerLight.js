import menu from "../assets/img/menu2.png";

const HamburgerLight = ()=>{
  const showMenu = (e)=>{
    let mainNav = document.querySelector('.main-nav')
    mainNav.classList.toggle('show')
  }
  return(
    <div className="hamburger-icon" onClick={showMenu}>
      <img src={menu} alt=""/>
    </div>
  )
}

export default HamburgerLight