import "./Hero.css";
import illustration from "../../assets/Home_Illustration.png";

const img = illustration;

const Hero = () => {
  return (
    <div>
      <div className="Hero">
        <div className="Hero_txt">
          <h2>
            Hi, i'm <span>Alan McIvor</span>. A web developer
          </h2>
          <p>I build seamless, interactive, and accessible web experiences</p>
          <div></div>
        </div>
        <img src={illustration} />
      </div>
    </div>
  );
};

export default Hero;
