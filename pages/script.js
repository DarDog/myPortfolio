const sections = Array.from(document.querySelectorAll('section')),
    navBar = document.querySelector('.menu__list');

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
  threshold: .55
})

sections.forEach(section => observer.observe(section))

navBar.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains('menu__link')) {
    window.scrollTo({
      top: document.querySelector(getLinkId(evt.target)).offsetTop,
      behavior: 'smooth'
    })
  }
})
