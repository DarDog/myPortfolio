import React from 'react';
import myFoto from "../images/DSC_025.jpg";

const Home = () => {
  return (
    <section className="home main__home section" id="section-0">
      <div className="home__info">
        <h1 className="home__name">Vlad Subbotin</h1>
        <p className="home__profession">Front-end developer <span className="myAge"/> years old, Russia</p>
      </div>
      <img src={ myFoto } alt="" className="home__photo"/>
    </section>
  );
};

export default Home;
