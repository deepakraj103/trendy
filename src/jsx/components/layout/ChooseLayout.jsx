import React from "react";
import {  Col,Row } from "react-bootstrap";
import layoutSelected from "../../../img/layout-select-img.png";
import layoutSelected1 from "../../../img/layout-select-img1.png";
import layoutSelected2 from "../../../img/layout-select-img2.png";
import singleZone1 from "../../../img/single-timezone-img.png";
import singleZone2 from "../../../img/single-timezone-img1.png";

const ChooseLayout = () => {
  return (
    <>
      <div className="custom-content-heading d-flex flex-wrap flex-column">
        <h1 className="mb-1">Choose Layout</h1>
        <p className="three-layout-paragrapgh">Select one of three layout for your composition</p>
      </div>
      <div className="layout-row">
<Row>
    <Col  lg="4" md="4" sm="6" xs="12">
        <div className="layout-selected-column active">
            <div className="layout-selected-img text-center">
            <img
                  className="layout-select-img"
                  src={layoutSelected}
                  alt="menu-icon"
                />
            </div>

            <h6>Single Zone Landscape</h6>
            <p>1 Zone</p>
        </div>
    </Col>
    <Col  lg="4" md="4" sm="6" xs="12">
        <div className="layout-selected-column ">
            <div className="layout-selected-img text-center">
            <img
                  className="layout-select-img"
                  src={layoutSelected1}
                  alt="menu-icon"
                />
            </div>

            <h6>Two Zone Landscape</h6>
            <p>1 Zone</p>
        </div>
    </Col>
    <Col  lg="4" md="4" sm="6" xs="12">
        <div className="layout-selected-column ">
            <div className="layout-selected-img text-center">
            <img
                  className="layout-select-img"
                  src={layoutSelected2}
                  alt="menu-icon"
                />
            </div>
            <h6>Three Zone Landscape</h6>
            <p>1 Zone</p>
        </div>
    </Col>

    <Col  lg="4" md="4" sm="6" xs="12">
        <div className="layout-selected-column ">
            <div className="layout-selected-img text-center">
            <img
                  className="layout-select-img single-time-zone"
                  src={singleZone1}
                  alt="menu-icon"
                />
            </div>
            <h6>Single Zone Portrait</h6>
            <p>1 Zone</p>
        </div>
    </Col>
    <Col  lg="4" md="4" sm="6" xs="12">
        <div className="layout-selected-column ">
            <div className="layout-selected-img text-center">
            <img
                  className="layout-select-img single-time-zone"
                  src={singleZone2}
                  alt="menu-icon"
                />
            </div>
            <h6>Two Zone Portrait</h6>
            <p>1 Zone</p>
        </div>
    </Col>
</Row>
      </div>
    </>
  );
};

export default ChooseLayout;
