import { Link } from '@reach/router';
import Icon from 'components/icon';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 3.75rem;
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 99;

  .nav {
    width: 80%;
    height: 100%;
    margin: auto;
    display: grid;
    align-items: center;
    grid-template-columns: 70% 25%;
    column-gap: 5%;

    &-list {
      > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        > li {
          display: inline-block;
          margin-right: 2rem;

          > a {
            color: inherit;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav className="nav">
        <div>RHEN MARK</div>
        <div className="nav-list">
          <ul>
            <li>
              <Link to="projects">
                <Icon name="th-large" size="lg" />
              </Link>
            </li>
            <li>
              <Icon name="comment" size="lg" />
            </li>
            <li>
              <Link to="blog">
                <Icon name="globe-asia" size="lg" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
