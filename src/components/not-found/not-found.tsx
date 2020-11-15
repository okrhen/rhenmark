import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.main`
  background-color: var(--bg-light-blue);
  display: grid;
  justify-content: flex-end;
  grid-template-rows: 1fr;
  height: 100vh;
  grid-template-columns: 50% 50%;
  align-items: center;

  .right-content {
    display: grid;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 2;

    &-btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 2rem;
    }

    > span {
      font-size: 2rem;
      font-weight: 400;
      text-align: right;

      &:first-child {
        font-size: 3rem;
      }
    }
  }

  img {
    width: 100%;
    margin-left: -8rem;
    z-index: 1;
  }
`;

const StyledButton = styled.button`
  padding: 1rem;
  background-color: var(--color-white);
  text-decoration: none;
  border-radius: 0.25rem;
  color: var(--bg-light-blue);
  border: none;
  font-size: 1.25rem;
  outline: none;
  cursor: pointer;

  &:hover,
  &:visited,
  &:focus,
  &:active {
    outline: none;
  }
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="right-content">
        <span>Ooopsss!!!</span>
        <span>This page is under construction!</span>
        <div className="right-content-btn">
          <Link to="/">
            <StyledButton>
              <span>Back to Home</span>
            </StyledButton>
          </Link>
        </div>
      </div>
      <img
        src="https://media.giphy.com/media/5xtDarA6JDYNFmWQvLy/giphy.gif"
        alt="maintenance"
      />
    </StyledNotFound>
  );
};

export default NotFound;
