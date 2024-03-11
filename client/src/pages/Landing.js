import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="CareerNest" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h2>
            Job <span>Tracking</span>Website
          </h2>
          <p>
            I'm baby readymade you probably haven't heard of them viral,
            fingerstache drinking vinegar tilde deep v gastropub. Vegan bitters
            fit, kogi typewriter mukbang kickstarter fanny pack asymmetrical
            disrupt swag jean shorts blog marfa.
          </p>
          <button className="btn btn-hero">Login/register</button>
        </div>
        <img src={main} alt="CareerNest" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
