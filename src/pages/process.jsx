import React, { Component } from "react";
import imgs from '../assets/images_process';
// import { Scrollbar } from 'smooth-scrollbar-react';
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import AOSInit from "../helpers/helpers";

import ArticleBottom from "../components/bottomContent";
class Process extends Component {
  constructor(props){
    super(props)
    this.state = {
      scroll: 0,
    }
    this.src = this.src.bind(this)
  }
  // actualizarScroll(scro){
  //   console.log(this)
  // }
  src(e){
    // console.log(e.offset.y)
    this.setState({scroll: e.offset.y})
    console.log(`scroll: ${this.state.scroll}`)
  }
  loadImg(e){
    e.target.style.opacity = 1
  }
  render() {
  return (
    // <Scrollbar
    //   alwaysShowTracks
    //   onScroll={this.src}
    //   plugins={{
    //     overscroll: {
    //       effect: "glow"
    //     }
    //   }}
    // >
      <div >
        <Header />

        <section className="section process">
          <h2 className="section__title" data-aos="fade-left">Our process</h2>
          <article className="section__banner">
            <img src={imgs.img1} onLoad={this.loadImg} style={{opacity: "0", transition: "all 1s"}}  className="section__banner-image" alt="banner"  data-aos=""/>
          </article>
          <article className="process__text">

          <p className="section__title1" data-aos="fade-right" >Curamia, the most beautiful Tequila.</p>

            
          <p className="section__text" data-aos="fade-right" >Curamia’s exceptionally smooth taste —clean, extra-soft, herbal finishes— is a result of our commitment to simplicity and sustainability, as well as authenticity and craftsmanship. Our liquid extraction model is recognized by the tequila regulatory council for its sustainability —utilizing steam and water for the purest taste (and cleanest process) possible. In short, Curamia is as beautiful on the inside as it is on the out— not an easy feat when the packaging is so stylish.</p>
          <p className="section__text" data-aos="fade-right" data-aos-offset="300">Our process begins atop the volcano of tequila, when natural spring water trickles down the rugged cliffs to the underground wells below —natural aquifers, 70-meters beneath the earth’s surface. The volcanic soil enriches the water with essential minerals, which is Harmonized with our tequila through a proprietary process. This combination of authenticity and craftsmanship, of heritage and innovation, is at the very heart of Curamia Tequila.</p>
            
          </article>
          <article className="process__box " style={{display: 'block'}} >
            {/* <img data-aos="fade" src={flor} alt=""/> */}
            <Slider/>

          </article>
          <article className="brand" >

            <div data-aos="fade-right" data-aos-offset="100" className="logo-c">
            <Logo/>
            </div>
            <p className="brand__slogan" data-aos="fade-left" data-aos-offset="100">A MEXICAN<br/>LEGACY</p>
          </article>
        </section>
        <ArticleBottom alt="true" back="#FF4D00" pad="50px"/>
        <Footer />
      </div>
    // </Scrollbar>
  )
  }
  componentDidMount() {
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    AOSInit()
  }
}
// const screenHeight = () => {
//   return window.innerHeight
// }
export default Process