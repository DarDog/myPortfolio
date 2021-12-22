import React from 'react';

const Header = (props) => {

  return (
    <header className="header page__header">
      <nav className="menu">
        <ul className="list menu__list">
          <li className="menu__item">
            <a href="#section-0" className={ `menu__link ${props.isHomeInView && 'menu__link_active'}` }>Home</a>
          </li>
          <li className="menu__item">
            <a href="#section-1" className={ `menu__link ${props.isAboutMeInView && 'menu__link_active'}` }>About me</a>
          </li>
          <li className="menu__item">
            <a href="#section-2" className={ `menu__link ${props.isSkillsInView && 'menu__link_active'}` }>Skills</a>
          </li>
          <li className="menu__item">
            <a href="#section-3" className={ `menu__link ${props.isPortfolioInView && 'menu__link_active'}` }>Portfolio</a>
          </li>
          <li className="menu__item">
            <a href="#section-4" className={ `menu__link ${props.isContactsInView && 'menu__link_active'}` }>Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
