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
  playBtn(e){
    let video = e.target.parentElement.querySelector('video')
    video.play()
  }

  clickButton(e){
    console.log(e)
    let playButton = document.getElementById('playButton')
    console.log(playButton)
    playButton.click()

  }

  videoLoaded(e){
    console.log('video cargado')
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
            <video autoPlay playsInline disablePictureInPicture loop id="video">
              <source src={video} type="video/mp4"/>
            </video>
            
          </div>
        </BrowserView>
        <MobileView>
          <div className="video-mobile">
            <video loop autoPlay muted="muted" id="videoMobile" playsInline disablePictureInPicture src="https://tinonavarrodiaz.github.io/video-curamia/curamia-mobile-final.mp4"></video>
            {/* <button id="playButton" >play</button> */}
          </div>
        </MobileView>
        <div className="text-con" >
          <h1 className="intro-title">LA MUJER MAS BELLA</h1>
        </div>
        <BrowserView>
        <div onClick={this.mute} className="audio-icon">
            <img src={audioIcon} alt=""/>
        </div>
        </BrowserView>
      </div>
    )
  }

  componentDidMount(){
    // const click = (video)=>{
    //   console.log(video)
    //   video.play()
    // }
    // window.addEventListener('DOMContentLoaded', e=>{
    //   // alert('cargado')
    //   let playButton = document.getElementById('playButton')
    //   let video = document.getElementById('videoMobile')
    //   if(playButton&&video){
    //     playButton.addEventListener('click', e=>{
    //       click(video)
    //     })
    //   }
    //   playButton.click()
    // })
  }
}

export default BannerHome