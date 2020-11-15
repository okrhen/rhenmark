import Container from 'components/container';
import Header from 'components/header';
import React from 'react';
import useSWR from 'swr';
import profile from 'assets/json/profile.json';
import { IPath } from 'interfaces/shared';
import Icon from 'components/icon';
import {
  StyledProfile,
  StyledH4,
  StyledAbout,
  StyledExperience,
  StyledBadge,
  StyledEducation,
  StyledSocialLinks,
  StyledMain,
  StyledLeftContent,
  StyledRightContent,
} from './styles';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const Profile = () => {
  const currentJob = profile.iJobExperiences[0];
  const { data } = useSWR('https://zenquotes.io/api/random', fetcher, {
    refreshInterval: 180000,
  });

  return (
    <StyledProfile>
      <div className="banner">
        {data ? <span dangerouslySetInnerHTML={{ __html: data[0].h }} /> : ''}
      </div>
      <div className="profile">
        <div className="profile-image" />
        <div className="profile-info">
          <StyledH4>{profile.iName}</StyledH4>
          <span>
            {currentJob.position} at {currentJob.company}
          </span>
          <span>{currentJob.location}</span>
          <div className="profile-info-contacts">
            <button>Contact Info</button>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

const About = () => (
  <StyledAbout>
    <p>About</p>
    <span>{profile.iAbout}</span>
  </StyledAbout>
);

const Experience = () => (
  <StyledExperience>
    <p>Experience</p>
    <div className="experiences">
      <ul className="experiences-list">
        {profile.iJobExperiences.map(item => {
          return (
            <li key={item.company} className="experiences-list-item">
              <div></div>
              <div className="experiences-list-item-info">
                <span className="position">{item.position}</span>
                <span>{item.company}</span>
                <span className="text-light-gray">
                  {item.from} - {item.to}
                </span>
                <span className="text-light-gray">{item.location}</span>
                <div className="technologies">
                  {item.technologies.map(tech => (
                    <StyledBadge key={tech}>{tech}</StyledBadge>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </StyledExperience>
);

const Education = () => (
  <StyledEducation>
    <p>Education</p>
    <ul>
      <li>
        <span>{profile.iSchool.name}</span>
        <span>
          {profile.iSchool.degree} - {profile.iSchool.field}
        </span>
        <span>
          {profile.iSchool.from} - {profile.iSchool.to}
        </span>
        <div className="awards">
          <span>Award - {profile.iSchool.award}</span>
        </div>
      </li>
    </ul>
  </StyledEducation>
);

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <p>Social Media Links</p>
      <ul>
        {profile.iLinks.map(link => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Icon
                name={link.name.toLocaleLowerCase()}
                prefix="fab"
                size="2x"
              />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </StyledSocialLinks>
  );
};

const Home = ({ path, default: boolean }: IPath) => {
  return (
    <Container>
      <Header />
      <StyledMain>
        <StyledLeftContent>
          <Profile />
          <About />
          <Experience />
          <Education />
        </StyledLeftContent>
        <StyledRightContent>
          <SocialLinks />
        </StyledRightContent>
      </StyledMain>
    </Container>
  );
};

export default Home;
