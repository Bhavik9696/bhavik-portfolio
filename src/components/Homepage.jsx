// import { Button } from "bootstrap";
import LeftHomepage from "./LetfHomepage";
import RightHomepage from "./RightHomepage";
import Button from "./Button";

let Homepage=()=>{
  return(
    <>
    <div className="homeContainer">
      <LeftHomepage></LeftHomepage>
      <RightHomepage></RightHomepage>
    </div>
    <Button></Button>
  
    </>
    


  )
}

export default Homepage;