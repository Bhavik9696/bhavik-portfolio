import whatsappIcon from "../assets/whatappsvg.svg";
import githubicon from "../assets/githubicon.svg";
import linkedin from "../assets/linkedin.svg";
import gmailsvg from "../assets/gmailsvg.svg";

let Navbar = () => {
  return (
    <div className="maincontainer">
      <div className="navcontainer">
        <div className="icon">
          <ul>
            <li>
              <a href="https://wa.me/qr/SPLZRPUSUPAWG1">
                <img src={whatsappIcon} alt="whatsappicon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/qr/SPLZRPUSUPAWG1">
                <img src={githubicon} alt="githubicon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={linkedin} alt="linkedinicon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={gmailsvg} alt="linkedinicon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Navbar;
