import React, { useState } from "react";
import Nav from "../../Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import "./Infrastructure.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import Img1 from "./StampingImg/StampingI1.png";
import Img2 from "./StampingImg/StampingI2.png";
import Img3 from "./StampingImg/StampingI3.png";
import Img4 from "./StampingImg/StampingI4.png";
import Img5 from "./StampingImg/StampingI5.png";
import Img6 from "./StampingImg/StampingI6.png";
import Img7 from "./StampingImg/ACE.png";
import Img8 from "./StampingImg/BFWX.png";
import Img9 from "./StampingImg/LMWj1.png";
import Img10 from "./StampingImg/MICROMARIC.png";
import Img11 from "./StampingImg/MITUTOYA.png";
import Img12 from "./StampingImg/MITUTOYO.png";
import Img13 from "./StampingImg/noName.png";
import Img14 from "./StampingImg/Process1.png";
import Img15 from "./StampingImg/process2.png";
import Img16 from "./StampingImg/img1.png";
import Img17 from "./StampingImg/img2.png";
import Img18 from "./StampingImg/img3.png";
import Img19 from "./StampingImg/img4.png";
import Img20 from "./StampingImg/img5.png";
import Img21 from "./StampingImg/img6.png";
import Img22 from "./StampingImg/img7.png";
import Img23 from "./StampingImg/img8.png";
import Img24 from "./StampingImg/img9.png";
import Img25 from "./StampingImg/img10.png";
import Img26 from "./StampingImg/img11.png";
import Img27 from "./StampingImg/img12.png";
import Img28 from "./StampingImg/img13.png";
import Img29 from "./StampingImg/img14.png";
import Img30 from "./StampingImg/img15.png";

const Infrastructure = () => {
  useState(() => {
    function com() {
      $(".fade").fadeOut();
      $(".img-overlay").hide();
    }
    $(document).keyup(function (e) {
      if (e.keyCode == "27") {
        com();
      }
    });
    $(document).ready(function () {
      $(".fade").click(function () {
        com();
      });
      $(".product-item").click(function () {
        var s = $(this).attr("src");
        $(".fade").fadeIn();
        $(".img-overlay")
          .show()
          .html('<img class="overlayed-image" src="' + s + '">');
      });
    });
  });
  return (
    <>
      <Nav />
      {/*  */}

      <div className="container">
        <div className="inner-container">
          <div
            itemscope
            itemtype="http://schema.org/Product"
            className="container-block"
          >
            <div className="images-display">
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item " src={Img1} />
                 
                  500 T Mechanical Press
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img2} />
                  Clinching machine
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img3} />
                  Laser cut & Press brake
                </div>
              </div>

              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img4} />
                  Pipe bending machine
                </div>
              </div>

              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img5} />
                  Laser cut & Press brake
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img6} />
                  Pipe bending machine
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img7} />
                  ACE Jobber XL - CNC
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img8} />
                  BFW X-TRON 544 - VMC
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img9} />
                  LMW J1 - VMC
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img10} />
                  MICROMATIC- CNC GRINDING
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img11} />
                  MITUTOYA- SURFACE TESTER
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img12} />
                  MITUTOYO- CONTRACER
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block imagemargin">
                  <img className="product-item" src={Img13} />
                  Pipe bending machine
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img14} />
                </div>
              </div>

              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img15} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img16} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img17} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img18} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img19} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img20} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img21} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img22} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img23} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img24} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img25} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img26} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img27} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img28} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img29} />
                </div>
              </div>
              <div className="img-block Infra">
                <div className="img-inner-block">
                  <img className="product-item" src={Img30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fade"></div>
      <div className="img-overlay"></div>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <script src="../resources/js/products.js"></script>
    </>
  );
};

export default Infrastructure;
