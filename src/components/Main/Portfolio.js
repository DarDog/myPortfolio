import React, { useEffect } from 'react';
import mestoScreen from '../../images/mesto-preview.png';
import { useInView } from "react-intersection-observer";

const Portfolio = (props) => {
  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  }, [inView])

  return (
    <section ref={ ref } className="portfolio main__portfolio section" id="section-3">
      <h2 className="title portfolio__title">Portfolio</h2>
      <ul className="list portfolio__list">
        <li className="portfolio__item">
          <img src={ mestoScreen } alt="preview of mesto" className="portfolio__preview"/>
          <a href="https://dardog.github.io/mesto/" className="portfolio__link" target="_blank">Landing site for
            travel
            photographers - Concept</a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
