import React, {Component} from "react";
import Header from "../components/Header";
import AOSInit from "../helpers/helpers";
// import imagesHome from '../assets/images_home';
import ImagesCocktails  from "../assets/images-cocktails"
import {BrowserView, MobileView} from "react-device-detect";

class Cocktails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      message: null
    }
    this.slide = this.slide.bind(this)
  }
  // sendForm = (e) => {
  //   e.preventDefault()
  //   const form = e.target

  // }
  slide(){
    console.log("slider")
    let bull = [...document.querySelectorAll('.bullets li')]
    let cocktails = [...document.querySelectorAll('.cocktail')]
    let total = cocktails.length
    // let but = document.querySelector('.btn-next')
    cocktails.map(el=>el.addEventListener('click', function(){
      let index = cocktails.indexOf(el)
      bull.map(el=>el.classList.remove('active'))
      cocktails.map(el=>el.classList.remove('active'))
      if (index === total - 1){
        cocktails[0].classList.add('active')
        bull[0].classList.add('active')
      }else{
        cocktails[index+1].classList.add('active')
        bull[index+1].classList.add('active')
      }
    }))
    // but.addEventListener('click', e=>{
    //   cocktails.click()
    // })
  }

  bullActive = (e) =>{
    let Target = e.target
    let index = parseInt(Target.dataset.index)
    let cocktails = [...Target.parentElement.parentElement.querySelectorAll('.cocktail')]
    let bullets = [...Target.parentElement.querySelectorAll('li')]
    // console.log(bullets)
    cocktails.map(el=>el.classList.remove('active'))
    cocktails[index].classList.add('active')
    bullets.map(el=>el.classList.remove('active'))
    Target.classList.add('active')
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
      <div>
        <BrowserView>
          <div className="over over-cocktails" style={{overflow: "hidden" }}>
            <Header />
            <section className="section contact Cocktails">
              <div className="contact-grid">
                <div className="sidebar">
                  <h3 data-aos="fade-left">Stay Creative</h3>
                  <h2 className="section__title" data-aos="fade-right">COCKTAILS</h2>

                </div>
                <div className="buy" id="sliderNH">
                
                  <ul className="bullets" id="bullets">
                    <li onClick={this.bullActive} data-index="0" className="active"></li>
                    <li onClick={this.bullActive} data-index="1"></li>
                    <li onClick={this.bullActive} data-index="2"></li>
                    <li onClick={this.bullActive} data-index="3"></li>
                    <li onClick={this.bullActive} data-index="4"></li>
                    <li onClick={this.bullActive} data-index="5"></li>
                    <li onClick={this.bullActive} data-index="6"></li>
                    <li onClick={this.bullActive} data-index="7"></li>
                    <li onClick={this.bullActive} data-index="8"></li>
                  </ul>
                  <div className="map cocktail active">
                    <button className="btn-next">Next</button>
                    <div className="img" >
                      <img src={ImagesCocktails.img1} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name" >ESTELA</h2>
                      <ul className="receta">
                        <li>- Coarse salt, for optional rim</li>
                        <li>- 1 ½ ounces Curamia Tequila</li>
                        <li>- ½ ounce fresh lime juice</li>
                        <li>- ½ ounce fresh lemon juice</li>
                        <li>- ½ ounce fresh grapefruit juice</li>
                        <li>- 2 ounce club soda</li>
                        <li>- Lemon, lime and orange wedge for garnish</li>

                      </ul>
                    </div>
                  </div>
                  <div className="map cocktail ">
                    <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img2} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">MARGARITA PICANTE</h2>
                      <ul className="receta">
                        <li>- 2oz Curamia Tequila</li>
                        <li>- 1oz Lime Juice</li>
                        <li>- .5oz Chili infused Aperol</li>
                        <li>- .5oz Agave </li>
                        <li>- Top off with Topo Chico</li>
                        <li>- Garnish: Lime/Pink Salt</li>
                      </ul>
                    </div>
                  </div>
                  <div className="map cocktail ">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img3} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">PALOMA</h2>
                      <ul className="receta">
                        <li>- 2oz Curamia Tequila</li>
                        <li>- 1oz Fresh Grapefruit Juice </li>
                        <li>- .5oz Lime Juice</li>
                        <li>- .5oz Simple syrup </li>
                        <li>- 2-3oz Club Soda</li>
                        <li>- Garnish : Salted rim/slice grapefruit/pepper</li>
                      </ul>
                    </div>
                  </div>
                  <div className="map cocktail">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img4} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">MARIA</h2>
                      <ul className="receta">
                        <li>- 1 cup Curamia Tequila</li>
                        <li>- 1/4 cup Lime Juice</li>
                        <li>- ½ cup Elderflower Liquor</li>
                        <li>- ¼ cup Orgeat</li>
                        <li>- 1btl Floral White Wine</li>
                        <li>- Fresh Mint</li>
                        <li>- Honeydew, cantaloupe, watermelon</li>
                        <li>- Garnish: Fresh Mint Sprig</li>

                      </ul>
                    </div>
                  </div>
                  <div className="map cocktail ">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img5} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">TROPICO</h2>
                      <ul className="receta">
                        <li>- 1.5oz Curamia Tequila</li>
                        <li>- .5oz Lime Juice</li>
                        <li>- 1oz Crème de Coconut</li>
                        <li>- 1oz Mango Puree</li>
                        <li>- 2oz Ginger Beer</li>
                        <li>- Garnish: Mago (fresh or dried)/coconut </li>

                      </ul>
                    </div>
                  </div>
                  
                  <div className="map cocktail ">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img6} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">JULIANA</h2>
                      <ul className="receta">
                        <li>- 1.5oz Curamia Tequila</li>
                        <li>- .5oz Lime Juice</li>
                        <li>- 2oz Watermelon Juice/Puree</li>
                        <li>- .5oz Rosewater Agave</li>
                        <li>- Garnish: Dried ose petals/watermelon</li>
                      </ul>
                    </div>
                  </div>
                  
                  
                  <div className="map cocktail ">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img7} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">VIOLETA</h2>
                      <ul className="receta">
                        <li>- 1.5oz Curamia Tequila</li>
                        <li>- 4oz Homemade Lemonade</li>
                        <li>- .75oz Hibiscus Syrup</li>
                        <li>- Blueberry, Raspberry Strawberry, Blackberry</li>
                        <li>- Garnish:  fresh cut & whole small berries in glass</li>
                      </ul>
                    </div>
                  </div>
                  <div className="map cocktail ">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img8} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">LA PIÑA</h2>
                      <ul className="receta">
                        <li>- Pineapple-Honey Sour</li>
                        <li>- 2oz Curamia Tequila</li>
                        <li>- .75oz Honey Syrup</li>
                        <li>- .75oz Lemon Juice</li>
                        <li>- 1 egg white or vegan substitution</li>
                        <li>- .5oz Pineapple Juice</li>
                        <li>- Garnish: Fresh cut pineapple half/quarter with rind</li>
                        <li>- Freshly grated cinnamon garnish</li>
                      </ul>
                    </div>
                  </div>
                  <div className="map cocktail ">
                  <button className="btn-next">Next</button>
                    <div className="img">
                      <img src={ImagesCocktails.img9} alt=""/>
                    </div>
                    <div className="cocktail-text">
                      <h2 className="cocktail-name">JALISCO BREW</h2>
                      <ul className="receta">
                        <li>- 2oz Curamia Tequila</li>
                        <li>- .5oz Chocolate Liquor</li>
                        <li>- .25oz Cream</li>
                        <li>- 3oz Cold Brew</li>
                        <li>- .5oz Habenero Simple</li>
                        <li>- Garnish: Dried Habanero/Flat Foam</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<Footer/>*/}
          </div>
        </BrowserView>
        <MobileView>
          <div className="over-cocktails-mobile" style={{minHeight: "100vh",background: "#EEEAE6" }}>
            <Header />
            <section className="Cocktails-mobile">
              <div className="cocktail-mobile">
                <div className="img" data-aos="zoom-in" >
                  <img src={ImagesCocktails.img1} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left" >ESTELA</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- Coarse salt, for optional rim</li>
                    <li>- 1 ½ ounces Curamia Tequila</li>
                    <li>- ½ ounce fresh lime juice</li>
                    <li>- ½ ounce fresh lemon juice</li>
                    <li>- ½ ounce fresh grapefruit juice</li>
                    <li>- 2 ounce club soda</li>
                    <li>- Lemon, lime and orange wedge for garnish</li>

                  </ul>
                </div>
              </div>
              <div className="cocktail-mobile ">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img2} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">MARGARITA PICANTE</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 2oz Curamia Tequila</li>
                    <li>- 1oz Lime Juice</li>
                    <li>- .5oz Chili infused Aperol</li>
                    <li>- .5oz Agave </li>
                    <li>- Top off with Topo Chico</li>
                    <li>- Garnish: Lime/Pink Salt</li>
                  </ul>
                </div>
              </div>
              <div className="cocktail-mobile ">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img3} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">PALOMA</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 2oz Curamia Tequila</li>
                    <li>- 1oz Fresh Grapefruit Juice </li>
                    <li>- .5oz Lime Juice</li>
                    <li>- .5oz Simple syrup </li>
                    <li>- 2-3oz Club Soda</li>
                    <li>- Garnish : Salted rim/slice grapefruit/pepper</li>
                  </ul>
                </div>
              </div>
              <div className="cocktail-mobile">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img4} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">MARIA</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 1 cup Curamia Tequila</li>
                    <li>- 1/4 cup Lime Juice</li>
                    <li>- ½ cup Elderflower Liquor</li>
                    <li>- ¼ cup Orgeat</li>
                    <li>- 1btl Floral White Wine</li>
                    <li>- Fresh Mint</li>
                    <li>- Honeydew, cantaloupe, watermelon</li>
                    <li>- Garnish: Fresh Mint Sprig</li>

                  </ul>
                </div>
              </div>
              <div className="cocktail-mobile ">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img5} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">TROPICO</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 1.5oz Curamia Tequila</li>
                    <li>- .5oz Lime Juice</li>
                    <li>- 1oz Crème de Coconut</li>
                    <li>- 1oz Mango Puree</li>
                    <li>- 2oz Ginger Beer</li>
                    <li>- Garnish: Mago (fresh or dried)/coconut </li>

                  </ul>
                </div>
              </div>
              
              <div className="cocktail-mobile ">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img6} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">JULIANA</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 1.5oz Curamia Tequila</li>
                    <li>- .5oz Lime Juice</li>
                    <li>- 2oz Watermelon Juice/Puree</li>
                    <li>- .5oz Rosewater Agave</li>
                    <li>- Garnish: Dried ose petals/watermelon</li>
                  </ul>
                </div>
              </div>
              
              
              <div className="cocktail-mobile ">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img7} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">VIOLETA</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 1.5oz Curamia Tequila</li>
                    <li>- 4oz Homemade Lemonade</li>
                    <li>- .75oz Hibiscus Syrup</li>
                    <li>- Blueberry, Raspberry Strawberry, Blackberry</li>
                    <li>- Garnish:  fresh cut & whole small berries in glass</li>
                  </ul>
                </div>
              </div>
              <div className="cocktail-mobile ">
                <div className="img" data-aos="zoom-in">
                  <img src={ImagesCocktails.img8} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">LA PIÑA</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- Pineapple-Honey Sour</li>
                    <li>- 2oz Curamia Tequila</li>
                    <li>- .75oz Honey Syrup</li>
                    <li>- .75oz Lemon Juice</li>
                    <li>- 1 egg white or vegan substitution</li>
                    <li>- .5oz Pineapple Juice</li>
                    <li>- Garnish: Fresh cut pineapple half/quarter with rind</li>
                    <li>- Freshly grated cinnamon garnish</li>
                  </ul>
                </div>
              </div>
              <div className="cocktail-mobile ">
                <div className="img">
                  <img src={ImagesCocktails.img9} alt=""/>
                </div>
                <div className="cocktail-text-mobile">
                  <h2 className="cocktail-name-mobile" data-aos="fade-left">JALISCO BREW</h2>
                  <ul className="receta-mobile" data-aos="fade-right">
                    <li>- 2oz Curamia Tequila</li>
                    <li>- .5oz Chocolate Liquor</li>
                    <li>- .25oz Cream</li>
                    <li>- 3oz Cold Brew</li>
                    <li>- .5oz Habenero Simple</li>
                    <li>- Garnish: Dried Habanero/Flat Foam</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </MobileView>
      </div>
      // </Scrollbar>
    )
  }
  
  componentDidMount() {
    console.log('componentDidMount')
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    this.slide()
    AOSInit()
    window.addEventListener('DOMContentLoaded', e => {
      console.log('DOMContentLoaded')
    })
  }
}
// const bulls = (cocktails) => {
//   console.log(cocktails)
//   // return window.innerHeight
// }

export default Cocktails
