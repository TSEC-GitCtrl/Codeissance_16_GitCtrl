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
          <h3>ABOUT Grievance Redressal System</h3>
          <p className="main-content">
            Centralised Public Grievance Redress and Monitoring System (CPGRAMS)
            is an online platform available to the citizens 24x7 to lodge their
            grievances to the public authorities on any subject related to
            service delivery. It is a single portal connected to all the
            Ministries/Departments of Government of India and States. Every
            Ministry and States have role-based access to this system. CPGRAMS
            is also accessible to the citizens through standalone mobile
            application downloadable through Google Play store and mobile
            application integrated with UMANG.
          </p>
          <p className="main-content">
            The status of the grievance filed in CPGRAMS can be tracked with the
            unique registration ID provided at the time of registration of the
            complainant. CPGRAMS also provides appeal facility to the citizens
            if they are not satisfied with the resolution by the Grievance
            Officer. After closure of grievance if the complainant is not
            satisfied with the resolution, he/she can provide feedback. If the
            rating is ‘Poor’ the option to file an appeal is enabled. The status
            of the Appeal can also be tracked by the petitioner with the
            grievance registration number.
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
