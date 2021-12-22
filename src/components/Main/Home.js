import React, { useEffect } from 'react';
import myPhoto from "../../images/DSC_025.jpg";
import { useInView } from "react-intersection-observer";

const Home = (props) => {
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

  return (
    <section ref={ ref } className="home main__home section" id="section-0">
      <div className="home__info">
        <h1 className="home__name">Vlad Subbotin</h1>
        <p className="home__profession">Front-end developer <span className="myAge">{ getMyAge() }</span> years old, Russia</p>
      </div>
      <img src={ myPhoto } alt="Фотография с моим изображением" className="home__photo"/>
    </section>
  );
};

export default Home;
