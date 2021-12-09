import React from 'react';

const Header = () => {
  return (
    <header className="header page__header">
      <nav className="menu">
        <ul className="list menu__list">
          <li className="menu__item"><a href="#section-0" id="home-link"
                                        className="menu__link menu__link-to-home">Home</a></li>
          <li className="menu__item"><a href="#section-1" id="about-link" className="menu__link menu__link-to-about">About
            me</a></li>
          <li className="menu__item"><a href="#section-2" id="skills-link"
                                        className="menu__link menu__link-to-skills">Skills</a></li>
          <li className="menu__item"><a href="#section-3" id="portfolio-link"
                                        className="menu__link menu__link-to-portfolio">Portfolio</a></li>
          <li className="menu__item"><a href="#section-4" id="contacts-link"
                                        className="menu__link menu__link-to-contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
