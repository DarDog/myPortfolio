import React, { useEffect, useContext } from 'react';
import { useInView } from "react-intersection-observer";
import { TranslationContext } from "../../context/translationContext";

const Contacts = (props) => {
  const translation = useContext(TranslationContext);

  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  })

  return (
    <section ref={ ref } className="contacts main__contacts section" id="section-4">
      <h2 className="title contacts__title">{ translation.headers.contacts }</h2>
      <p className="paragraph contacts__paragraph">{ translation.contactsParagraph }</p>
      <ul className="list contacts__list">
        <li className="contacts__item">
          <a
            href="https://github.com/DarDog"
            rel={'noreferrer'}
            className="contacts__link"
            target="_blank"
          >
            <div className="contacts__github"/>
          </a>
        </li>
        <li className="contacts__item">
          <a
            href="https://vk.com/me_here_fine"
            rel={'noreferrer'}
            className="contacts__link"
            target="_blank"
          >
            <div className="contacts__vk"/>
          </a>
        </li>
        <li className="contacts__item">
          <a
            href="https://www.instagram.com/samedyvlad/"
            rel={'noreferrer'}
            className="contacts__link"
            target="_blank"
          >
            <div className="contacts__instagram"/>
          </a>
        </li>
        <li className="contacts__item">
          <a
            href="https://t.me/DarDog"
            rel={'noreferrer'}
            className="contacts__link"
            target="_blank"
          >
            <div className="contacts__telegram"/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts
