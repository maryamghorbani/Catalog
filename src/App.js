import React from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom';
import MainSlider from "./Components/MainSlider";
import Header from "./Components/Header";
import Home from "./Routs/Home";



function App() {

  return (
      <Router>
          <>
              <Header />
              <main>
                  <Route path="/">
                      <Home />
                  </Route>
              </main>
          </>
      </Router>
  );
}

export default App;
