import React, {Component} from "react";
import Header from "../components/Header";
import "./stores.scss"

class Stores extends Component {
  render(){
  return(
      <div>
        <Header/>
        <div className="stores-container">
          <div id="storepoint-container" data-map-id="1614219e68b8fc"></div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    (function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.storepoint.co/api/v1/js/1614219e68b8fc.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);}());

   
  }
};

export default Stores;