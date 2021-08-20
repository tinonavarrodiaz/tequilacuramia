import Iframe from 'react-iframe'
import Header from "../components/Header"


const Curamia = ()=> {

  return(
    <div className="over" >
      <Header/>
      <section className="section contact Buy">
        <Iframe url="https://snapwidget.com/embed/957438"
          width="100%"
          height="400px"
          id="snapwidget-widget"
          className="snapwidget-widget"
          display="flex"
          position="relative"
          frameBorder = "0"
          />
      </section>
    </div>
  )
}
export default Curamia
