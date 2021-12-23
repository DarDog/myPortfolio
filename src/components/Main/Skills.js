import React, { useEffect, useContext } from 'react';
import { useInView } from "react-intersection-observer";
import { TranslationContext } from "../../context/translationContext";

const Skills = (props) => {
  const translation = useContext(TranslationContext);
  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  })

  return (
    <section ref={ ref } className="skills main__skills section" id="section-2">
      <h2 className="title skills__title">{ translation.headers.skills }</h2>
      <p className="paragraph skills__paragraph">{ translation.skillsInfo }</p>
      <ul className="list skills__list">
        <li className="skills__item">
          <div className="skills__icon skills__html" />
          <h3 className="skills__name">HTML5</h3>
        </li>
        <li className="skills__item">
          <div className="skills__icon skills__css" />
          <h3 className="skills__name">CSS3</h3>
        </li>
        <li className="skills__item">
          <div className="skills__icon skills__js" />
          <h3 className="skills__name">JS</h3>
        </li>
        <li className="skills__item">
          <div className="skills__icon skills__react" />
          <h3 className="skills__name">react</h3>
        </li>
        <li className="skills__item">
          <div className="skills__icon skills__figma" />
          <h3 className="skills__name">Figma</h3>
        </li>
      </ul>
    </section>
  );
}

export default Skills
