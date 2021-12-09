import React from 'react'
import Header from "./Header";
import Main from "./Main/Main";


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
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
// showMyAge()
//
// const getLinkId = (link) => {
//   return link.getAttribute('href')
// }
//
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
