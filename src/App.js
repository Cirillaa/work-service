import React from "react";

import "./App.css";
import Header from "./components/layouts/Header/Header.js";
import About from "./components/layouts/About/About";
import Vacancies from "./components/layouts/Vacancies/Vacancies.js";

function App() {

  return (
    <React.Fragment>
        <Header />
        <About />
        <Vacancies />
    </React.Fragment>
  );
}

export default App;
