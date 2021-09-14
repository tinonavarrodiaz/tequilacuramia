import React, { Component } from "react";
import AOSInit from "../helpers/helpers";
import Header from "../components/Header"
// import Obj from "../helpers/instagramObj";

class Mujer extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: [],
    }
    
  }
  list(e){
    console.log(e)
  }
  render(){
    return(
      <div>
        <Header/>
        <section  id="instagram-posts" >
          {/* <Iframe
            url="https://snapwidget.com/embed/958272"
            width="100%"
            id="iframe-instagram"
            className="iframe-instagram"
            height="100%"
          /> */}
          {/* <iframe src="https://snapwidget.com/embed/958272" title="instagram" className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="yes" style={{border:"none",overflowX:"auto", width:"100%"}}></iframe> */}

          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="https://cdn.lightwidget.com/widgets/dc06d58e77d052628f0209b580858331.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" title="instagram" style={{width:"100%",border:0,overflow:"hidden"}}></iframe>
        </section>
      </div>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    AOSInit()
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
  }         
}

export default Mujer