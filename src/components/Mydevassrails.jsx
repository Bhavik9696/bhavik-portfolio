let Mydevtools = () => {
  return (
    <div className="mydevtoolcontainer">
      <div className="languages">
        <h2 className="h2">Languages</h2>
        <div className="cards">
          <div className="carddev">
            <h3>HTML</h3>
            <h1 className="itag" id="html">
              <i class="fa-brands fa-html5"></i>
            </h1><p>Markup language for web content.</p>
            
          </div>
          <div className="carddev">
            <h3>css</h3>
            <h1 className="itag" id="css">
               <i class="fa-brands fa-css3-alt"></i>
            </h1><p>Style language for web design.</p>
           
          </div>
          <div className="carddev">
            <h3>js</h3>
            <h1 className="itag" id="js">
             <i class="fa-brands fa-js"></i>
            </h1><p>Web scripting & dynamic content.</p>
            
          </div>
          <div className="carddev">
            <h3>sql</h3>
            <h1 className="itag">
              <i class="fa-solid fa-database"></i>
            </h1><p>Language for managing databases.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mydevtools;
