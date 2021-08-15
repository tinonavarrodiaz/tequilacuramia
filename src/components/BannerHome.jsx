import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Loader from "react-js-loader";
// import introText from "../assets/img/text-intro.png";
import intro from "../assets/img/intro.jpg"
import './banner.scss'

class BannerHome extends Component {
  render() {
    return(
      <div className="banner">
        <BrowserView>
          <div className="video-container">
            {/* <p style={{color:'#fff'}}>loading</p> */}
            <Loader type="bubble-ping" bgColor={"#FFFFFF"} size={75} />
            {/* <Loader size="md" content="Medium" /> */}
            <video autoPlay loop id="video" muted="muted">
              <source src="https://tinonavarrodiaz.github.io/video-curamia/8I5a0065-1.mp4" type="video/mp4"/>
            </video>
          </div>
        </BrowserView>
        <MobileView>
          <picture data-aos="fade-in" className="picture-banner">
            <source srcSet={intro} media="(min-width: 1024px)" />
            {/*<source srcset={imagesHome.img1} media="(min-width: 1024px)"/>*/}
            <img  src={intro} alt="" />

          </picture>

          {/* <div className="text-con" >
            <img  data-aos="fade-left" className="text-intro" src={introText} alt="" />
          <img src={introText} alt=""> */}
            {/* <h1 className="intro-title">A DELICATE<br />BALANCE</h1>
            <h2 className="intro-subtitle">Of excelence, beauty, wellness &<br />great memories.</h2> */}
          {/* </div> */}
        </MobileView>
        <div className="text-con" >
          <h1 className="intro-title">LA MUJER MAS BELLA</h1>
        </div>
      </div>
    )
  }
}

export default BannerHome