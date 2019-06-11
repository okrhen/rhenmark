import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    will-change: opacity;
    /* z-index: -1; */
  }
`;

interface SliderProps {
  id: number;
  url: string;
}

type Props = {
  children?: ReactElement;
  slides: SliderProps[];
};

const Carousel: React.SFC<Props> = ({ children, slides }) => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () =>
      void setInterval(() => set(state => (state + 1) % slides.length), 5000),
    []
  );

  return (
    <CarouselContainer>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className="bg"
          style={{
            ...props
            // backgroundImage: `url(${item.url})`
          }}
        >
          {/* {children} */}
          <LazyLoadImage
            className="bg"
            effect="blur"
            src={item.url} // use normal <img> attributes as props
          />
          {children}
        </animated.div>
      ))}
    </CarouselContainer>
  );
};

Carousel.defaultProps = {
  slides: []
};

export default Carousel;
