import React, { useState } from "react";
import Nav from "../../Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import "./procucts.css";
import "./Stamping.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import Img1 from "./StampingImages/1.png";
import Img2 from "./StampingImages/2.png";
import Img3 from "./StampingImages/3.png";
import Img4 from "./StampingImages/4.png";
import Img5 from "./StampingImages/5.png";
import Img6 from "./StampingImages/6.png";
import Img7 from "./StampingImages/7.png";
import Img8 from "./StampingImages/8.png";
import Img9 from "./StampingImages/9.png";
import Img10 from "./StampingImages/10.png";
import Img11 from "./StampingImages/11.png";
import Img12 from "./StampingImages/12.png";
import Img13 from "./StampingImages/13.png";
import Img14 from "./StampingImages/Picturebg.png";
import Img15 from "./StampingImages/15.png";
import Img16 from "./StampingImages/16.png";
import Img17 from "./StampingImages/17.png";
import Img18 from "./StampingImages/18.png";

const Stamping = () => {
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
                  <img className="product-item" src={Img14} />
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

export default Stamping;
