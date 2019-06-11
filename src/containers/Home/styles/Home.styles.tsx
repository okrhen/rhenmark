import styled from "styled-components";

import image from "../../../assets/images/rhen-mt.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const FirstContent = styled.div`
  display: grid;
  grid-template-columns: 50% 40%;
  grid-template-rows: 100%;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;

  .left-content {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 90%;
    grid-template-rows: 80%;

    &-info {
      background-color: #fff;
      padding: 50px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border: 0.8em solid #000;
      border-radius: 0.5em;
      position: relative;
      z-index: 0;

      &::after {
        content: "";
        background: #000;
        width: 115%;
        position: absolute;
        right: -8%;
        height: 20px;
        bottom: -45px;
        border-top: 5px solid #f9f9f9;
        border-radius: 3px;
      }

      > span {
        margin: 10px 0;
        font-size: 1.5em;

        &.name {
          font-size: 3em;
          font-weight: 500;
          text-transform: uppercase;
        }
      }

      .buttonDiv {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 80px;
        margin-top: 10px;

        button {
          margin-right: 10px;
          padding: 15px;
          font-size: 1.2em;
          border-radius: 3px;
          min-width: 150px;
          color: #fff;
          border: 0.09em solid #000;
          background-color: transparent;
          color: #000;

          &:hover {
            background-color: #000;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.714em;

  .link {
    height: 1.25em;
    width: 1.25em;
    border-radius: 0.125em;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: center;
    margin-right: 0.357em;
    font-size: 2.286em;
    border: 0.055em solid #541b8b;

    > a {
      color: #541b8b;
    }

    &:hover {
      background-color: #541b8b;

      > a {
        color: #fff;
      }
    }
  }
`;

const ProjectContent = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  padding: 50px;
  box-sizing: border-box;

  > .content-title {
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.3em;
    border-left: 0.4em solid #4686cc;
    padding-left: 0.6em;
    font-weight: 500;
  }

  > .project-content {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    padding-top: 50px;
    justify-content: space-between;

    > .card {
      min-height: 400px;
      background-color: #ddd;
      border-radius: 0.5em;
      cursor: pointer;
    }
  }
`;

export { Container, FirstContent, IconDiv, ProjectContent };
