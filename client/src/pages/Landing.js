import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            Login/register
          </Link>
        </div>
        <img src={main} alt="CareerNest" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
