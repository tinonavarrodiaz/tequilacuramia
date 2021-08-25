import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import henm from "../assets/img/henm-light.svg"
import logoAccss from "../assets/img/logo-access.svg"
// import logoAlt from "../assets/img/logo-alt.svg"
import no from "../assets/img/no.png"
import yes from "../assets/img/yes.png"
import leyendaBig from "../assets/img/leyenda-big.png"
import leyendaSmall from "../assets/img/leyenda-small.png"
import 'rsuite/dist/styles/rsuite-default.css';
import { Checkbox } from 'rsuite'

class Age extends Component {
  constructor(props) {
    super(props);
    this.state= {
      showAcces: "hidden",
      check: false
    }
    this.load = this.load.bind(this);
    this.click = this.click.bind(this);
    this.check = this.check.bind(this);
  }
  load(e){
    console.log(sessionStorage.getItem("access"))
    if(!sessionStorage.getItem("access")){

      this.setState({showAcces: "show"})
      document.body.style.overflowY='hidden'
    }else{
      document.querySelector('.bodyContent').style.opacity="1"
      if (document.querySelector('#video')) document.querySelector('#video').play()
      // let bv = document.querySelector('.button-video')
      // if (bv && !document.querySelector('#modal-video')){bv.click()}
    }
  }
  click(e){
    console.log(e.target.dataset.action)
    if(e.target.dataset.action==="yes"){
      this.setState({showAcces: "hidden"})
      document.body.style.overflowY='auto'
      let bv = document.querySelector('.button-video')
      if (bv && !document.querySelector('#modal-video')){bv.click()}
      document.querySelector('.bodyContent').style.opacity="1"
      if (document.querySelector('#video')) document.querySelector('#video').play()
      if (this.state.check) sessionStorage.setItem('access','true')
      window.scrollTo(0,0)
    }
  }
  
  check(e){
    !this.state.check ? this.setState({check:true}) : this.setState({check:false}) 

  }

  render() {
    return (
      <div onLoad={this.load} className={`access ${this.state.showAcces}`} style={{background: "var(--color-main)"}}>

        <img src={henm} className="henm" alt=""/>
        <img src={logoAccss} className="logoAccss" alt=""/>
        <BrowserView>
          <img src={leyendaBig} className="leyenda" alt=""/>
        </BrowserView>
        <MobileView>
          <img src={leyendaSmall} className="leyenda" alt=""/>
        </MobileView>

        <div className="button-cont">
          <button onClick={this.click} data-action="yes"><img src={yes} data-action="yes" alt="" /></button>
          <button onClick={this.click} data-action="no"><img src={no} data-action="no" alt="" /></button>
        </div>
        <Checkbox onClick={this.check} checked={this.state.check}> Remember me on this device</Checkbox>
        {/* <img src={logoAlt} className="logoAlt" alt=""/> */}
      </div>
    )
  }
  componentDidMount() {
    // let accessStorage = sessionStorage.getItem('access')
    // console.log(accessStorage)
    // this.setState({show:"ni-madres"})
    // // if (accessStorage===null){
    // //   this.setState({show:"false"})
    // // }else{
    // // }
    // console.log(this.state.show)
  }
}

export default Age