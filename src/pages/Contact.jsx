import React, {Component} from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import AOSInit from "../helpers/helpers";
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
    // const form = e.target
    
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
                <form action="https://nh-digital.mx/curamia/send.php" method="post" className="contact__form cf" onSubmit={this.sendForm} data-aos="fade-left">
                  <p className="formText">Leave your comment.</p>
                  <div className="input-group textarea">
                    <textarea name="message" id="message"></textarea>
                  </div>
                  <p className="formText">Let us know how we can reach out.</p>
                  <div className="input-group">
                    <input type="text" name="name" id="name" placeholder="Full Name"/>
                  </div>
                  <div className="input-group">
                    <input type="mail" name="email" id="email" placeholder="Email Address"/>
                  </div>
                  <div className="input-group">
                    <input type="text" name="how" id="how" placeholder="How did you hear about us?"/>
                  </div>
                  <div className="notes" >
                    <button className="btn btn-submit" type="submit">Submit</button>
                    <p className={this.state.success} id="notes">{this.state.message}</p>
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
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    AOSInit()
    window.addEventListener('DOMContentLoaded', e=>{

    })
  }
}


export default Contact