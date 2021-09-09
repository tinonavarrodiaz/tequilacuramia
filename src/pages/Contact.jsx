import React, {Component} from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import AOSInit from "../helpers/helpers";
import loadig from "../assets/img/loading4.svg"
import axios from "axios";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      message: null
    }
  }
  sendForm = (e) => {
    e.preventDefault()
    const Target = e.target
    const data = new FormData(Target)
    const url = Target.action
    // const method = Target.method
    const button =  Target.querySelector('button')
    // const input =  [...Target.querySelectorAll('input, textarea')]
    button.innerHTML=`<img src="${loadig}">`
    console.log(url)
     const authOptions = {
      method: 'POST',
      url: url,
      data: data,
      headers: {
        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    }
    axios(authOptions)
      .then(response=>{
        console.log(response.data)
        let res = response.data
        if(res.status==='ok'){
          button.innerHTML="Sent"
          button.setAttribute('disabled', 'disabled')
          Array.from(Target.querySelectorAll('input, textarea')).map(el=>el.setAttribute('readonly', 'readonly'))
          this.setState({
            success: "success",
            message: res.msg
          })
        }else{
          button.innerHTML="Submit"
          this.setState({
            success: "error",
            message: res.msg
          })
        }
      })
      .catch(err=>{
        button.innerHTML="Submit"
        this.setState({
          success: "error",
          message: "An error occurred. Please try again late"
        })
      })
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
        <div className="over over-contact" style={{overflow: "hidden" }}>
          <Header />
          <section className="section contact">
            <div className="contact-grid">
              <div className="sidebar">
                <h2 className="section__title" data-aos="fade-right">Contact US</h2>
              </div>
              <div className="contact__container cc">
                <form action="https://curamiatequila.com/php/send.php" method="post" className="contact__form cf" onSubmit={this.sendForm} data-aos="fade-left">
                  <p className="formText">Leave your comment.</p>
                  <div className="input-group textarea">
                    <textarea name="message" id="message" required></textarea>
                  </div>
                  <p className="formText">Let us know how we can reach out.</p>
                  <div className="input-group">
                    <input type="text" name="name" id="name" placeholder="Full Name" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"/>
                  </div>
                  <div className="input-group">
                    <input type="email" name="email" placeholder="Email Address" id="email" required />
                  </div>
                  <div className="input-group">
                    <input type="text" name="how" id="how" required placeholder="How did you hear about us?"/>
                  </div>
                  <div className="notes" >
                    <button className="btn btn-submit" type="submit">Submit</button>
                    <p className={this.state.success} id="msg">{this.state.message}</p>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/*<Footer/>*/}
        </div>
      // </Scrollbar>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    AOSInit()
    window.addEventListener('DOMContentLoaded', e=>{

    })
  }
}


export default Contact