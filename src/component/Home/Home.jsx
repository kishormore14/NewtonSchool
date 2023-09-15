import React from "react";
import Nav from "../Nav/Nav";
import Banner from "../Images/bg/Logoslider.png";
import Banner1 from "../Images/bg/casting.png";
import Banner2 from "../Images/bg/rubber.png";
import Banner3 from "../Images/bg/forging3.png";
import Banner4 from "../Images/bg/forging2.png";
import Banner5 from "../Images/bg/investment.png";
import Banner6 from "../Images/bg/stamping.png";
import Banner7 from "../Images/bg/machined2.png";

import "./Home.css";
import Img1 from "./Project.jpg";

const Home = () => {
  return (
    <div>
      <Nav />

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext">Forging Parts</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext">CI & SGI Casting</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext">Rubber & Plastic Parts</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={Banner4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext">Forging Parts</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner5} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext">Investment Casting</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner6} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext"> Stamping & Welding</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner7} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="slidertext"> Machined Parts</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*  */}

      <div className="container threediv">
        <div className="row roww">
          <div className="col-md-4 col-12 coll  ">
            <img id="homeimg" src={Img1} alt="sendimg" />
          </div>
          <div className="col-md-4 col-12 coll sinopsis ">
            <strong className="bold">Synopsis:</strong> <br />
            Since its foundation, the firm has expanded dramatically, and it is
            now recognised in the <b>Domestic and International </b> markets as
            a prominent participant in the manufacturing and supply of parts
            such as
            <b>
              Stamping, Fabrication, Castings, Forgings, Rubber, Plastics &
              Machined parts
            </b>
            .
            <br />
            <b> AK</b> brings in a plethora of innovative ideas that address
            PQCDSM aspects of working and provide direct benefits to all
            stakeholders.
            <br />
            <b>AK</b> is transitioning from the core consulting to the
            manufacturing business domains involving a passenger vehicles,
            commercial vehicles, off-road vehicles (earth moving equipment),
            agricultural segments, and non-automotive segments We go above and
            beyond to ensure complete customer satisfaction. We’re ready to take
            on any challenges that come our way, and our team of engineers and
            experts provides effective solutions in the field.
          </div>
          <div className="col-md-4 col-12 coll divpart ">
            <strong className="bold">
              Suppliers and exporters of automotive and off-road vehicle parts.
            </strong>
            <ul>
              <li>Stamping & Assemblies</li>
              <li> Under chassis parts</li>
              <li> CI & SG Iron castings</li>
              <li> Investment castings</li>
              <li>Forging</li>
              <li> Machined Parts</li>
              <li> Rubber & Plastic parts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
