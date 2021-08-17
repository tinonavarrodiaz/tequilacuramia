import {BrowserView, MobileView} from "react-device-detect";
import abuela1 from "../assets/img/abuela1.png";
import abuela2 from "../assets/img/abuela2.png";
import abuela3 from "../assets/img/abuela3.png";
import abuela4 from "../assets/img/abuela4.png";
import abuela5 from "../assets/img/abuela5.png";
import abuelabanner from "../assets/img/abuelabanner.png";
// import AOSInit from "../helpers/helpers";
import "./abuelabanner.scss"

const Abuelabanner = ()=>{
  return(
    <div className="abuelabanner">
      <BrowserView>
        <img src={abuela1} data-aos="flip-left" data-aos-duration="2500" className="abuela abuela1" alt=""/>
        <img src={abuela2} data-aos="flip-left" data-aos-duration="2500" data-aos-delay="150" className="abuela abuela2" alt=""/>
        <img src={abuela3} data-aos="flip-left" data-aos-duration="2500" data-aos-delay="300" className="abuela abuela3" alt=""/>
        <img src={abuela4} data-aos="flip-left" data-aos-duration="2500" data-aos-delay="450" className="abuela abuela4" alt=""/>
        <img src={abuela5} data-aos="flip-left" data-aos-duration="2500" data-aos-delay="600" className="abuela abuela5" alt=""/>
      </BrowserView>
      <MobileView>
        <img src={abuelabanner} data-aos="fade-left" className="abuelabanner__banner" alt=""/>
      </MobileView>
    </div>
  )
};

export default Abuelabanner;