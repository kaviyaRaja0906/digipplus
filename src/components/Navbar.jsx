import React from "react";
import logo from "../assets/logo.png";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';

function Navbar(){

    let navigate = useNavigate();

    return(
    <div>
        <div className="row">
            <div col-md-3 col-xs-2>
             <img className="logo" src={logo}></img>
            </div>
            <div className="col-md-6 col-xs-5 menu">
                <ul>
                    <li onClick={() => navigate("/")}><a>Home</a></li>
                    <li onClick={() => navigate("/Jobs")} ><a>My Jobs</a></li>
                    <li onClick={() => navigate("/Payments")} ><a>My Payment</a></li>
                    <li><a>My Offerletter</a></li>
                    <li><a>My Certificate</a></li>
                </ul>
            </div>
            <div className="col-md-2 col-xs-2 profile">
                <div className="letter"><h5> | D</h5></div>
            </div>
        </div>
       <hr />
    </div>
    )
}

export default Navbar;