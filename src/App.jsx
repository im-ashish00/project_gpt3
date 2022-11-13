import React from "react";

import {
  Header,
  Footer,
  WhatGPT3,
  Possibility,
  Blog,
  Features,
} from "./container";
import { CTA, Navbar, Brand } from "./components";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
