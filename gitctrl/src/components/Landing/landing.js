import "./landing.css";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Navbar from "../navbar/Navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <section className="content-section" id="content-section">
        <div className="left-side-content">
          <h3>ABOUT Student Management System</h3>
          <p className="main-content">
            lIf you have a variable to send, and not a string as in the example
            above, you just put the variable name insid If you have a variable
            to send, and not a string as in the example above, you just put the
            variable name insid If you have a variable to send, and not a string
            as in the example above, you just put the variable name insid If you
            have a variable to send, and not a string as in the example above,
            you just put the variable name insid If you have a variable to send,
            and not a string as in the example above, you just put the variable
            name insid If you have a variable to send, and not a string as in
            the example above, you just put the variable name insid If you have
            a variable to send, and notid If you have a variable to send, and
            not a string as in the exam
          </p>
          <p className="main-content">
            If you have a variable to send, and not a string as in the example
            above, you just put the variaIf you have a variable to send, and not
            a string as in the example above, you just put the variable name
            insid
          </p>
          {/* <div>
            <span className="span">
              <InfoIcon fontSize="" />
              <h5>Issues which are not taken up for redress :</h5>
            </span>
            <p>
              <ul>
                <li>
                  <ChevronRightIcon fontSize="" /> Subjudice cases or any matter
                  concerning judgment given by any court.
                </li>
                <li>
                  <ChevronRightIcon fontSize="" /> Personal and family disputes.
                </li>
                <li>
                  <ChevronRightIcon fontSize="" /> RTI matters.
                </li>
                <li>
                  <ChevronRightIcon fontSize="" /> Anything that impacts upon
                  territorial integrity of the country orfriendly relations with
                  other countries.
                </li>
                <li>
                  <ChevronRightIcon fontSize="" /> Suggestions.
                </li>
              </ul>
            </p>
          </div> */}
        </div>
        <div className="right-side-content">
          <h3>WHAT'S NEW</h3>
          <div className="new-section-container">
            <ul>
              <li>
                <a href="">
                  <span>
                    <b>22</b>
                    <em>Jun 2021</em>
                  </span>
                  Reduction of stipulated time limit for disposal of Public
                  Grievance in CPGRAMS (PDF - 474 KB)
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <b>22</b>
                    <em>Sep 2020</em>
                  </span>
                  Tracking of grievance registered in CPGRAMS (PDF - 660 KB)
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <b>31</b>
                    <em>Mar 2020</em>
                  </span>
                  Handling of Public Grievances received in CPGRAMS on COVID-19
                  in States/UTs (PDF - 188 KB)
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <b>30</b>
                    <em>Mar 2021</em>
                  </span>
                  Handling Public Grievances pertaining to COVID-19 in
                  Ministries /Departments of GoI (PDF - 108 KB )
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
