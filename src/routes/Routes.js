import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from "../pages/Home1";
import About from "../pages/about";
import Process from "../pages/process"
import Cocktails from "../pages/cocktails"
import Buy from "../pages/Buy"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";


function Routes() {
  return (
    // <Router> 
    <Router basename="/tequilacuramia">
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/process" >
          <Process />
        </Route>
        <Route exact path="/cocktails" >
          <Cocktails />
        </Route>
        <Route exact path="/contact" >
          <Contact />
        </Route>
        <Route exact path="/where-buy" >
          <Buy />
        </Route>

        <Route path="*">
          <Temp />
        </Route>
      </Switch>
    </Router>
  );
}

const Temp = () => {
  return (
    <div>
    <Header />
    <h2>Ruta Inexistente</h2>
    <Footer />
    </div>
  )
}

export default Routes;
