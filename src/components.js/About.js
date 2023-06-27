import React from "react";
import "../Assets/CSS/About.css";
import bg from "../Assets/image/background.png";
import logo from "../Assets/image/logo.svg";
import sign from "../Assets/image/sign.png";
import india from "../Assets/image/india.png";
import usa from "../Assets/image/us.png";
import uae from "../Assets/image/dubai.png";

const About = () => {
  return (
    <main className="main-body">
      <div className="grid">
        <div className="image">
          <img src={bg} alt="info" />
        </div>
        <div className="content-container">
          <img src={logo} alt="logo" id="logo" />
          <h1>A MESSAGE FROM</h1>
          <h2>SACHIN KHOSLA ,</h2>
          <h3>CEO & FOUNDER</h3>
          <main className="content">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <div className="sign">
              <img src={sign} alt="sign" id="sign-img" />
              <h3>SACHIN KHOSLA , </h3>
              <h3>CEO & FOUNDER</h3>
            </div>
            <hr />
            <div className="footer">
                <ul>
                  <li>
                    INDIA
                    <img src={india} alt="india" height={"22px"} />
                  </li>
                  <li>
                    {" "}
                    DUBAI
                    <img src={uae} alt="uae" height={"22px"} />
                  </li>
                  <li>
                    {" "}
                    US
                    <img src={usa} alt="us" height={"22px"} />
                  </li>
                </ul>
                <p className="website-link">
                  <a href="https://digimantralabs.com/">
                    www.digimantralabs.com
                  </a>
                </p>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};

export default About;
