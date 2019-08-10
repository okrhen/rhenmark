import React, { useState, Fragment } from "react";
import Icon from "../../components/Icon";

import cartrack from "../../assets/images/cartrack.jpg";
import teacherNatty from "../../assets/images/teacher-natty.png";

type Props = {
  path?: string;
  children?: any;
  default?: boolean;
};

const Home: React.SFC<Props> = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="Container">
      <div className="Header">
        <div className="Header-logo">
          <span>RHEN MARK</span>
        </div>
        <div className="Header-nav">
          <ul>
            <li className="isActive">Home</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="Home">
        <div className="Home-left">
          {/* <img src={rhenImage} alt="RhenMark" /> */}
        </div>
        <div className="Home-right">
          <div className="Home-right-info">
            <div className="Home-right-info-label">
              <span>Hi, I am</span>
              <br />
              <span className="Home-right-info-label-name">RHEN MARK</span>
              <br />
              <span className="Home-right-info-label-position">
                [ Frontend/App Developer]
              </span>
            </div>
          </div>
          <div className="Home-right-social">
            <ul>
              <li>
                <a href="https://github.com/rhenmarkcallado" target="_blank">
                  <Icon name="github" prefix="fab" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rhenmarkcallado/"
                  target="_blank"
                >
                  <Icon name="linkedin" prefix="fab" />
                </a>
              </li>
              <li>
                <a href="mailto:rhenmarkc@gmail.com">
                  <Icon name="google-plus" prefix="fab" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rhen__mark/" target="_blank">
                  <Icon name="instagram" prefix="fab" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
                  <img src={cartrack} alt="Cartrack Fleet Management" />
                  <div className="Project-content-items-card-title">
                    <span>Cartrack Fleet Management App </span>
                  </div>
                  <div className="Card-overlap">
                    <button>
                      <span>See details</span>
                      <Icon name="chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="Project-content-items-card">
                  <img src={teacherNatty} alt="Teacher Natty" />
                  <div className="Project-content-items-card-title">
                    <span>Teacher Natty </span>
                  </div>
                  <div className="Card-overlap">
                    <button>
                      <span>See details</span>
                      <Icon name="chevron-right" />
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
            )}
          </div>
        </div>
      </div>
      <div className="About">
        <div className="About-header">
          <span>About Me</span>
        </div>
        <div className="About-content">
          <div className="About-content-left">
            <ul>
              <li>
                <span className="text-bold">Educational Attaintment</span>
                <ul>
                  <li>
                    <span className="label-info">
                      Bachelors of Science in Information Systems (2012 - 2016)
                    </span>
                    <br />
                    <span>Carlos Hilado Memorial State College</span>
                  </li>
                </ul>
              </li>
              <li>
                <span className="text-bold">Work Experiences</span>
                <ul>
                  <li>
                    <span className="label-info">
                      {" "}
                      Web Developer (Aug 2018 - present){" "}
                    </span>
                    <br />
                    <span>
                      Cartrack Technologies SouthEast Asia Pte Ltd ( Singapore )
                    </span>
                  </li>
                  <li>
                    <span className="label-info">
                      Web Developer Supervisor (January 2018 - Aug 2018)
                    </span>
                    <br />
                    <span>The Asia Thai Co. Ltd. - ( Thailand )</span>
                  </li>
                  <li>
                    <span className="label-info">
                      {" "}
                      Software Engineer (January 2016 - January 2018){" "}
                    </span>
                    <br />
                    <span>
                      Stratium Software Group Inc. - ( Bacolod, Philippines )
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="About-content-right" />
        </div>
      </div>
      <div className="Contact">
        <div className="Contact-header">
          <span>How to Contact me?</span>
        </div>
        <div className="Contact-content">
          <ul>
            <li>
              <Icon name="envelope" size="2x" color="#D44638" />
              <span>rhenmark.callado@gmail.com</span>
            </li>
            <li>
              <Icon name="skype" size="3x" prefix="fab" color="#00aff0" />
              <span>rhenmark9</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
