import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Loader from "react-js-loader";
// import introText from "../assets/img/text-intro.png";
import intro from "../assets/img/intro1.jpg"
import './banner.scss'

class BannerHome extends Component {
  constructor(props) {
    super(props);
    this.state= {
      src : 'https://tinonavarrodiaz.github.io/video-curamia/8I5a0065-1.mp4'
    }
  }
  showVideo(e){
    // let buttonVideo = document.querySelector('.button-video')
    // if (buttonVideo){
    //   buttonVideo.addEventListener('click', e=>{
        console.log(e.target)
        let Modal = document.createElement('div')
        Modal.className = 'modal modal-video'
        Modal.id = 'modal-video'
        Modal.innerHTML = `
          <div class="modal-close-button"></div>
          <video id="videoM" controls>
            <source src="https://tinonavarrodiaz.github.io/video-curamia/8I5a0065-1.mp4" type="video/mp4"/>
          </video>
        `
        document.body.appendChild(Modal)
        document.body.style.overflow = 'hidden'
        // document.getElementById('videoM').play()
        Modal.addEventListener('click', e=>{
          if(e.target.nodeName!=="VIDEO"){
            Modal.remove()
            document.body.style.overflow = 'auto'
          }
        })
      // })

    }
  // }
  render() {
    return(
      <div className="banner">
        <BrowserView>
          <div className="video-container">
            {/* <p style={{color:'#fff'}}>loading</p> */}
            <Loader type="bubble-ping" bgColor={"#FFFFFF"} size={75} />
            {/* <Loader size="md" content="Medium" /> */}
            <video loop id="video" muted="muted">
              <source src={this.state.src} type="video/mp4"/>
            </video>
          </div>
        </BrowserView>
        <MobileView>
          <picture data-aos="fade-in" className="picture-banner">
            <source srcSet={intro} media="(min-width: 1024px)" />
            {/*<source srcset={imagesHome.img1} media="(min-width: 1024px)"/>*/}
            <img  src={intro} alt="" />
            <button onClick={this.showVideo} className="button-video hidden">Video</button>
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

  componentDidMount(){
    // this.showVideo()
  }
}

export default BannerHome