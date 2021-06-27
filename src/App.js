import React from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom';
import MainSlider from "./Components/MainSlider";
import Header from "./Components/Header";

// import Routs
import Home from "./Routs/Home";
import About from "./Routs/About";
import Contact from "./Routs/Contact";



function App() {

  return (
      <Router>
          <>
              <Header />
              <main>
                  <Route path="/" component={Home} exact />
                  <Route path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
              </main>
          </>
      </Router>
  );
}

export default App;
