import React, { useEffect, useContext } from 'react';
import myPhoto from "../../images/DSC_025.jpg";
import { useInView } from "react-intersection-observer";
import { TranslationContext } from "../../context/translationContext";

const Home = (props) => {
  const translation = useContext(TranslationContext);

  const getMyAge = () => {
    const currentDate = new Date();
    return currentDate.getFullYear() - 1997
  }

  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  }, [inView])

  const handleLangChange = (lang) => {
    console.log(lang)
    props.onLangChange(lang)
  }

  return (
    <section ref={ ref } className="home main__home section" id="section-0">
      <div className="home__info">
        <h1 className="home__name">{ translation.name }</h1>
        <p className="home__profession">{ translation.profession } <span
          className="myAge">{ getMyAge() }</span> { translation.info }</p>
        <div className='lang'>
          <button
            className={ `lang__link ${props.currentLang === 'ru' && 'lang__link_active'}` }
            onClick={ () => handleLangChange('ru') }
          >ру
          </button>
          <button
            className={ `lang__link ${props.currentLang === 'en' && 'lang__link_active'}` }
            onClick={ () => handleLangChange('en') }
          >en
          </button>
        </div>
      </div>
      <img src={ myPhoto } alt="Фотография с моим изображением" className="home__photo"/>
    </section>
  );
};

export default Home;
