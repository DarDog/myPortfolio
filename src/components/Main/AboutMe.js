import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

const AboutMe = (props) => {
  const { ref, inView } = useInView({
    threshold: .5,
  })

  useEffect(() => {
    props.onScroll(inView)
  }, [inView])

  return (
    <section ref={ ref } className="about main__about section" id="section-1">
      <h2 className="title about__title">About me</h2>
      <p className="paragraph about__paragraph">Hi, i'm Vlad - Front-end developer from russia.</p>
      <p className="paragraph about__paragraph">I'm studying at courses "Web-developer" in "Яндекс практикум".</p>
      <p className="paragraph about__paragraph">
        I also have a hobby. I am fond of board and video games and I am engaged in photography at a
        semi-professional level.</p>
      <p className="paragraph about__paragraph">
        In addition to front-end development, I am also interested in the back-end, but not very passionate about
        it.</p>
      <p className="paragraph about__paragraph">
        If I'm interested in your company, you can contact in any convenient way. My contacts are listed at the
        bottom of this page.</p>
      <p className="paragraph about__paragraph">Ready to implement excellent projects with wonderful people.</p>
    </section>
  );
}

export default AboutMe;
