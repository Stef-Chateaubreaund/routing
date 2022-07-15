import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Word from "./components/Word";
import Color from "./components/Color";  //get all
import Style from "./components/Style"; 


    
function App() { //always match with the params 
  return (
    <div>

      <Routes>
        <Route path="/:word" element={<Style />} >
          <Route path=":color" element={<Style/>}>
            <Route path=":backgroundColor" element={<Style/>}/> 
            {/* route nested inside a route */}
          </Route>
        </Route>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/:word/:color/:backgroundColor" element={<Color />} /> */}
      </Routes>
    </div>
  );
}
    //* new version  of REACT router "exact" word " is useless*/
export default App
