import React from "react";
import Navbar from "./Navbar";
import { Router,Route,Routes,useNavigate, Link } from 'react-router-dom';

function Payments(){
    return(
      <div>
        <Navbar></Navbar>
        <br></br>
        <div className="row">
          <div className="col-md-2 pay-sidebar">
            <h6 className="pay-menu">PAYMENT NAVIGATION</h6>
            <div className="side-menu-1">
              <h6>INVOICES</h6>
            </div>
            <div className="side-menu-2">
              <h6>MY BANK DETAILS</h6>
            </div>
          </div>
          <div className="col-md-6 pay-details">
            <p>Payment Date:<b>Oct,25,2022,11:07a.m.</b> Amount Paid:<b>₹3150</b></p>
            <p>Payment Made For Project</p>
            <p>K10 Maths Text Book Solution</p>
            <p>K12 maths Text book Solution</p>
          </div>
          <div className="col-md-2">
            <h6>Lifetime Earning</h6>
            <b>₹3150</b>
            <h6>This Month Earning</h6>
            <b>₹0</b>
          </div>
        </div>

      </div>
    )
}

export default Payments;