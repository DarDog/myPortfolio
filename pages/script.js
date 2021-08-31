const sectionsElements = Array.from(document.querySelectorAll('section')),
    navBarElement = document.querySelector('.menu__list'),
    myAgeElement = document.querySelector('.myAge');

const showMyAge = () => {
  const date = new Date();
  myAgeElement.textContent = date.getFullYear() - 1997
}

showMyAge()

const getLinkId = (link) => {
  return link.getAttribute('href')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const links = Array.from(document.querySelectorAll('.menu__link'));

    if (entry.isIntersecting) {
      links.forEach(link => {
        link.classList.toggle('menu__link_active',
            getLinkId(link).replace('#', '') === entry.target.id)
      })
    }
  })
}, {
  threshold: .4
})

sectionsElements.forEach(section => observer.observe(section))

navBarElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains('menu__link')) {
    window.scrollTo({
      top: document.querySelector(getLinkId(evt.target)).offsetTop,
      behavior: 'smooth'
    })
  }
})
