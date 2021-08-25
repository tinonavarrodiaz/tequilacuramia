import React, { Component } from "react";
import AOSInit from "../helpers/helpers";
import Header from "../components/Header"
// import Footer from "../components/Footer"
import "../helpers/under.scss"
// import Obj from "../helpers/instagramObj";
const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
class Press extends Component {
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
      <div className="under" >
        <Header></Header>
        <div class="press">
        <h1>Coming Soon</h1>
        <p className="press_text">For media inquiries please contact curamia at</p>
        <Mailto email="Curamia@misfittoyscomms.com" subject="" body="">
          Curamia@misfittoyscomms.com
        </Mailto>
        </div>
        {/* <Footer></Footer> */}
    </div>
    )
  }
  componentDidMount() {
    AOSInit()
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
  }         
}

export default Press