import React, { useEffect, useState, useRef } from "react";
import { addScreenCode } from "../../../utils/api";
import { Link, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
import webPlayerImg from "../../../img/web-player-bg.png";

const Webplayer = () => {
  const [deviceCode, setDeviceCode] = useState("");
  const divRef = useRef(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const getScreenCode = async () => {
    const getDeviceCode = await addScreenCode(id);
    setDeviceCode(getDeviceCode.deviceCode);
  };
  useEffect(() => {
    getScreenCode();
  }, []);
  const onFullScreen = () => {
    if (divRef.current) {
      // divRef.current.requestFullscreen();

      if (divRef.current.requestFullscreen) {
        divRef.current.requestFullscreen();
      } else if (divRef.current.webkitRequestFullscreen) {
        divRef.current.webkitRequestFullscreen();
      } else if (divRef.current.msRequestFullscreen) {
        divRef.current.msRequestFullscreen();
      }
    }
  };
  return (
    <Col xl="12">
      <div>
        <div>
          <div>
            {" "}
            <button id="Fullscreen" onClick={() => onFullScreen()}>
              <div class="full-text">
                <div class="sec-block">
                  {" "}
                  <i class="fa fa-expand"></i>
                  <p>View Full Screen</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div ref={divRef}>
          <div className="basic-list-group d-none">
            <div className="main-block">
              <div className="registration-block">
                <p className="registration-title">Screen Registration Code </p>
                <p className="code">{deviceCode}</p>
              </div>
            </div>
            <div className="webrowerTextSection">
              <div className="how-to-register">
                How to register this screen ?
              </div>
              <div className="guidelines-login">
                1. Login to{" "}
                <Link>
                  <span className="white-color">console.pickcel.com</span>
                </Link>{" "}
                on your internet browser{" "}
              </div>
              <div className="guidelines-login">
                2. Go to 'Screen' section &gt; Click on{" "}
                <Link>
                  <span className="white-color">'+Add Screen</span>'
                </Link>{" "}
                &gt; Enter above{" "}
                <Link>
                  <span className="white-color">Screen Registration Code</span>
                </Link>{" "}
                &gt; Click on{" "}
                <Link>
                  <span className="white-color">'Next'</span>
                </Link>
              </div>

              <div className="guidelines-login">
                3. Enter screen name and other details &gt; Click on
                <Link>
                  <span className="white-color"> 'Register Screen'</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="basic-list-group video-container d-none">
            <iframe
              width="100%"
              height="440px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div className="basic-list-group image-preview-container">
            <img
              className="webplayer-preview-img"
              src={webPlayerImg}
              alt="media-img"
            />
          </div>

          <div class="console-reg" id="consoleReg">
            <p>
              Copy paste above Screen Registration Code in console{" "}
              <em class="ti-arrow-circle-up"></em>
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Webplayer;
