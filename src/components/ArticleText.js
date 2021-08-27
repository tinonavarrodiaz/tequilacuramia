import React, {Component} from "react";
import imagesHome from "../assets/images_home";

class ArticleText extends Component {
  render() {
    return (
      <article className="article-text home__text">
        
          <img src={imagesHome.svg} alt="Hecho en Mexico" data-aos="zoom-in"/>
        {/* </div> */}
          <p style={{marginTop: '50px'}} data-aos="fade-right">Many generations ago, the most beautiful lady in Mexico was born in Jalisco. The town could not stop talking about her beauty. It is said that her physical fairness paled in comparison to her charitable and unselfish heart.Our heroine changed the lives of many. As the years went by, her beauty grew older and eventually time evolved truth into mystery, leaving some to wonder what was her legacy. She was known as “La mujer más bella” or the most beautiful woman.</p>
            <p className="slogan__text" data-aos="fade-left" >She is our inspiration. She is also our founder’s abuela, a unique vibrant spirit that was larger than life and a force in Guadalajara, the heart of Tequila.  Today, as one of the few female-founded tequila brands--an uncommon thing in the spirits world--it is her driven spirit that guides us. “La mujer más bella” lit up a room with her bright smile and made everyone feel like family with her incredible flair. This is also Curamia’s mission and we hope that you join us on this journey. This is her legacy.</p>
      </article>
    )
  }
}
export default ArticleText