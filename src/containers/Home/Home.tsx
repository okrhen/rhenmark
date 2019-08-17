import React, { useState, Fragment } from "react";
import { Link, Element } from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ContactForm from './components/Form'
import Icon from "../../components/Icon";

import cartrack from "../../assets/images/cartrack.jpg";
import teacherNatty from "../../assets/images/teacher-natty.png";
import gawangLokal from "../../assets/images/gawanglokal.jpg";
import gawangLokalApp from "../../assets/images/gawang-lokal-app.jpg";
import chmscApp from "../../assets/images/chmsc-app.jpg";
import qrCode from "../../assets/images/resume.png";

// Resume short code
// https://qrgo.page.link/Dv7AP

const list = [
  "ReactJS",
  "React Native",
  "GraphQL",
  "Redux",
  "Apollo",
  "Javascript ( ES6 )",
  "Phonegap",
  "Cordova",
  "LESS",
  "SASS",
  "Styled-components",
  "Next.js",
  "NodeJS",
  "FeathersJS",
  "ExpressJS",
  "Google Maps API",
  "OpenstreetMap",
  "Firebase",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Git",
  "Github",
  "Jenkins",
  "Team City",
  "JIRA",
  "Kanban",
  "Agile",
  "Adobe XD",
  "Photoshop"
];

const navs = [
  { name: "Home", target: "home" },
  { name: "Projects", target: "project" },
  { name: "About Me", target: "about" },
  { name: "Contact", target: "contact" }
];

type Props = {
  path?: string;
  children?: any;
  default?: boolean;
};

const Home: React.SFC<Props> = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [activeNav, setActiveNav] = useState("home");
  const [isNavOpen, setOpenNav] = useState(false)

  const linkConfig = {
    smooth: true,
    spy: true
  };


  return (
    <main className="Container">
      {
        isNavOpen && (
          <div className="Container-cover" onClick={() => setOpenNav(!isNavOpen)} />)
      }
      <div className="Header">
        <div className="Header-logo"> 
          <button className="Header-logo-btn" title="nav-hamburger" onClick={() => setOpenNav(true)}>
            <Icon name="bars"  className="Header-logo-btn-icon"/>
          </button>
          <span>RHEN MARK</span>
        </div>
        <div className={`Header-nav ${isNavOpen ? 'isNavOpen' : ''}`}>
          <div className="Header-nav-close">
            <button title="nav-close" onClick={() => setOpenNav(!isNavOpen)}>
              <Icon name="times" />
            </button>
          </div>
          <ul>
            {navs.map(item => (
                <li
                  className={activeNav === item.target ? "isActive" : ""}
                  key={item.target} 
                >
                    <Link to={item.target} {...linkConfig} onSetActive={() => setActiveNav(item.target)}>
                    {item.name}
                    </Link>
                </li>
            ))}
          </ul>
        </div>
      </div>
      <Element name="home">
        <div className="Home" id="home">
          <div className="Home-left">
            <LazyLoadImage src={qrCode} effect="blur" alt="RhenMark" />
            <div>
              <span>Scan to check my CV</span>
            </div>
          </div>
          <div className="Home-right">
            <div className="Home-right-info">
              <div className="Home-right-info-label">
                <span>Hi, I am</span>
                <br />
                <span className="Home-right-info-label-name">RHEN MARK</span>
                <br />
                <span className="Home-right-info-label-position">
                  [ Frontend/App Developer ]
                </span>
              </div>
            </div>
            <div className="Home-right-social">
              <ul>
                <li>
                  <a
                    href="https://github.com/rhenmarkcallado"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open github"
                  >
                    <Icon name="github" prefix="fab" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rhenmarkcallado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Linkedin"
                  >
                    <Icon name="linkedin" prefix="fab" />
                  </a>
                </li>
                <li>
                  <a href="mailto:rhenmarkc@gmail.com" aria-label="Send email to rhenmarkc@gmail.com">
                    <Icon name="google-plus" prefix="fab" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rhen__mark/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open instagram"
                  >
                    <Icon name="instagram" prefix="fab" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Element>
      <Element name="project">
        <div className="Project">
          <div className="Project-header">
            <span>Projects</span>
          </div>
          <div className="Project-content">
            <div className="Project-content-tab">
              <ul>
                <li
                  className={activeTab === "web" ? "isActive" : ""}
                  onClick={() => setActiveTab("web")}
                >
                  Web Apps
                </li>
                <li
                  className={activeTab === "mobile" ? "isActive" : ""}
                  onClick={() => setActiveTab("mobile")}
                >
                  Mobile Apps
                </li>
              </ul>
            </div>
            <div className="Project-content-items">
              {activeTab === "web" ? (
                <Fragment>
                  <div className="Project-content-items-card">
                    <LazyLoadImage effect="blur" src={cartrack} alt="Cartrack Fleet Management" />
                    <div className="Project-content-items-card-title">
                      <span>Cartrack Fleet Management App </span>
                    </div>
                    <div className="Card-overlap">
                      <button title="card-hover-btn">
                        <span>See details</span>
                        <Icon name="chevron-right" />
                      </button>
                    </div>
                  </div>
                  <div className="Project-content-items-card isSoon">
                    <LazyLoadImage effect="blur" src={teacherNatty} alt="Teacher Natty" />
                    <div className="Project-content-items-card-title">
                      <span>Teacher Natty </span>
                    </div>
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                  <div className="Project-content-items-card isSoon">
                    <LazyLoadImage effect="blur" src={gawangLokal} alt="Gawang Lokal" />
                    <div className="Project-content-items-card-title">
                      <span>Gawang Lokal (E-commerce)</span>
                    </div>
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                  <div className="Project-content-items-card isSoon">
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                  <div className="Project-content-items-card isSoon">
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                  <div className="Project-content-items-card isSoon">
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="Project-content-items-card isMobile">
                    <LazyLoadImage effect="blur" src={gawangLokalApp} alt="Gawang Lokal App" />
                    <div className="Project-content-items-card-title">
                      <span>Gawang Lokal ( Mobile App )</span>
                    </div>
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                  <div className="Project-content-items-card isMobile">
                    <LazyLoadImage effect="blur" src={chmscApp} alt="Chmsc App" />
                    <div className="Project-content-items-card-title">
                      <span>CHMSC APP</span>
                    </div>
                    <div className="Card-overlap">
                      <button>
                        <span>Soon</span>
                      </button>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </Element>
      <Element name="about">
        <div className="About">
          <div className="About-header">
            <span>About Me</span>
          </div>
          <div className="About-content">
            <div className="About-content-left">
              <div className="About-content-title">
                <span className="text-bold">Work Experiences</span>
              </div>
              <div className="Experience">
                <span className="label-info">Web Developer</span>
                <span>Cartrack Technologies SouthEast Asia Pte Ltd</span>
                <span>August 2018 - Present</span>
                <span>
                  <Icon name="map-marker-alt" /> Singapore
                </span>
              </div>
              <div className="Experience">
                <span className="label-info">Web Developer Supervisor</span>
                <span>The Asia Thai Co. Ltd.</span>
                <span>January 2018 - August 2018</span>
                <span>
                  <Icon name="map-marker-alt" /> Thailand
                </span>
              </div>
              <div className="Experience">
                <span className="label-info">Software Engineer</span>
                <span>Stratium Software Group Inc.</span>
                <span>January 2016 - January 2018</span>
                <span>
                  <Icon name="map-marker-alt" /> Philippines
                </span>
              </div>
            </div>
            <div className="About-content-right">
              <div className="About-content-title">What skills I have?</div>
              <div className="About-content-right-skills">
                {list.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="contact">
        <div className="Contact">
          <div className="Contact-header">
            <span>How to Contact me?</span>
          </div>
          <div className="Contact-content">
            <div className="Contact-content-form">
                <ContactForm />
            </div>
            <div className="Contact-content-info">
            <ul>
              <li>
                <Icon name="envelope" size="2x" color="#D44638" />
                <span>rhenmarkc@gmail.com</span>
              </li>
              <li>
                <Icon name="skype" size="3x" prefix="fab" color="#00aff0" />
                <span>rhenmark9</span>
              </li>
            </ul>
            </div>
            
          </div>
        </div>
      </Element>
    </main>
  );
};

export default Home;
