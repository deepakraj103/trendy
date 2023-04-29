import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import searchIcon from "../../../img/search.png";
import listIcon from "../../../img/list-icon.png";
import emptyMediaImg from "../../../img/layout-img.png";
import CompositionTable from "./CompositionTable";
import ZoneInfoTable from "./ZoneInfoTable";

const CreateComposition = () => {
  return (
    <>
      <div className="custom-content-heading d-flex flex-wrap">
        <h1 className="mr-auto">Create Compostition</h1>
        <div className="preview-composition d-flex flex-wrap">
        <Button
          className="mr-2 preview-btn"
          variant="info"
        >
          Preview
        </Button>
        <Button
          className="save-composition-btn"
          variant="info"
        >
          Save Composition
        </Button>
        </div>
      </div>
      <div className="form-head d-flex mb-3 align-items-start">
        <Button
          className="mr-2"
          variant="info add-screen-btn"
        >
          Add Media
          <span className="btn-icon-right">
            <div class="glyph-icon flaticon-381-add-1"></div>
          </span>
        </Button>
        <div className="search-textfield ml-auto d-flex flex-wrap align-items-center">
          <div className="form-group mb-0">
            <input
              type="text"
              className="form-control input-default "
              placeholder="Search..."
            />
            <img className="search-icon" src={searchIcon} alt="search" />
          </div>
          <Button className="ml-2 icon-btn" variant="primary">
            <img className="icon-icon" src={listIcon} alt="list-icon" />
          </Button>
        </div>
      </div>

{/* Empty Layout */}
      {/* <div className="empty-media text-center">
        <div class="empty-media-img layout-empty-img mx-auto">
          <img
            className="media-img img-fluid"
            src={emptyMediaImg}
            alt="media-img"
          />
        </div>
        <h3>Add Composition</h3>
        <p>
          Add Media files to composition, Lorem ipsum dolor is a dummy <br />{" "}
          text. Dummy text.
        </p>
      </div> */}

      <div className="custom-comp-table flex-1">
        <Row className="h-100">
        <Col lg="6" md="6" sm="6" xs="12" className="pr-0 border-col">
        <CompositionTable />
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="pl-0">
        <ZoneInfoTable />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateComposition;
