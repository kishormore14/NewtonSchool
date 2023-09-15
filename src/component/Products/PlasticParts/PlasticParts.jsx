import React, { useState } from "react";
import Nav from "../../Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import "../Stamping/procucts.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// images

import Img1 from "./PlasticImages/Picture1.png";
import Img2 from "./PlasticImages/Picture2.png";
import Img3 from "./PlasticImages/Picture3.jpg";
import Img4 from "./PlasticImages/Picture4.jpg";
import Img5 from "./PlasticImages/Picture5.jpg";
import Img6 from "./PlasticImages/Picture6.jpg";

const PlasticParts = () => {
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

export default PlasticParts;
