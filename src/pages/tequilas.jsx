import React, { Component } from "react";
import HeaderFixed from "../components/header-fixed";
import Footer from "../components/Footer";
// import BannerHome from "../components/BannerHome";
// import PageLinks from "../components/page-links";
// import ArticleText from "../components/ArticleText";
// import ArticleBottom from "../components/bottomContent";
// import Slogan from "../components/Slogan";
import AOSInit from "../helpers/helpers";
import agave from "../assets/img/agave.jpg"
import henm from "../assets/img/hechoenmexicoa.svg"
import clm from "../assets/img/cml.png"
import separator from "../assets/img/separador.png"
import logo from "../assets/img/logo-dark.svg"
import botella from "../assets/img/botella.png"
import description from "../assets/img/description_1.png"
import notes from "../assets/img/notes.png"
import buy from "../assets/img/buynow.png"
import mark from "../assets/img/mark.svg"
// import Age from "./age"


class Tequilas extends Component  {
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
  render(){
    return (

        <div>
          {/* <Age/> */}
          <HeaderFixed />
          <div className="Tequilas">
            <div className="banner-top">
              <img data-aos="fade-in" src={agave} alt=""/>
              <h1 data-aos="zoom-in">CURAMIA THE MOST BEAUTIFUL TEQUILA</h1>
            </div>
            {/* <article data-aos="fade-right" className="Tequilas__text">
              <p>Curamia’s exceptionally smooth taste - clean, extra-soft, herbal finishes - is a result of our commitment to simplicity and sustainability, as well as authenticity and craftsmanship. Our liquid extraction model is recognized by the tequila regulatory council for its sustainability - utilizing steam and water for the purest taste (and cleanest process) possible. In short, Curamia is as beautiful on the inside as it is on the out - not an easy feat when the packaging is so stylish. Our process begins at the top of the volcano of tequila, when natural spring water trickles down the rugged cliffs to the underground wells below - natural aquifers, 70-meters beneath the earth’s surface. The volcanic soil enriches the water with essential minerals, which is  harmonized with our tequila through a proprietary process. This combination of authenticity and craftsmanship, of heritage and  innovation, is at the very heart of Curamia Tequila.</p>
            </article> */}
            <article className="ml">
              <img className="Tequilas__henm" data-aos="zoom-in" src={henm} alt=""/>
              <img className="Tequilas__cml" data-aos="zoom-in" data-delay="100" src={clm} alt=""/>
              <img className="Tequilas__separator" data-aos="zoom-in" data-delay="200"  src={separator} alt=""/>
              <img className="Tequilas__logo" data-aos="zoom-in" data-delay="300"  src={logo} alt=""/>
            </article>
            <article className="Tequilas__description">
              <div className="Tequilas__bottle-container">
                <img className="Tequilas__botella" data-aos="fade-right" src={botella} alt=""/>
              </div>
              <div className="Tequilas__notes">
              <div className="img1">
                <img className="description" data-aos="fade-left" data-aos-delay="100" src={description} alt=""/>
              </div>
              <div className="img1">
                <img className="notes" data-aos="fade-left" data-aos-delay="200" src={notes} data-delay="200" alt=""/>
              </div>
              <div class="img-buy"><img data-aos="zoom-in" data-aos-delay="300" className="buynow" src={buy} alt=""/>

              </div>
                <img className="Tequilas__mark" src={mark} alt=""/>
              </div>
            </article>
            {/* <BannerHome/>
            <ArticleText/>
            <Slogan/>
            <PageLinks/>
            <ArticleBottom pad="40px"/> */}
          </div>
          <Footer/>
        </div>
    )
  }

  componentDidMount() {
    document.body.style.setProperty('--header-color', '#fdfdfd')
    AOSInit()
  }

}

export default Tequilas