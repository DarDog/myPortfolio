const sections = Array.from(document.querySelectorAll('section'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const links = Array.from(document.querySelectorAll('.menu__link'));
    console.log(links)

    if (entry.isIntersecting) {
      links.forEach(link => {
        link.classList.toggle('menu__link_active',
            link.getAttribute('href').replace('#', '') === entry.target.id)
      })
    }
  })
}, {
  threshold: .55
})

sections.forEach(section => observer.observe(section))


