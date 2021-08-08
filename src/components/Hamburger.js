import menu from "../assets/img/menu.png";

const Hamburger = ()=>{
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

export default Hamburger