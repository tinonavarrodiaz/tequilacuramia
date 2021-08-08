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
      </article>
    )
  }
}
export default ArticleText