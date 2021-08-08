import React, { Component } from "react"; 
import { BrowserView, MobileView } from "react-device-detect";
import imagesHome from '../assets/images_home';
import { NavLink } from "react-router-dom";
import { Scrollbar } from 'smooth-scrollbar-react';
import HeaderFixed from "../components/header-fixed";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
// import { Loader } from 'rsuite';
import Loader from "react-js-loader";
// import { Parallax } from 'react-scroll-parallax';

// const scr = (e)=>{
//   let st = e.offset.y
//   console.log(this.state.scroll)
// }
class Home extends Component  {
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
  // Parall(p){
  //   console.log(p)
  //   this.setState({factor: p})
  // }
  src(e){
    // console.log(e.offset.y)
    this.setState({scroll: e.offset.y})
    document.documentElement.style.setProperty('--scroll', e.offset.y)
    // this.setState(0)
  }
// 
  render() {
  return (
    <Scrollbar
      alwaysShowTracks
      onScroll={this.src}
      plugins={{
          overscroll: {
            effect: "glow"
          }
        }}
    >
        
    <div className="s-container" style={{display: 'flex', flexDirection: 'column', maxHeight: screenHeight()}}>
      <HeaderFixed />
      <section className="home">
        <Fade cascade>
        <div className="banner">
          {/*<img src={imagesHome.img1} className="banner-image" alt="banner" data-parallax='{"y" : -60}'/>*/}
          <BrowserView>
          <div className="video-container">
            {/* <p style={{color:'#fff'}}>loading</p> */}
            <Loader type="bubble-ping" bgColor={"#FFFFFF"} size={75} />
            {/* <Loader size="md" content="Medium" /> */}
            <video autoPlay loop id="video" muted="muted">
              <source src="https://tinonavarrodiaz.github.io/video-curamia/curamia.mp4" type="video/mp4"/>
            </video>
          </div>
          </BrowserView>
          <MobileView>
          <picture className="picture-banner">
            <source srcSet={imagesHome.img1} media="(min-width: 1024px)" />
            {/*<source srcset={imagesHome.img1} media="(min-width: 1024px)"/>*/}
            <img src={imagesHome.img1m} alt="" />
            
          </picture>
          
          <div className="text-con" >
            <h1  style={{transform: `translateY(${this.state.scroll*.09}px)`, trasition: 'transfrom .1s'}} >A DELICATE<br />BALANCE</h1>
            <h2 style={{transform: `translateY(-${this.state.scroll*.09}px)`, trasition: 'transfrom .1s'}}>Of excelence, beauty, wellness &<br />great memories.</h2>
          </div>
          </MobileView>
        </div>
        </Fade>
        <article className="article-text home__text">
            {/* <Image src="../assets/images/hechoenmexico.jpg" />  */}
            
              {/* <div className="tra" style={{transform: `translateY(${this.state.scroll*.06}px)`, trasition: 'transfrom .1s'}}> */}
              <Zoom>
              <img data-factor=".06" src={imagesHome.svg} alt="Hecho en Mexico" y={[-20, 20]} style={{ trasition: 'transfrom .1s'}}/>
                </Zoom>
              {/* </div> */}
                  <Fade right>
          <p style={{marginTop: '50px'}}>Many generations ago, the most beautiful lady in Mexico was born. The town
            couldn’t stop talking about her beauty.<br />It is said that her physical fairness paled in comparison to
            her charitable and unselfish heart.<br />Our heroine changed the lives of many.</p>
            </Fade>
        </article>
        <article className="slogan">
          <Fade left>
          <img src={imagesHome.img2} alt="" style={{transform: `translateY(-${this.state.scroll*.06}px)`, trasition: 'transfrom .1s'}} />
          </Fade>
          <Zoom>
          <div className="slogan__grid" style={{transform: `translateY(${this.state.scroll*.01}px)`, trasition: 'transfrom .1s'}}>
            <div className="slogan__grid--item">
              <h2>La Mujer<br />mas bella</h2>
            </div>
            <div className="slogan__grid--item">
              <p>As the years went by, our beauty grew older andeventually time blossomed truth into mystery leaving
                some to wonder, what legacy did she leave behind?</p>
            </div>
          </div>
        </Zoom>
        </article>
        <Fade bottom cascade>
        <article className="link-page">
          <figure className="link-page--item">
            <img src={imagesHome.img3} alt="" />
            <figcaption>COCKTAILS</figcaption>
            <p>Discover and enjoy the greatest<br />cocktails & drinks you can prepare with<br />our Tequila.<br />It’s
              time to get creative!</p>
            <NavLink to="/cocktails">Learn more</NavLink>
          </figure>
          <figure className="link-page--item">
            <img src={imagesHome.img4} alt="" />
            <figcaption>THE PROCESS</figcaption>
            <p>Join us on a journey of how<br />Curamia® Tequila is made.<br />From the fields to your glass!.</p>
            <NavLink to="/process">Learn more</NavLink>
          </figure>
          <figure className="link-page--item">
            <img src={imagesHome.img5} alt="" />
            <figcaption>WHERE TO BUY</figcaption>
            <p>hese are the places where<br />you can find our product, so you<br />can be part of the<br />Curamia®
              Experience.</p>
            <NavLink to="/where-buy">Learn more</NavLink>
          </figure>
          {/*</Router>*/}
        </article>
        </Fade>
      </section>
      <Footer />
      {/* </Parallax> */}
    </div>
    </Scrollbar>
  );
  }
  componentDidMount(){
    window.addEventListener('DOMContentLoaded', (event) => {
      
      const parallaxElement = [...document.querySelectorAll('.react-reveal')];
      // console.log(parallaxElement);
      parallaxElement.map(el=>{
        el.addEventListener('animationend', e=>{
          el.classList.add('parallax')
        })
        if(el.dataset.factor){
          el.style.setProperty('--factor', el.dataset.factor)
        }
        return el
      })
      // parallaxElement.map(el=>this.Parall(el.dataset.factor))
      // const video = document.getElementById('video');
      // video.play();
    });
  }

}

const screenHeight = () => {
  return window.innerHeight
}
export default Home
