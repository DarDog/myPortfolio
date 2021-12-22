import React, { useState } from 'react'
import Header from "./Header";
import Main from "./Main/Main";

function App() {
  const [isHomeInView, setIsHomeInView] = useState(true);
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const [isSkillsInView, setIsSkillsInView] = useState(false);
  const [isPortfolioInView, setIsPortfolioInView] = useState(false);
  const [isContactsInView, setIsContactsInView] = useState(false);

  return (
    <div className="page">
       <Header
         isHomeInView={isHomeInView}
         isAboutMeInView={isAboutMeInView}
         isSkillsInView={isSkillsInView}
         isPortfolioInView={isPortfolioInView}
         isContactsInView={isContactsInView}
       />
       <Main
         onHomeViewChange={setIsHomeInView}
         onAboutMeViewChange={setIsAboutMeInView}
         onSkillsViewChange={setIsSkillsInView}
         onPortfolioViewChange={setIsPortfolioInView}
         onContactsViewChange={setIsContactsInView}
       />
    </div>
  );
}

export default App;

// const sectionsElements = Array.from(document.querySelectorAll('section')),
//   navBarElement = document.querySelector('.menu__list'),
//   myAgeElement = document.querySelector('.myAge'),
//   headerElement = document.querySelector('.header');
// let preventWindowPosition = window.pageYOffset;
//
//
// const getLinkId = (link) => {
//   return link.getAttribute('href')
// }
//
//
// sectionsElements.forEach(section => observer.observe(section))
//
// navBarElement.addEventListener('click', (evt) => {
//   evt.preventDefault();
//
//   if (evt.target.classList.contains('menu__link')) {
//     window.scrollTo({
//       top: document.querySelector(getLinkId(evt.target)).offsetTop,
//       behavior: 'smooth'
//     })
//   }
// })
//
// window.addEventListener('scroll', () => {
//   let currentWindowPosition = window.pageYOffset
//   if (preventWindowPosition > currentWindowPosition) {
//     headerElement.style.top = '0';
//   } else {
//     headerElement.style.top = '-88px'
//   }
//   preventWindowPosition = currentWindowPosition;
// })
