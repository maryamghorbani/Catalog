import React from "react";
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Header from "./Components/Header";
import data from './Components/Data/maindata.json';
import BackToTop from "react-back-to-top-button";
import { FaArrowCircleUp } from 'react-icons/fa';

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
              <main>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/About" component={About} />
                      <Route path="/Contact" component={Contact} />
                  </Switch>
              </main>
              <BackToTop
                  showAt={1000}
                  speed={1500}
                  easing="easeInOutQuint"
              >
                  <FaArrowCircleUp />
              </BackToTop>
              <Footer />
          </>
      </Router>
  );
}

export default App;
