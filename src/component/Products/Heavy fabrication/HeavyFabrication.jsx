import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "../Stamping/procucts.css";

import Nav from "../../Nav/Nav";

import Img1 from "./bg/1.png";
import Img2 from "./bg/2.png";
import Img3 from "./bg/3.png";
import Img4 from "./bg/4.png";
import Img5 from "./bg/5.png";
import Img6 from "./bg/6.png";
import Img7 from "./bg/7.png";
import Img8 from "./bg/8.png";
import Img9 from "./bg/9.png";
import Img10 from "./bg/10.png";
import Img11 from "./bg/11.png";
import Img12 from "./bg/12.png";
import Img13 from "./bg/13.png";
import Img14 from "./bg/14.png";
import Img15 from "./bg/15.png";
import Img16 from "./bg/16.png";
import Img17 from "./bg/17.png";
import Img18 from "./bg/18.png";
import Img19 from "./bg/19.png";
import Img20 from "./bg/20.png";
import Img21 from "./bg/21.png";
import Img22 from "./bg/22.png";
import Img23 from "./bg/23.png";
import Img24 from "./bg/24.png";
import Img25 from "./bg/25.png";
import Img26 from "./bg/26.png";
import Img27 from "./bg/27.png";
import Img28 from "./bg/28.png";
import Img29 from "./bg/29.png";
import Img30 from "./bg/30.png";

const HeavyFabrication = () => {
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
          .html('<img className="overlayed-image" src="' + s + '">');
      });
    });
  });
  return (
    <>
      <Nav />
      <h3 className="productHeading">Stamping & Welding</h3>
      <div className="container">
        <div className="inner-container">
          <div
            itemscope
            itemtype="http://schema.org/Product"
            className="container-block"
          >
            <div className="images-display">
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img1} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img2} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img3} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img4} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img5} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img6} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img7} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img8} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img9} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img10} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img11} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img12} />
                </div>
              </div>

              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img13} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img14} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img15} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img16} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img17} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img18} />
                </div>
              </div>

              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img19} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img20} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img21} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img22} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img23} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img24} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img25} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img26} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img27} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img28} />
                </div>
              </div>
              <div className="img-block">
                <div className="img-inner-block">
                  <img className="product-item" src={Img29} />
                </div>
              </div>
              <div className="img-block">
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

export default HeavyFabrication;
