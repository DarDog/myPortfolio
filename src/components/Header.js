import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll'
import { TranslationContext } from "../context/translationContext";

const Header = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  const translation = useContext(TranslationContext);

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
              className={ `menu__link ${ props.isHomeInView && 'menu__link_active' }` }>{ translation.headers.home }
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-1'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isAboutMeInView && 'menu__link_active' }` }>{ translation.headers.about }
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-2'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isSkillsInView && 'menu__link_active' }` }>{ translation.headers.skills }
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-3'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isPortfolioInView && 'menu__link_active' }` }>{ translation.headers.portfolio }
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to='section-4'
              smooth={ true }
              offset={ -90 }
              duration={ 700 }
              className={ `menu__link ${ props.isContactsInView && 'menu__link_active' }` }>{ translation.headers.contacts }
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
