import React, { Component } from "react"; 
import imgs from '../assets/images_process';
import flor from "../assets/img/12.jpg"
import "./slider.scss";


class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: 0,
      images: null,
      bullets: null
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
  nextImg = (e) => {
    let Target = e.target
    let images = [...Target.parentElement.querySelectorAll('img')]
    let index = images.indexOf(Target)
    let bullets = [...Target.parentElement.parentElement.querySelectorAll('.bullets li')]
    let total = images.length
    // console.log(index, Target)
    images.map(el=>el.classList.remove('active'))
    bullets.map(el=>el.classList.remove('active'))
    if (index === total - 1){
      images[0].classList.add('active')
      bullets[0].classList.add('active')
    }else{
      images[index+1].classList.add('active')
      bullets[index+1].classList.add('active')
    }
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
      <div className="Slider-container" data-aos="fade-left">
        <div className="Slider" id="sliderNH" >
          <img src={flor} onClick={this.nextImg} data-index="0" className="Slider__item active" alt="banner" />
          <img src={imgs.slider1} onClick={this.nextImg} data-index="1" className="Slider__item" alt="banner" />
          <img src={imgs.slider2} onClick={this.nextImg} data-index="2" className="Slider__item" alt="banner" />
          <img src={imgs.slider3} onClick={this.nextImg} data-index="3" className="Slider__item" alt="banner" />
          <img src={imgs.slider4} onClick={this.nextImg} data-index="4" className="Slider__item" alt="banner" />
          <img src={imgs.slider5} onClick={this.nextImg} data-index="5" className="Slider__item" alt="banner" />
          <img src={imgs.slider6} onClick={this.nextImg} data-index="6" className="Slider__item" alt="banner" />
        </div>
        <ul className="bullets bullets-slider">
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="0" className="bull active"></li>
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="1" className="bull"></li>
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="2" className="bull"></li>
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="3" className="bull"></li>
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="4" className="bull"></li>
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="5" className="bull"></li>
          <li style={{cursor: "pointer"}} onClick={this.bullActive} data-index="6" className="bull"></li>
        </ul>
      </div>
    )
  }
  componentDidMount(){
    this.slide()
  }
}

export default Slider