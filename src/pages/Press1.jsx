import React, { Component } from "react";
import AOSInit from "../helpers/helpers";
import Header from "../components/Header"
import axios from "axios";

// import Footer from "../components/Footer"
import "../helpers/under.scss"
// import Obj from "../helpers/instagramObj";
// const Mailto = ({ email, subject = '', body = '', children }) => {
//   let params = subject || body ? '?' : '';
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`}>{children}</a>;
// };

function Post(props){
  return(
    <div>
      <div>
        <img src={props.imh} alt=""/>
      </div>
      <div className="data">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

class Press extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
    }
    
  }
  
  render(){
    return(
      <div >
        <Header></Header>
        <div className="pressContainer" id="pressContainer">
          <p>{this.state.posts}</p>
        </div>
    </div>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    AOSInit()
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    let url = "https://curamiatequila.com/wordpress/wp-json/wp/v2/posts"
    axios.get(url)
      .then(res=>{
        res.data.forEach(element => {
          // console.log(element.id)
          // console.log(element.title.rendered)
          // console.log(element.content.rendered)
          // console.log(element.excerpt.rendered)
          // console.log(element.jetpack_featured_media_url)
          let post = {
            id:element.id,
            title:element.title.rendered,
            content:element.content.rendered,
            excerpt:element.excerpt.rendered,
            img:element.jetpack_featured_media_url
          }
          let posts = this.state.posts
          posts.push(post)
          // this.setState({posts:posts})
          this.setState({posts:post})
          console.log(posts)
        });

      })
      // console.log(this.state.posts)
  }
}

export default Press