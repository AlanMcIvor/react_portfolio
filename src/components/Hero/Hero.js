import "./Hero.css";
import Button from "../buttons/Button";
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
          <div className="Btn_container">
            <Button
              text="View my work"
              backgroundColor="#FF6978"
              color="#000"
            />
            <Button text="Contact me" backgroundColor="#F5F5F5" color="#000" />
          </div>
        </div>
        <img src={illustration} />
      </div>
    </div>
  );
};

export default Hero;
