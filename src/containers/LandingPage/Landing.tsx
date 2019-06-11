import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import locale from "../../locales/en";
import { Carousel } from "../../components";
// import { Button } from "../../components";

const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  position: absolute;
  overflow: hidden;

  .typistDiv {
    width: auto;
    position: absolute;
    right: 10%;
    top: 20%;
  }

  .text {
    font-size: 48px;
    color: #fff;
    font-weight: 500;

    span {
      color: red;
    }
  }

  .txtDescription {
    font-size: 48px;
    color: #fff;
    font-weight: 500;
  }

  .Cursor {
    color: #fff;
    font-size: 48px;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite;
  }
`;

type Props = {
  path?: string;
  default?: boolean;
};

const slides = [
  { id: 0, url: require("../../assets/images/rhen-a.jpg") },
  { id: 1, url: require("../../assets/images/rhen-b.jpg") }
];

const getCount = (str: string) => str.length;

const Landing: React.SFC<Props> = () => {
  const { landingPage: t } = locale;

  return (
    <LandingContainer>
      <Carousel slides={slides} />
      <div className="typistDiv">
        <Typist
          cursor={{
            show: true,
            blink: true
          }}
        >
          <span className="text">
            {`${t.welcome} ${t.iAm}`} <span>{t.name}</span>
          </span>
          <Typist.Backspace
            count={getCount(`${t.name}${t.iAm}${t.name}`)}
            delay={8000}
          />
          <span className="txtDescription"> {t.profession} </span>
        </Typist>
      </div>
    </LandingContainer>
  );
};

export default Landing;
