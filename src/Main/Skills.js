import React from 'react';

const Skills = () => {
  return (
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
  );
}

export default Skills
