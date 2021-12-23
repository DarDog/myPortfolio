import React, { useEffect, useContext } from 'react';
import { useInView } from "react-intersection-observer";
import { TranslationContext } from "../../context/translationContext";

const AboutMe = (props) => {
  const translation = useContext(TranslationContext);

  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  })

  return (
    <section ref={ ref } className="about main__about section" id="section-1">
      <h2 className="title about__title">{ translation.headers.about }</h2>
      {
        translation.aboutParagraphs.map((paragraph, key) => {
          return <p key={key} className="paragraph about__paragraph">{ paragraph }</p>
        })
      }
    </section>
  );
}

export default AboutMe;
