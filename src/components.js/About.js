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
    <div>
      <main className="main-container">
        <section className="image-section">
          <img src={bg} alt="info" id="side-image" align='left' />
        </section>
        <section className="content-container">
          <header className="header-logo">
            <img src={logo} alt="logo" id="logo" />
          </header>
          <main className="content">
            <h1>A MESSAGE FROM</h1> <h2>SACHIN KHOSLA ,</h2>{" "}
            <h3>CEO & FOUNDER</h3>
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
              <img src={sign} alt="sign" id="sign" />
            <h1 className="sign-name">SACHIN KHOSLA , CEO & FOUNDER</h1>
            <div className="footer">
            <div className="countries-container">
              <h2 className="countries">
                INDIA  
                <img src={india} alt="india" height={'22px'}  />
              </h2>
              <h2 className="countries">
                DUBAI
                <img src={uae} alt="uae" height={'22px'} />
              </h2>
              <h2 className="countries">
                US
                <img src={usa} alt="us" height={'22px'} />
              </h2>
            </div>
            <div className="website-link">
              <a href="https://digimantralabs.com/">www.digimantralabs.com</a>
            </div>
            </div>
          </main>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default About;
