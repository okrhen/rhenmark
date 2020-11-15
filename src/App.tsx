// tslint:disable: no-implicit-dependencies
// tslint:disable no-submodule-imports
import './components/icon/config/icon-init';

import { Router } from '@reach/router';
import Blog from 'pages/blog';
import Home from 'pages/home';
import Project from 'pages/project';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    --bg-gray: #f3f2f0;
    --bg-blue: #098ece;
    --bg-blue-hover: #0075af;
    --bg-blue-90: rgb(9 142 206 / 80%);
    --bg-light-blue: #06a9df;
    --color-white: #ffffff;
    --color-light-gray: #b1b0af;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--bg-gray);
    height: 100%;
    width: 100%;
    font-size: 16px;
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path="/" default />
        <Blog path="blog" />
        <Project path="projects" />
      </Router>
    </>
  );
};

export default App;
