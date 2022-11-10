import React from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';
import symbol from "../assets/symbol.png"

function Home(){
return(
    <div>
    <Navbar></Navbar>
        <div className="container">
           <img className="symbol" src={symbol}></img>
           <h2 className="heading">Welcome to Digipplus</h2>
           <h6 className="announcement">Announcements📢</h6>
           <div className="banner">
            <p className="banner-text">We are working on adding Project and Internship Details,So just fill up profile only</p>
           </div>
           <div className="work">
              <h6 className="side-menu">Work Action</h6>
              <br></br>
              <div className="intern"><p className="intern-txt">View Intern Data</p></div>
           </div>
           <br></br>
           <h6 className="internship">Internships</h6>
           <br></br>
           <div className="Solution">
             <h6 className="sol-text">Solution Writing</h6>
             <p className="sol-p">Write Solution</p>
           </div>
        </div>
    </div>
)
}

export default Home;