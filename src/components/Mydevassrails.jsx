let Mydevtools = () => {
  return (
    <div className="mydevtoolcontainer">
      <div className="languages">
        <h2 className="h2">Languages</h2>
        <div className="cards">
          <div className="carddev">
            <h3>HTML</h3>
            <h1 className="itag" id="html">
              <i className="fa-brands fa-html5"></i>
            </h1>
            <p>Markup language for web content.</p>
          </div>
          <div className="carddev">
            <h3>CSS</h3>
            <h1 className="itag" id="css">
              <i className="fa-brands fa-css3-alt"></i>
            </h1>
            <p>Style language for web design.</p>
          </div>
          <div className="carddev">
            <h3>JavaScript</h3>
            <h1 className="itag" id="js">
              <i className="fa-brands fa-js"></i>
            </h1>
            <p>Web scripting & dynamic content.</p>
          </div>
          <div className="carddev">
            <h3>SQL</h3>
            <h1 className="itag">
              <i className="fa-solid fa-database"></i>
            </h1>
            <p>Language for managing databases.</p>
          </div>
        </div>
      </div>

      <div className="frameworks">
        <h2 className="h2">Frameworks & Libraries</h2>
        <div className="cards">
          <div className="carddev">
            <h3>React</h3>
            <h1 className="itag">
              <i className="fa-brands fa-react"></i>
            </h1>
            <p>Frontend library for building UIs.</p>
          </div>
          <div className="carddev">
            <h3>Tailwind CSS</h3>
            <h1 className="itag">
              <i className="fa-solid fa-wind"></i>
            </h1>
            <p>Utility-first CSS framework.</p>
          </div>
          <div className="carddev">
            <h3>Node.js</h3>
            <h1 className="itag">
              <i className="fa-brands fa-node-js"></i>
            </h1>
            <p>JavaScript runtime for backend.</p>
          </div>
        </div>
      </div>

      <div className="tools">
        <h2 className="h2">Tools & Platforms</h2>
        <div className="cards">
          <div className="carddev">
            <h3>GitHub</h3>
            <h1 className="itag">
              <i className="fa-brands fa-github"></i>
            </h1>
            <p>Code hosting & version control.</p>
          </div>
          <div className="carddev">
            <h3>VS Code</h3>
            <h1 className="itag">
              <i className="fa-solid fa-code"></i>
            </h1>
            <p>Popular code editor by Microsoft.</p>
          </div>
          <div className="carddev">
            <h3>Vite</h3>
            <h1 className="itag">
              ⚡
            </h1>
            <p>Fast build tool for modern frontend.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mydevtools;
