import React, { Component } from "react"; 
import imgs from '../assets/images_process';
import "./slider.scss";


class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: 0,
    }
    this.slide = this.slide.bind(this)
  }


  slide(e){
    const slid = document.getElementById('sliderNH')
    const items = [...slid.querySelectorAll('.Slider__item')]
    const bullets = [...slid.parentElement.querySelectorAll('.bull')]
    const Total = items.length
    setInterval(() => {
      let active = slid.querySelector('.active')
      let index = items.indexOf(active)
      items.map(el=>el.classList.remove('active'))
      bullets.map(el=>el.classList.remove('active'))
      if (index < Total-1 ){
        items[index+1].classList.add('active')
        bullets[index+1].classList.add('active')
      }else{
        items[0].classList.add('active')
        bullets[0].classList.add('active')
      }
    }, 5000);
  }

  bullActive = (e) =>{
    let Target = e.target
    let index = parseInt(Target.dataset.index)
    // console.log([...Target.parentElement.parentElement.querySelectorAll('.Slider__item')])
    let cocktails = [...Target.parentElement.parentElement.querySelectorAll('.Slider__item')]
    let bullets = [...Target.parentElement.querySelectorAll('li')]
    // console.log(bullets)
    cocktails.map(el=>el.classList.remove('active'))
    cocktails[index].classList.add('active')
    bullets.map(el=>el.classList.remove('active'))
    Target.classList.add('active')
  }
  render(){ 
    return(
      <div className="Slider-container">
        <div className="Slider" id="sliderNH" >
          <img src={imgs.slider1} data-index="0" className="Slider__item active" alt="banner" />
          <img src={imgs.slider2} data-index="1" className="Slider__item" alt="banner" />
          <img src={imgs.slider3} data-index="2" className="Slider__item" alt="banner" />
          <img src={imgs.slider4} data-index="3" className="Slider__item" alt="banner" />
          <img src={imgs.slider5} data-index="4" className="Slider__item" alt="banner" />
          <img src={imgs.slider6} data-index="5" className="Slider__item" alt="banner" />
        </div>
        <ul className="bullets bullets-slider">
          <li style={{cursor: "pointer"}}onClick={this.bullActive} data-index="0" className="bull active"></li>
          <li style={{cursor: "pointer"}}onClick={this.bullActive} data-index="1" className="bull"></li>
          <li style={{cursor: "pointer"}}onClick={this.bullActive} data-index="2" className="bull"></li>
          <li style={{cursor: "pointer"}}onClick={this.bullActive} data-index="3" className="bull"></li>
          <li style={{cursor: "pointer"}}onClick={this.bullActive} data-index="4" className="bull"></li>
          <li style={{cursor: "pointer"}}onClick={this.bullActive} data-index="5" className="bull"></li>
        </ul>
      </div>
    )
  }
  componentDidMount(){
    this.slide()
  }
}

export default Slider