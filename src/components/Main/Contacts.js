import React, { useEffect } from 'react';
import githubLogo from '../../images/github-logo_icon-icons.com_73546.svg';
import vkLogo from '../../images/vk-social-network-logo_icon-icons.com_73339.svg';
import instagramLogo from '../../images/Instagram_New_icon-icons.com_69008.svg';
import telegramLogo from '../../images/telegram_icon_131945.svg';
import { useInView } from "react-intersection-observer";

const Contacts = (props) => {
  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  }, [inView])

  return (
    <section ref={ ref } className="contacts main__contacts section" id="section-4">
      <h2 className="title contacts__title">Contacts</h2>
      <p className="paragraph contacts__paragraph">Want to know more or just chat? You are welcome!</p>
      <ul className="list contacts__list">
        <li className="contacts__item">
          <a href="https://github.com/DarDog" className="contacts__link" target="_blank">
            <img src={ githubLogo } alt="github" className="contacts__social-icon"/>
          </a>
        </li>
        <li className="contacts__item">
          <a href="https://vk.com/me_here_fine" className="contacts__link" target="_blank">
            <img src={ vkLogo } alt="VK"
                 className="contacts__social-icon"/>
          </a>
        </li>
        <li className="contacts__item">
          <a href="https://www.instagram.com/samedyvlad/" className="contacts__link" target="_blank">
            <img src={ instagramLogo } alt="Instagram"
                 className="contacts__social-icon"/>
          </a>
        </li>
        <li className="contacts__item">
          <a href="https://t.me/DarDog" className="contacts__link" target="_blank">
            <img src={ telegramLogo } alt="Telegram" className="contacts__social-icon"/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts
