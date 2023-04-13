import React, { useEffect, useState, useRef } from "react";
import { addScreenCode } from "../../../utils/api";
import { useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";

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
        <div ref={divRef} style={{ backgroundColor: "white" }}>
          <div className="basic-list-group">
            <div className="main-block">
              <div className="registration-block">
                <p className="registration-title">Screen Registration Code </p>
                <p className="code">
                {deviceCode}
                </p>
              </div>
            </div>
            <div className="webrowerTextSection">
              <div>How to register this screen ?</div>
              <div>
                1. Login to console.pickcel.com on your internet browser{" "}
              </div>
              <div>
                2. Go to 'Screen' section &gt; Click on '+Add Screen' &gt; Enter
                above Screen Registration Code &gt; Click on 'Next'
              </div>

              <div>
                3. Enter screen name and other details &gt; Click on 'Register
                Screen'
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Webplayer;
