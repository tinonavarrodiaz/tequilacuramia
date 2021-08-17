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
            <div className="slogan__grid--item">
              <p className="slogan__text" data-aos="fade-left" >As the years went by, our beauty grew older andeventually time blossomed truth into mystery leaving
                some to wonder, what legacy did she leave behind?</p>
            </div>
          </div>
      </article>
    )
  }
}
export default Slogan