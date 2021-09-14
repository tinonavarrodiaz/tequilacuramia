import React, {Component} from "react";
import Header from "../components/Header";
import imagesHome from '../assets/images_home';
import AOSInit from "../helpers/helpers";
// import axios from "axios";
import json from '../assets/json/stores.json'
import GoogleMaps from "simple-react-google-maps"
import GoogleMapReact from 'google-map-react';
import mapa from "../assets/img/map.jpg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
let zoom = 10,
  lat= sessionStorage.getItem('lat'),
  lng= sessionStorage.getItem('lng')
class Buy extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      success: null,
      message: null,
      zoom: !sessionStorage.getItem('zoom') ? 12 : sessionStorage.getItem('zoom') * 1,      
      center: {
        lat: !sessionStorage.getItem('lat') ? 40.7127281 : sessionStorage.getItem('lat') * 1,
        lng: !sessionStorage.getItem('lng') ? -74.0060152: sessionStorage.getItem('lng')  * 1
      },
      zip : !sessionStorage.getItem('zip') ? null : sessionStorage.getItem('zip'),
      address : !sessionStorage.getItem('address') ? null : sessionStorage.getItem('address')
    }
  }
  sendForm = (e) => {
    e.preventDefault()
    // const form = e.target
    
  }
  scrollT(){
    // console.log('load')
    window.scrollTo(0,0)
  }
  listDraw(store){
      const listStore = document.getElementById('listStore');
      const li = document.createElement('li');
      li.innerText=store.addrees
      li.setAttribute('data-address', store.addrees)
      li.setAttribute('data-lat', store.lat)
      li.setAttribute('data-lng', store.lng)
      listStore.appendChild(li)
  }
  search(e){
    e.preventDefault()
    const Target = e.target
    console.log(Target.querySelector('#SearchLocation').value)
    const inputSearch = Target.querySelector('#SearchLocation').value.toUpperCase()
    const listStore = document.getElementById('listStore');
    if (inputSearch.length > 0) {
      json.map(el=>{
        let address = el.addrees.toUpperCase()
        if (address.includes(inputSearch)){
          const li = document.createElement('li');
          li.innerText=el.addrees
          li.setAttribute('data-address', el.addrees)
          li.setAttribute('data-zip', inputSearch)
          li.setAttribute('data-lat', el.lat)
          li.setAttribute('data-lng', el.lng)
          listStore.appendChild(li)
        }
        
      })
    }
    console.log(lat, lng, zoom)
    listStore.addEventListener('click',e=>{
      if (e.target.nodeName=='LI'){
        let Lat = e.target.getAttribute('data-lat')*1
        let Lng = e.target.getAttribute('data-lng')*1
        sessionStorage.setItem('zip', e.target.getAttribute('data-zip'))
        sessionStorage.setItem('address', e.target.getAttribute('data-address'))
        sessionStorage.setItem('lat', Lat)
        sessionStorage.setItem('lng', Lng)
        sessionStorage.setItem('zoom', 15)
        window.location.reload(true);
      }
    })
    console.log(lat, lng, zoom)
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
        <div className="over" onLoad={this.scrollT} style={{overflow: "hidden" }}>
          <Header />
          <section className="section contact Buy">
            <div className="contact-grid">
              <div className="sidebar">
                <h2 className="section__title" data-aos="fade-right">FIND CURAMIA</h2>
                <p style={{width: '70%', lineHeight: '1.1'}}>These are the places where
                  you can find our product,
                  so you can be part of the
                  Curamia® Experience.
                </p>
                <form  className="formBuy" action="#" style={{width: '70%', lineHeight: '1.1'}} data-aos="fade-left" onSubmit={this.search}>
                  <div className="input-group-search">
                    <label htmlFor="SearchLocation">Search Location:</label>
                    <input type="search" id="SearchLocation" value={this.state.zip}/>
                  </div>
                  <div className="input-group-search">
                    <label htmlFor="SearchLocation">Radius:</label>
                    <select type="search" id="SearchLocation">
                      <option value="20">20 miles</option>
                      <option value="40">40 miles</option>
                      <option value="60">60 miles</option>
                    </select>
                  </div>
                  <div className="radio-group-search">
                    <input type="radio" id="radio1" name="type"/>
                    <label htmlFor="radio1">Bars / Restaurants</label>
                    <img src={imagesHome.down} alt=""/>
                  </div>
                  <div className="radio-group-search">
                    <input type="radio" id="radio2" name="type"/>
                    <label htmlFor="radio2">Where to buy</label>
                    <img src={imagesHome.downL} alt=""/>
                  </div>
                  <button type="submit" className="button-search">Search</button>
                </form>
                <div className="stores-list__container">
                  <ul className="store--list" style={{"padding-left": "auto","margin-bottom": "0", "list-style": "none"}}>
                    <li>{this.state.address}</li>
                  </ul>
                </div>
                <ul className="listStore" id="listStore"></ul>
              </div>
              <div className="buy">
                <div className="map">
                    <GoogleMaps
                      apiKey={"AIzaSyBkJpXR9kt7WyGeeOmcG1KWsWQE1SV3DNc"}
                      style={{height: "100%", width: "100%"}}
                      zoom={this.state.zoom}
                      center={{lat: this.state.center.lat, lng:this.state.center.lng}}
                      markers={{lat: this.state.center.lat, lng:this.state.center.lng}}//optional
                    />
                  <p >If you stock CURAMIA and would like to be included in our stocklist map, please email us here</p>
                </div>
              </div>
            </div>
          </section>
          {/*<Footer/>*/}
        </div>
      // </Scrollbar>
    )
  }
  componentDidMount() {
    // sessionStorage.setItem('zomm', '12');
    // sessionStorage.setItem('lat', '40.7127281')
    // sessionStorage.setItem('lng', '-74.0060152')
    window.scrollTo(0, 0)
    document.body.style.setProperty('--header-color', 'rgb(252,75,2)')
    AOSInit()
    window.addEventListener('DOMContentLoaded', e=>{

    })
  }
}
// const screenHeight = () => {
//   return window.innerHeight
// }

export default Buy
