import React, { Component } from "react";
import Iframe from "react-iframe"
import AOSInit from "../helpers/helpers";
import Header from "../components/Header"
// import Obj from "../helpers/instagramObj";

class Mujer extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: [],
      title: "Hola Mundo",
    }
    
  }
  list(e){
    console.log(e)
  }
  render(){
    return(
      <div>
        <Header/>
        <section  id="instagram-posts">
          {/* <Iframe
            url="https://snapwidget.com/embed/958272"
            width="100%"
            id="iframe-instagram"
            className="iframe-instagram"
            height="100%"
          /> */}
          <iframe src="https://snapwidget.com/embed/958272" className="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="yes" style={{border:"none", height: "80vh",overflowX:"auto", width:"100%"}}></iframe>
        </section>
      </div>
    )
  }
  componentDidMount() {
    AOSInit()
    
  }         
}

export default Mujer