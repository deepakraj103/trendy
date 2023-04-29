import React from 'react'
import { Button } from "react-bootstrap";
import searchIcon from "../../../img/search.png";
import listIcon from "../../../img/list-icon.png";
import emptyMediaImg from "../../../img/layout-img.png";

const Layout = () => {
  return (
    <div>
            <div className="custom-content-heading d-flex flex-wrap">
        <h1>Layouts</h1>
      </div>
      <div className="form-head d-flex mb-3 align-items-start">
        <Button
          className="mr-2"
          variant="info add-screen-btn"
        >
         Add Composition
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
          <Button
            className="ml-2 icon-btn"
            variant="primary"
          >
            <img className="icon-icon" src={listIcon} alt="list-icon" />
          </Button>
        </div>
       
      </div>

      <div className="empty-media text-center">
          <div class="empty-media-img layout-empty-img mx-auto">
            <img
              className="media-img img-fluid"
              src={emptyMediaImg}
              alt="media-img"
            />
          </div>
          <h3>Add Composition</h3>
          <p>
          Add Media files to composition, Lorem ipsum dolor is a dummy  <br /> text. Dummy text.
           
          </p>
        </div>
    </div>
  )
}

export default Layout