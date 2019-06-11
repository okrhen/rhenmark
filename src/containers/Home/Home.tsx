import React from "react";

import {
  Container,
  FirstContent,
  IconDiv,
  ProjectContent
} from "./styles/Home.styles";
import { Button, Icon } from "../../components";

import { linksList } from "./helpers";

type LinkListProps = {
  name: string;
  icon: string;
  link: string;
};

type Props = {
  path?: string;
  default?: boolean;
};

const Home: React.SFC<Props> = () => (
  <Container>
    <FirstContent>
      <div className="left-content">
        <div className="left-content-info">
          <span>Hi, I'm </span>
          <span className="name">Rhen Mark</span>
          <span>Frontend / Hybrid App Developer</span>
          <IconDiv>
            {linksList.map((item: LinkListProps) => (
              <span className="link" key={item.name}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon name={item.icon} prefix="fab" />
                </a>
              </span>
            ))}
          </IconDiv>
          <div className="buttonDiv">
            <Button label="Hire Me" />
            <Button label="View my Resume" />
          </div>
        </div>
      </div>
      <div>Right</div>
    </FirstContent>
    <ProjectContent>
      <span className="content-title">Projects</span>
      <div className="project-content">
        {[1, 2, 3].map((item: number) => (
          <div key={item} className="card" />
        ))}
      </div>
    </ProjectContent>
  </Container>
);

export default Home;
