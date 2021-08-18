import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import Loader from "react-js-loader";
// import introText from "../assets/img/text-intro.png";
import intro from "../assets/img/intro1.jpg"
import './banner.scss'
import audioIcon from "../assets/img/bocina.png"
import video from "../assets/videofinal.mp4"
class BannerHome extends Component {
  constructor(props) {
    super(props);
    this.state= {
      src : 'https://tinonavarrodiaz.github.io/video-curamia/Videofinal-1.mp4'
    }
  }
  mute(e){
    let Target = e.target;
    let video = document.getElementById('video')
    if (Target.nodeName==="IMG"){
      Target.parentElement.classList.toggle('off')
    }else{
      Target.classList.toggle('off')
    }
    if(document.querySelector('.audio-icon').classList.contains('off')){
      video.muted= true
    }else{
      video.muted= false
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
            <source src="https://tinonavarrodiaz.github.io/video-curamia/8I5a0065-movil.mp4" type="video/mp4"/>
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
            <video loop id="video">
              <source src={video} type="video/mp4"/>
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
        <BrowserView>
        <div className="text-con" >
          <h1 className="intro-title">LA MUJER MAS BELLA</h1>
        </div>
        <div onClick={this.mute} className="audio-icon">
            <img src={audioIcon} alt=""/>
        </div>
        </BrowserView>
      </div>
    )
  }

  componentDidMount(){
    // this.showVideo()
  }
}

export default BannerHome