import React from "react";
import "./Nav.css";
import Logo from "../Images/logo.png";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary Backg ">
        <div className="container contenerMargin">
          <img src={Logo} className="img" alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ zIndex: 2 }}
          >
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
              <li>
                <Link className="nav-link active Contact" to={"/maindirectors"}>
                  ABOUT US
                </Link>
              </li>

              <li>
                <Link
                  className="nav-link active Contact"
                  to={"/stampinginfrastructure"}
                >
                  INFRASTRUCTURE
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  // routerLink="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/investmentcasting">
                      Investment Castings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/heavyfabrication">
                      Stamping & Welding
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sgicasting">
                      CI & SGI Casting
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/forging">
                      Forging Parts
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/machinedparts">
                      Machined Parts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/rubber">
                      Rubber & Plastic Parts
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link active" to={"/enquiry"}>
                  ENQUIRY
                </Link>
              </li>
              <li>
                <Link className="nav-link active Contact" to={"/contact"}>
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link className="nav-link active Contact" to={"/Login"}>
                  LOGIN
                </Link>
              </li>
              <li>
                <Link className="nav-link active Contact" to={"/Registration"}>
                  REGISTRATION
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
      {/* <div id="CcomIngContainer">
        <img src={ECOIMG} id="ECOIMG" alt="100%" />
      </div> */}
    </div>
  );
};

// Nav.propTypes = {};

export default Nav;
