import Header from "../components/Header"
import Footer from "../components/Footer"
import "./under.scss"

const Under = ()=>{

  return(
    <div className="under" style={{"--header-color" : "#ed5e2b"}}>
      <Header color="blue"></Header>
      <h1>Coming Soon</h1>
      <Footer></Footer>
    </div>
  )
};

export default Under