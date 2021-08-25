import React, { Component } from "react";
// import imagesHome from "../assets/images_home";
import {NavLink} from "react-router-dom";
// import valvula from "../assets/img/valvula1.jpg";
import coctel from "../assets/img/cantarito.jpg";
import agave2 from "../assets/img/agave3.jpg";
import mapa from "../assets/img/mapa1.jpg";


class PageLinks extends Component{
  render() {
    return (
      <article className="link-page">
        <figure className="link-page--item" data-aos="fade-right" data-aos-offset="300">
          <img src={coctel} alt="" />
          <figcaption>COCKTAILS</figcaption>
          <p>Discover delicious and refreshing cocktails<br/>you can prepare with our Tequila.<br />It’s
            time to get creative!</p>
          <NavLink to="/cocktails">Learn more</NavLink>
        </figure>
        <figure className="link-page--item" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="300">
          <img src={agave2} alt="" />
          <figcaption>THE PROCESS</figcaption>
          <p>Join us on a journey of how<br />Curamia® Tequila is made.<br />From the fields to your glass!.</p>
          <NavLink to="/process">Learn more</NavLink>
        </figure>
        <figure className="link-page--item" data-aos="fade-left" data-aos-delay="200" data-aos-offset="300">
          <img src={mapa} alt="" />
          <figcaption>WHERE TO BUY</figcaption>
          <p>These are the places where<br />you can find our product, so you<br />can be part of the<br />Curamia®
            Experience.</p>
          <NavLink to="/where-buy">Learn more</NavLink>
        </figure>
      </article>
    )
  }
}

export default PageLinks