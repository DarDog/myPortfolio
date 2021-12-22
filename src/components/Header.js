import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

const Header = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  let preventWindowPosition = window.pageYOffset;

  const handleScroll = () => {
    let currentWindowPosition = window.pageYOffset;

    if (preventWindowPosition < currentWindowPosition) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    preventWindowPosition = currentWindowPosition;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header className={ `header page__header ${ isHidden && 'page__header_hidden' }` }>
      <nav className="menu">
        <ul className="list menu__list">
          <li className="menu__item">
            <Link
              to='section-0'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isHomeInView && 'menu__link_active' }` }>Home
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-1'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isAboutMeInView && 'menu__link_active' }` }>About me
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-2'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isSkillsInView && 'menu__link_active' }` }>Skills
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-3'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isPortfolioInView && 'menu__link_active' }` }>Portfolio
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-4'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isContactsInView && 'menu__link_active' }` }>Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
