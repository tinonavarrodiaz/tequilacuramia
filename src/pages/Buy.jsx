import React, {Component} from "react";
import Header from "../components/Header";
import imagesHome from '../assets/images_home';
import AOSInit from "../helpers/helpers";

import mapa from "../assets/img/map.jpg";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      message: null
    }
  }
  sendForm = (e) => {
    e.preventDefault()
    // const form = e.target
    
  }
  scrollT(){
    console.log('load')
    window.scrollTo(0,0)
  }
  render() {
    return(
      // <Scrollbar
      //   alwaysShowTracks
      //   onScroll={this.src}
      //   plugins={{
      //     overscroll: {
      //       effect: "glow"
      //     }
      //   }}
      // >
        <div className="over" onLoad={this.scrollT} style={{overflow: "hidden" }}>
          <Header />
          <section className="section contact Buy">
            <div className="contact-grid">
              <div className="sidebar">
                <h2 className="section__title" data-aos="fade-right">FIND CURAMIA</h2>
                <p style={{width: '70%', lineHeight: '1.1'}}>These are the places where
                  you can find our product,
                  so you can be part of the
                  Curamia® Experience.
                </p>
                <form  className="formBuy" action="" style={{width: '70%', lineHeight: '1.1'}} data-aos="fade-left">
                  <div className="input-group-search">
                    <label htmlFor="SearchLocation">Search Location:</label>
                    <input type="search" id="SearchLocation"/>
                  </div>
                  <div className="input-group-search">
                    <label htmlFor="SearchLocation">Radius:</label>
                    <select type="search" id="SearchLocation">
                      <option value="20">20kms</option>
                      <option value="40">40kms</option>
                      <option value="60">60kms</option>
                    </select>
                  </div>
                  <div className="radio-group-search">
                    <input type="radio" id="radio1" name="type"/>
                    <label htmlFor="radio1">Bars / Restaurants</label>
                    <img src={imagesHome.down} alt=""/>
                  </div>
                  <div className="radio-group-search">
                    <input type="radio" id="radio2" name="type"/>
                    <label htmlFor="radio2">Where to buy</label>
                    <img src={imagesHome.downL} alt=""/>
                  </div>
                  <button type="button" className="button-search">Search</button>
                </form>
              </div>
              <div className="buy">
                <div className="map">
                  <img src={mapa} data-aos="zoom-in" alt="map"/>
                  <p >If you stock CURAMIA and would like to be included in our stocklist map, please email us here</p>
                </div>
              </div>
            </div>
          </section>
          {/*<Footer/>*/}
        </div>
      // </Scrollbar>
    )
  }
  componentDidMount() {
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    AOSInit()
    window.addEventListener('DOMContentLoaded', e=>{

    })
  }
}
// const screenHeight = () => {
//   return window.innerHeight
// }

export default Buy
