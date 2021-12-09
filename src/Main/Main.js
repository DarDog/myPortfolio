import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

const Main = () => {
  return (
    <main className="main page__main">
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </main>
  );
};

export default Main;
