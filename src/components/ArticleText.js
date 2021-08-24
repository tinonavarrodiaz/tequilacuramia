import React, {Component} from "react";
import imagesHome from "../assets/images_home";

class ArticleText extends Component {
  render() {
    return (
      <article className="article-text home__text">
        
          <img src={imagesHome.svg} alt="Hecho en Mexico" data-aos="zoom-in"/>
        {/* </div> */}
          <p style={{marginTop: '50px'}} data-aos="fade-right">Many generations ago, the most beautiful lady in Mexico was born. The town
            couldn’t stop talking about her beauty.<br />It is said that her physical fairness paled in comparison to
            her charitable and unselfish heart.<br />Our heroine changed the lives of many.</p>
            <p className="slogan__text" data-aos="fade-left" >As the years went by, our beauty grew older andeventually time blossomed truth into mystery leaving
                some to wonder, what legacy did she leave behind</p>
      </article>
    )
  }
}
export default ArticleText