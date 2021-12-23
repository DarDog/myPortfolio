import React from 'react'
export const TranslationContext = React.createContext();

export const translation = {
  en: {
    headers: {
      home: 'Home',
      about: 'About me',
      skills: 'Skills',
      portfolio: 'Portfolio',
      contacts: 'Contacts',
    },
    name: 'Vlad Subbotin',
    profession: 'Web developer',
    info: 'years old, Russia',
    aboutParagraphs: [
      'Hi, i\'m Vlad - Front-end developer from russia.',
      'I\'m studying at courses "Web-developer" in "Яндекс практикум".',
      'I also have a hobby. I am fond of board and video games and I am engaged in photography at a semi-professional level.',
      'In addition to front-end development, I am also interested in the back-end, but not very passionate about it.',
      'If I\'m interested in your company, you can contact in any convenient way. My contacts are listed at the bottom of this page.',
      'Ready to implement excellent projects with wonderful people.'
    ],
    skillsInfo: 'I work with languages and programmes ​​like',
    portfolioHeader: 'Portfolio',
    mestoLanding: 'Landing site for travel photographers - Concept',
    contactsParagraph: 'Want to know more or just chat? You are welcome!'
  },
  ru: {
    headers: {
      home: 'Домой',
      about: 'Обо мне',
      skills: 'Навыки',
      portfolio: 'Портфолио',
      contacts: 'Контакты',
    },
    name: 'Влад Субботин',
    profession: 'Веб разработчик',
    info: 'года, Россия',
    aboutParagraphs: [
      'Привет, меня зовут Влад. Я Веб разработчик из России.',
      'Я обучался на курсах Веб разработки в "Яндекс практикум".',
      'Помимо разработки я увлекаюсь фотографией, настольными и видео играми.',
      'В основном я занимаюсь Front-end\'ом, но знаком и с Back-end технологиями.',
      'Если я заинтересовал вашу компанию, вы можете связаться со мной удобным вам способом. Мои контактные данные указаны в низу этой страницы.',
      'Готов реализовывать отличные проекты с замечательными людьми.'
    ],
    skillsInfo: 'Я знаком со следующими программами и языками',
    portfolioHeader: 'Портфолио',
    mestoLanding: 'Пример лэндинга для публикации фотографии',
    contactsParagraph: 'Хотите узнать больше или просто пообщаться со мной? Добро пожаловать!'
  }
}
