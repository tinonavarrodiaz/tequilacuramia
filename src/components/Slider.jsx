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
  slideUp(){
  }
  slideDown(){
  }
  render(){ 
    return(
      <div className="Slider-container">
        <div className="Slider" id="sliderNH" >
          <img src={imgs.slider1} className="Slider__item active" alt="banner" />
          <img src={imgs.slider2} className="Slider__item" alt="banner" />
          <img src={imgs.slider3} className="Slider__item" alt="banner" />
          <img src={imgs.slider4} className="Slider__item" alt="banner" />
          <img src={imgs.slider5} className="Slider__item" alt="banner" />
          <img src={imgs.slider6} className="Slider__item" alt="banner" />
        </div>
        <ul className="bullets">
          <li className="bull active"></li>
          <li className="bull"></li>
          <li className="bull"></li>
          <li className="bull"></li>
          <li className="bull"></li>
          <li className="bull"></li>
        </ul>
      </div>
    )
  }
  componentDidMount(){
    this.slide()
  }
}

export default Slider