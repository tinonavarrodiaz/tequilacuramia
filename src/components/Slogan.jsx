import React, {Component} from "react";
// import imagesHome from "../assets/images_home";

class Slogan extends Component {
  render() {
    return (
      <article className="slogan">
          {/* <img src={imagesHome.img2} alt="" data-aos="zoom-in"/> */}
          <div className="slogan__grid" >
            
            <div className="slogan__grid--item">
              <h2 data-aos="fade-right" >La Mujer<br />mas bella</h2>
            </div>
          </div>
      </article>
    )
  }
}
export default Slogan