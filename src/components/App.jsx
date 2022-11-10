import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import Jobs from "./Jobs";
import Navbar from "./Navbar";
import Payments from "./Payments";

function App(){
    return(
        <div>
        <Router>
              <div>
                <Routes>
                  <Route exact path='/'element={<Home />}  />
                  <Route exact path='/Jobs' element={<Jobs />}  />
                  <Route exact path='/Payments' element={<Payments />}  />
                </Routes>
              </div>
            </Router>
        </div>
    )
}

export default App;