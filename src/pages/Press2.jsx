import React, { Component } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Rolling from "../assets/img/Rolling.svg"

function Post(id,title,excerpt,content,img){
  let fr = document.createElement("div");
  fr.className="post";
  // fr.setAttribute('data-img',img)
  // fr.setAttribute('data-title',title)
  // fr.setAttribute('data-content',content)
  fr.innerHTML = `
    <div class="img-conteiner">
      <img src=${img} alt=""/>
    </div>
    <div class="data">
      <h2>${title}</h2>
      <p>${excerpt}</p>
      <button data-img="${img}" data-title="${title}" data-content="${content}" data-title-type="${title}" class="button-modal">See More</button>
    </div>
  `
  return fr
}

const showModal = (T) =>{
  // alert('hola')
  const data= T.dataset
  console.log(data.img)
  const modal =document.createElement('div')
  modal.className="modal"
  modal.innerHTML=`
    <div class="modal__container">
      <div class="modal-close"></div>
      <img src="${data.img}" alt="">
      <h2>${data.title}</h2>
      <p>${data.content}</p>
    </div>
  `
  document.body.appendChild(modal)
  modal.addEventListener('click', e=>{
    let t = e.target
    console.log(t)
    if(t.classList.contains('modal') || t.classList.contains('modal-close')){
      modal.remove()
    }
  })
}

const showResponse = (post)=>{
  const pressContainer = document.getElementById('press-container')
  document.getElementById('loadingC').remove()
  let frament = document.createDocumentFragment()
  frament.appendChild(Post(post.id,post.title,post.excerpt,post.content,post.img))
  pressContainer.appendChild(frament)
  document.addEventListener('click', e=>{
    let Target = e.target
    if (Target.nodeName==="BUTTON"){
      // alert('hola')
      showModal(Target)
    }
  })
}

export default class Prees extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0)
    // AOSInit()
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
          showResponse(post)
        });

      })
  }
  render() { 
    return(
      <>
        <Header/>
        <div className="press-container" id="press-container">
          <div className="loadingC" id="loadingC">
            <img src={Rolling} alt=""/>
          </div>
        </div>
      </>
    )
  }
}