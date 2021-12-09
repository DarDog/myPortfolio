import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio main__portfolio section" id="section-3">
      <h2 className="title portfolio__title">Portfolio</h2>
      <ul className="list portfolio__list">
        <li className="portfolio__item">
          <img src="images/mesto-preview.png" alt="preview of mesto" className="portfolio__preview"/>
          <a href="https://dardog.github.io/mesto/" className="portfolio__link" target="_blank">Landing site for
            travel
            photographers - Concept</a>
        </li>
        <li className="portfolio__item">
          <img src="images/russian-travel-preview.png" alt="preview of russian travel"
               className="portfolio__preview"/>
          <a href="https://dardog.github.io/russian-travel/" className="portfolio__link" target="_blank">Business
            card
            website about travel in Russia - Concept</a>
        </li>
        <li className="portfolio__item">
          <img src="images/how-to-learn-preview.png" alt="preview of how to learn " className="portfolio__preview"/>
          <a href="https://dardog.github.io/how-to-learn/" className="portfolio__link" target="_blank">Business
            card website
            about training</a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
