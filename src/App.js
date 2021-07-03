import React from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import data from './Components/Data/maindata.json'

// import Routs
import Home from "./Routs/Home";
import About from "./Routs/About";
import Contact from "./Routs/Contact";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";
import MainSlider from "./Components/MainSlider";




function App() {
  return (
      <Router>
          <>
              <Header navLinkTitles={data[0]} />
              <MainSlider />
              <main>
                  <Route path="/" component={Home} exact />
                  <Route path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
              </main>
              <Cards cardTitle={data[1].cardstitle} />
              <AboutSection aboutTitle={data[2]} />
              <Footer />
          </>
      </Router>
  );
}

export default App;
