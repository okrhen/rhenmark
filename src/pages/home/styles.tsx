import profileImg from 'assets/images/profile.png';
import styled from 'styled-components';

export const StyledMain = styled.main`
  height: auto;
  width: 80%;
  padding: 2rem;
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: 70% 25%;
  column-gap: 5%;
  margin: 1.25rem auto;
`;

export const StyledLeftContent = styled.aside`
  width: 100%;
`;

export const StyledRightContent = styled.aside`
  width: 100%;
`;

export const StyledH4 = styled.h4`
  font-size: 2rem;
  margin: 0;
  font-weight: normal;
`;

export const StyledProfile = styled.div`
  width: 100%;
  background-color: var(--color-white);
  border-radius: 0.25rem;
  display: grid;
  grid-template-rows: minmax(15rem, 1fr);
  height: auto;

  .banner {
    background-color: var(--bg-blue);
    border-radius: 0.25rem 0.25rem 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--color-white);
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #000;

    > span {
      width: 80%;
      padding: 0.5rem;
    }
  }

  .profile {
    position: relative;
    padding: 0 1rem 1rem;

    &-image {
      width: 8rem;
      height: 8rem;
      border-radius: 8rem;
      border: 0.25rem solid var(--bg-gray);
      position: absolute;
      bottom: 11rem;
      background-color: red;
      left: 5%;
      text-align: center;
      background: url(${profileImg});
      background-position-x: 46%;
      background-position-y: 56%;
      background-size: 14rem;
    }

    &-info {
      margin-top: 5rem;

      > h4 {
        font-size: 2rem;
        margin: 0;
        font-weight: normal;
      }

      > span {
        display: block;
      }

      &-contacts {
        margin-top: 1.5rem;

        > button {
          background-color: var(--bg-blue);
          padding: 0.75rem;
          border: none;
          color: var(--color-white);
          border-radius: 0.25rem;
          outline: var(--color-white);
          cursor: pointer;

          &:hover {
            background-color: var(--bg-blue-hover);
          }
        }
      }
    }
  }
`;

export const StyledAbout = styled.section`
  background-color: var(--color-white);
  margin-top: 2rem;
  padding: 0.5rem 1rem 1rem;
  border-radius: 0.25rem;

  > p {
    font-size: 1.25rem;
  }

  > span {
    display: block;
    padding-top: 1rem;
  }
`;

export const StyledEducation = styled(StyledAbout)`
  > p {
    font-size: 1.25rem;
  }

  > ul {
    list-style-type: none;

    > li {
      > span {
        display: block;

        &:first-child {
          font-weight: 500;
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const StyledExperience = styled.section`
  background-color: var(--color-white);
  margin-top: 2rem;
  padding: 0.5rem 1rem 1rem;
  border-radius: 0.25rem;

  > p {
    font-size: 1.25rem;
  }

  .experiences {
    &-list {
      list-style-type: none;

      &-item {
        &-info {
          border-bottom: 0.0625rem solid var(--bg-gray);
          padding-bottom: 1rem;
          margin-bottom: 1rem;

          > span {
            display: block;

            &.position {
              font-weight: 500;
              font-size: 1.25rem;
              letter-spacing: 0.025rem;
            }

            &.text-light-gray {
              color: var(--color-light-gray);
            }
          }

          .technologies {
            padding-top: 0.5rem;
          }
        }
      }
    }
  }
`;

export const StyledBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--bg-blue-90);
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  display: inline-block;
  box-sizing: border-box;
  font-size: 0.9rem;
  color: var(--color-white);
`;

export const StyledSocialLinks = styled.section`
  background-color: var(--color-white);
  padding: 0.5rem 1rem 1rem;

  > p {
    font-size: 1.25rem;
  }

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0.5rem 0;
    border-top: 0.0625rem solid var(--bg-gray);

    > li {
      margin: 0.5rem 0;
      padding: 0.5rem 0;

      &:hover {
        color: var(--color-light-gray);
      }

      > a {
        height: 100%;
        display: grid;
        grid-template-columns: minmax(3rem, 3rem) 1fr;
        align-items: center;
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;
