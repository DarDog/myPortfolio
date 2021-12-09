import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";

const Main = () => {
  return (
    <main className="main page__main">
      <Home />
      <AboutMe />
      <section className="skills main__skills section" id="section-2">
        <h2 className="title skills__title">Skills</h2>
        <p className="paragraph skills__paragraph">I work with languages and programmes ​​like</p>
        <ul className="list skills__list">
          <li className="skills__item">
            <img src="images/html_original_wordmark_logo_icon_146478.svg" alt="Icon html5" className="skills__icon"/>
            <h3 className="skills__name">HTML5</h3>
          </li>
          <li className="skills__item">
            <img src="images/css_original_wordmark_logo_icon_146576.svg" alt="Icon css3" className="skills__icon"/>
            <h3 className="skills__name">CSS3</h3>
          </li>
          <li className="skills__item">
            <img src="images/file_type_js_official_icon_130509.svg" alt="Icon js" className="skills__icon"/>
            <h3 className="skills__name">JS</h3>
          </li>
          <li className="skills__item">
            <img src="images/react_original_wordmark_logo_icon_146375.svg" alt="Icon react" className="skills__icon"/>
            <h3 className="skills__name">react</h3>
          </li>
          <li className="skills__item">
            <img src="images/figma_logo_icon_170157.svg" alt="Icon react" className="skills__icon"/>
            <h3 className="skills__name">Figma</h3>
          </li>
        </ul>
      </section>
      <section className="portfolio main__portfolio section" id="section-3">
        <h2 className="title portfolio__title">Portfolio</h2>
        <ul className="list portfolio__list">
          <li className="portfolio__item">
            <img src="images/mesto-preview.png" alt="preview of mesto" className="portfolio__preview"/>
            <a href="https://dardog.github.io/mesto/" className="portfolio__link" target="_blank">Landing site for
              travel
              photographers - Concept</a>
          </li>
          <li className="portfolio__item">
            <img src="images/russian-travel-preview.png" alt="preview of russian travel"
                 className="portfolio__preview"/>
            <a href="https://dardog.github.io/russian-travel/" className="portfolio__link" target="_blank">Business
              card
              website about travel in Russia - Concept</a>
          </li>
          <li className="portfolio__item">
            <img src="images/how-to-learn-preview.png" alt="preview of how to learn " className="portfolio__preview"/>
            <a href="https://dardog.github.io/how-to-learn/" className="portfolio__link" target="_blank">Business
              card website
              about training</a>
          </li>
        </ul>
      </section>
      <section className="contacts main__contacts section" id="section-4">
        <h2 className="title contacts__title">Contacts</h2>
        <p className="paragraph contacts__paragraph">Want to know more or just chat? You are welcome!</p>
        <ul className="list contacts__list">
          <li className="contacts__item">
            <a href="https://github.com/DarDog" className="contacts__link" target="_blank">
              <img src="images/github-logo_icon-icons.com_73546.svg" alt="github" className="contacts__social-icon"/>
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://vk.com/me_here_fine" className="contacts__link" target="_blank">
              <img src="images/vk-social-network-logo_icon-icons.com_73339.svg" alt="VK"
                   className="contacts__social-icon"/>
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://www.instagram.com/samedyvlad/" className="contacts__link" target="_blank">
              <img src="images/Instagram_New_icon-icons.com_69008.svg" alt="Instagram"
                   className="contacts__social-icon"/>
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://t.me/DarDog" className="contacts__link" target="_blank">
              <img src="images/telegram_icon_131945.svg" alt="Telegram" className="contacts__social-icon"/>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
