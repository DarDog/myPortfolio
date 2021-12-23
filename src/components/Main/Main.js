import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

const Main = (props) => {

  return (
    <main className="main page__main">
        <Home
          onScroll={ props.onHomeViewChange }
          currentLang={ props.currentLang }
          onLangChange={ props.onLangChange }
        />
        <AboutMe
          onScroll={ props.onAboutMeViewChange }
        />
        <Skills
          onScroll={ props.onSkillsViewChange }
        />
        <Portfolio
          onScroll={ props.onPortfolioViewChange }
        />
        <Contacts
          onScroll={ props.onContactsViewChange }
        />
    </main>
  );
};

export default Main;
