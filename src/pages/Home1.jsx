import React, { Component } from "react";
import HeaderFixed from "../components/header-fixed";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import PageLinks from "../components/page-links";
import ArticleText from "../components/ArticleText";
import ArticleBottom from "../components/bottomContent";
import Abuelabanner from "../components/Abuelabanner";
import Slogan from "../components/Slogan";
import AOSInit from "../helpers/helpers";
import Age from "./age"


class Home extends Component  {
  constructor(props){
    super(props)
    this.state = {
      scroll: 0,
    }
    this.src = this.src.bind(this)
  }
  // actualizarScroll(scro){
  //   console.log(this)
  // }
  // Parall(p){
  //   console.log(p)
  //   this.setState({factor: p})
  // }
  src(e){
    // console.log(e.offset.y)
    this.setState({scroll: e.offset.y})
    document.documentElement.style.setProperty('--scroll', e.offset.y)
    // this.setState(0)
  }
  render(){
    return (
      <div>
        <Age/>
        <div className="bodyContent">
          <HeaderFixed />
          <div className="home">
            <BannerHome/>
            <ArticleText/>
            <Abuelabanner/>
            <Slogan/>
            <PageLinks/>
            <ArticleBottom pad="40px"/>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    document.body.style.setProperty('--header-color', '#fdfdfd')
    AOSInit()
  }

}

// const screenHeight = () => {
//   return window.innerHeight
// }
export default Home