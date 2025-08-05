import whatsappIcon from "../assets/whatappsvg.svg";
import githubicon from "../assets/githubicon.svg";
import linkedin from "../assets/linkedin.svg";
import gmailsvg from "../assets/gmailsvg.svg";

let Navbar = () => {
  return (
    <div className="maincontainer">
      <div
        className="navcontainer flex bg-[rgba(255,255,255,0.138)] backdrop-blur-[40px] 
                w-[260px] 
                h-10
                mt-[9px] 
                rounded-[12px] 
                border-[2px] 
                border-[rgba(206,205,205,0.114)] 
                shadow-[0px_1px_5px_rgb(17,39,204)] 
                fixed 
                z-[999]
"
      >
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
      </div>
    </div>
  );
};

export default Navbar;
