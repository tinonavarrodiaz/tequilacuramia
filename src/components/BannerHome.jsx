import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Loader from "react-js-loader";
import imagesHome from "../assets/images_home";
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
            <h1>A DELICATE<br />BALANCE</h1>
            <h2>Of excelence, beauty, wellness &<br />great memories.</h2>
          </div>
        </MobileView>
      </div>
    )
  }
}

export default BannerHome