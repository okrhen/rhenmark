import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import navList from "./static.helpers";

const Header = styled.header`
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 60px;
  background-color: #fff;
  justify-content: center;
  align-items: center;

  .header-right {
    justify-content: flex-end;
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 0 50px;
  }

  .header-link {
    min-width: 100px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: black;
    text-align: center;
  }
`;

interface NavListProps {
  link: string;
  label: string;
}

const AppBar: React.SFC = () => (
  <Header>
    <div className="header-left">RHEN MARK</div>
    <div className="header-right">
      {navList.map(({ label, link }: NavListProps) => (
        <Link to={link} className="header-link">
          {label}
        </Link>
      ))}
    </div>
  </Header>
);

export default AppBar;
