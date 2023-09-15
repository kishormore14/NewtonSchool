import React from "react";
import "./MainDirectors.css";
import Nav from "../../Nav/Nav";
import Aftab from "./Directors_Img/Aftab.jpeg";

import Kishor from "./Directors_Img/Kishor.png";

const MainDirectors = () => {
  return (
    <>
      <Nav />
      <h1 className="hhh">MAIN DIRECTORS</h1>

      <div mainContener className="container maincontainer">
        <div className="row">
          <div className="col-md-6 Directors">
            <img src={Aftab} className="maindirector" alt="Aftab" />
            <h3 className="names">Aftab Naik</h3>
            <h5 style={{ marginLeft: "32px" }}>
              <b> Director - Operations</b>
            </h5>
            <ul>
              <li className="litext-main">
                Worked 32 years in various organization
              </li>
              <li className="litext-main">
                Closely worked with,
                <ul>
                  <li className="litext">Marketing& Business Excellence</li>
                  <li className="litext">Plant operations</li>
                  <li className="litext">Supplier development</li>
                  <li className="litext">Project management</li>
                  <li className="litext">Plant maintenance</li>
                  <li className="litext">Purchase& Procurement</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-6 Directors">
            <img src={Kishor} className="maindirector" alt="Kishor" />
            <h3 className="names">Kishor More</h3>
            <h5 style={{ marginLeft: "32px" }}>
              <b> Director - Commercials</b>
            </h5>
            <ul>
              <li className="litext-main">
                Worked 16 years in various organization
              </li>
              <li className="litext-main">
                MBA Finance & International Business Management,
                <ul>
                  <li className="litext">Worked with Secoraa</li>
                  <li className="litext">
                    Core area Finance & International Business
                  </li>
                  <li className="litext">Project management</li>
                  <li className="litext">Purchase& Procurement</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h4 id="paragrph">
              Lorem ipsum, dolor sit amet consectetur adip isicing elit.
              Asperiores sit repellat expedita, debitis p raesentium voluptatum
              necessitatibus. Enim sequi, molestia e blanditiis beatae facilis,
              culpa voluptas dolorum ea ratione, ullam quia quae.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDirectors;
