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
        onScroll={props.onHomeViewChange}
      />
      <AboutMe
        onScroll={props.onAboutMeViewChange}
      />
      <Skills
        onScroll={props.onSkillsViewChange}
      />
      <Portfolio
        onScroll={props.onPortfolioViewChange}
      />
      <Contacts
        onScroll={props.onContactsViewChange}
      />
    </main>
  );
};

export default Main;

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     const links = Array.from(document.querySelectorAll('.menu__link'));
//
//     if (entry.isIntersecting) {
//       links.forEach(link => {
//         link.classList.toggle('menu__link_active',
//           getLinkId(link).replace('#', '') === entry.target.id)
//       })
//     }
//   })
// }, {
//   threshold: .4
// })
