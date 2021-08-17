// import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import text from "../assets/img/botomText.png"
import find from "../assets/img/btn-findus.png"
import order from "../assets/img/btn-order.png"
import textAlt from "../assets/img/botomText-alt.png"
import findAlt from "../assets/img/btn-findus-alt.png"
import orderAlt from "../assets/img/btn-order-alt.png"
import "./bottomContent.scss";

// class ArticleBottom extends Component {
const ArticleBottom = (props)=>{
  let imgtext
  let imgfind
  let imgorder
  if (props.alt==="true"){
    imgtext = textAlt
    imgfind = findAlt
    imgorder = orderAlt
  }else{
    imgtext = text
    imgfind = find
    imgorder = order
  }

  return(
    <div className="bottomContent" style={{background: props.back, "--mbot":props.pad}}>
      <img src={imgtext} className="textbutton" alt="" data-aos="fade-right"/>
      <div className="buttonCB">
        <NavLink to="/where-buy" className="btnlin1"><img src={imgfind} data-aos="zoom-in" className="buttom-btn btn-find" alt="" /></NavLink>
        <img src={imgorder} data-aos="zoom-in" className="btnlin1 buttom-btn btn-order" alt="" />
      </div>
    </div>
  )
}

export default ArticleBottom