import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import navList from "./helpers";

const Header = styled.header`
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 80px;
  background-color: #fff;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: sticky;
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;

  .header-left {
    padding: 0 50px;
    > span {
      font-size: 32px;
    }
  }

  .header-right {
    justify-content: flex-end;
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto auto;
    padding: 0 50px;
  }

  .header-link {
    min-width: 100px;
    text-decoration: none;
    color: black;
    text-align: center;
    text-transform: uppercase;
  }
`;

interface NavListProps {
  link: string;
  label: string;
}

const AppBar: React.SFC = () => (
  <Header>
    <div className="header-left">
      <span>
        {"<"}RM {"/>"}
      </span>
    </div>
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
