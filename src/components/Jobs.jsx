import React from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';

function Jobs(){
    return(
      <div>
        <Navbar></Navbar>
        <br></br>
        <div className="row">
            <div className=" col-md-3 Side-bar">
              <h6 className="side-text">JOBS</h6>
              <br></br>
              <div className="side-box">
                <h6>Solution Writing</h6>
              </div>
              <br></br>
              <h6 className="side-text">FOR JOB APPLICATION</h6>
              <br></br>
              <div className="side-box-gray">
                <h6>SCREENING TASKS</h6>
              </div>
              <br></br>
              <h6 className="side-text">APPLICATION STATUS</h6>
              <br></br>
              <div className="side-box">
                <h6>JOB APPLICATION STATUS</h6>
              </div>
              <br></br>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h6 className="con-text">K10 Maths Text Book Solution</h6>
                <p className="user">intern digipplus</p>
              </div>
            </div>
            <div className="col-md-2">
            <h6 className="announce">Announcements📢</h6>
            <div className="announce-con">
              <p>We are working on adding Project and Internship Details,So just fill up profile only</p>
            </div>
            </div>
         </div>
      </div>
    )
}

export default Jobs;