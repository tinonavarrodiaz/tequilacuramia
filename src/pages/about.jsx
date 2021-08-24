import React, { Component } from "react";
import imagesAbout from '../assets/images_about';
import Logo from "../components/Logo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOSInit from "../helpers/helpers";
import botella from "../assets/img/botella.png"
import ArticleBottom from "../components/bottomContent";
import henm from "../assets/img/hechoenmexicoa.svg"
class About extends Component {
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
  }
  loadImg(e){
    console.log(e)
    e.target.style.opacity = 1
  }
  render() {
  return (
    
      <div >
        <Header />
        <section className="section about">
          
          <h2 className="section__title" data-aos="fade-left" >Curamia</h2>
          
          
          <article className="section__banner">
            <img onLoad={this.loadImg} style={{opacity: "0", transition: "all 1s"}} src={imagesAbout.img1} className="section__banner-image" alt="banner" />
          </article>
          
          <article className="about__container">
            <div className="about__text"  >
              <img src={henm} alt="" data-aos="zoom-in"  className="img-curamia"/>
              <p className="text" data-aos="fade-right" data-aos-delay="50" >Many generations ago, the most beautiful lady in Mexico was born. Though the town could not stop talking about her beauty, it was said that her physical fairness paled in comparison to her charitable, unselfish heart. She changed the lives of many, but as the years went by—and she grew older—truth blossomed into mystery. The passage of time enshrouded her life in secrecy; leaving some to wonder what legacy she left behind.</p>
              
              {/* <p className="highlighted" data-aos="fade-left" >The meaning of Curamia is “My Cure”. A spiritual relief materialized in a Tequila that is meant to be enjoyed and savored. </p>
              
              
              <p className="text" data-aos="fade-right" >
                Curamia a lifestyle brand that was born in the middle of a global pandemic. One of the main things we thought about was how everyone around the world was concerned and mindful about their health and wellness. To us, Curamia is part of that health and wellness. Tequila has always been known to be the one spirit that those who are health minded drink and there is scientific evidence that proves that such spirit also has medicinal purposes; it is an upper and low in sugars and calories.<br /><br />Curamia is not another tequila. It is the best, most elegant and delicate top shelf tequila that is accessible to all.
              </p> */}
              
            </div>
            <div className="about__img">              
              <img src={botella} className="section__banner-image" alt="banner" data-aos-delay="300" data-aos-duration="1000" data-aos="zoom-in" />
              
            </div>
          </article>
          <article className="about__box">
            <div className="tites" data-aos="fade-right" >
              
              <h3 className="highlighted">The Process</h3>
              <p>Discover how our Tequila is made</p>
              
            </div>
            <div className="image-logo" data-aos="fade-left" >
              
              <Logo />
              
            </div>
          </article>
          <article className="image-bottom" >
            
            <img src={imagesAbout.img2} alt="banner" data-aos="zoom-in" />
            
            
            <p className="caption" data-aos="fade-left" >Welcome to the Curamia Experience</p>
            
          </article>
        </section>
        <ArticleBottom back="#EDEAE6" pad="40px"/>
        <Footer />
      </div>
  )
    }
  componentDidMount() {
    document.body.style.setProperty('--header-color', '#FF3500')
    AOSInit()
  }
}
// const screenHeight = () => {
//   return window.innerHeight
// }
export default About