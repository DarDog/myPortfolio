import React, { useEffect, useContext } from 'react';
import htmlIcon from '../../images/html_original_wordmark_logo_icon_146478.svg';
import cssIcon from '../../images/css_original_wordmark_logo_icon_146576.svg';
import jsIcon from '../../images/file_type_js_official_icon_130509.svg';
import reactIcon from '../../images/react_original_wordmark_logo_icon_146375.svg';
import figmaIIcon from '../../images/figma_logo_icon_170157.svg'
import { useInView } from "react-intersection-observer";
import { TranslationContext } from "../../context/translationContext";

const Skills = (props) => {
  const translation = useContext(TranslationContext);
  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  }, [inView])

  return (
    <section ref={ ref } className="skills main__skills section" id="section-2">
      <h2 className="title skills__title">{ translation.headers.skills }</h2>
      <p className="paragraph skills__paragraph">{ translation.skillsInfo }</p>
      <ul className="list skills__list">
        <li className="skills__item">
          <img src={ htmlIcon } alt="Icon html5" className="skills__icon"/>
          <h3 className="skills__name">HTML5</h3>
        </li>
        <li className="skills__item">
          <img src={ cssIcon } alt="Icon css3" className="skills__icon"/>
          <h3 className="skills__name">CSS3</h3>
        </li>
        <li className="skills__item">
          <img src={ jsIcon } alt="Icon js" className="skills__icon"/>
          <h3 className="skills__name">JS</h3>
        </li>
        <li className="skills__item">
          <img src={ reactIcon } alt="Icon react" className="skills__icon"/>
          <h3 className="skills__name">react</h3>
        </li>
        <li className="skills__item">
          <img src={ figmaIIcon } alt="Icon react" className="skills__icon"/>
          <h3 className="skills__name">Figma</h3>
        </li>
      </ul>
    </section>
  );
}

export default Skills
