import React from 'react';

const Contacts = () => {
  return (
    <section className="contacts main__contacts section" id="section-4">
      <h2 className="title contacts__title">Contacts</h2>
      <p className="paragraph contacts__paragraph">Want to know more or just chat? You are welcome!</p>
      <ul className="list contacts__list">
        <li className="contacts__item">
          <a href="https://github.com/DarDog" className="contacts__link" target="_blank">
            <img src="images/github-logo_icon-icons.com_73546.svg" alt="github" className="contacts__social-icon"/>
          </a>
        </li>
        <li className="contacts__item">
          <a href="https://vk.com/me_here_fine" className="contacts__link" target="_blank">
            <img src="images/vk-social-network-logo_icon-icons.com_73339.svg" alt="VK"
                 className="contacts__social-icon"/>
          </a>
        </li>
        <li className="contacts__item">
          <a href="https://www.instagram.com/samedyvlad/" className="contacts__link" target="_blank">
            <img src="images/Instagram_New_icon-icons.com_69008.svg" alt="Instagram"
                 className="contacts__social-icon"/>
          </a>
        </li>
        <li className="contacts__item">
          <a href="https://t.me/DarDog" className="contacts__link" target="_blank">
            <img src="images/telegram_icon_131945.svg" alt="Telegram" className="contacts__social-icon"/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts
