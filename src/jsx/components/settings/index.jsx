import React, { useState } from "react";
import { Button, Col, Dropdown } from "react-bootstrap";
import ListMedia from "./defaultComposition";
import AddScreenModal from "../../modals/AddScreenModal";
import FilterModal from "../../modals/FilterModal";
import UploadMediaModal from "../../modals/UploadMediaFileModal";
import addImg from "../../../img/add-icon.png";
import searchIcon from "../../../img/search.png";
import listIcon from "../../../img/list-icon.png";
import uploadIcon from "../../../img/upload-icon.png";
import canvaIcon from "../../../img/canva-icon.png";

const Settings = () => {
  const [showScreenModal, setShowScreenModal] = useState(false);
  const [showFilterModal, setFilterModal] = useState(false);
  const [showUploadMediaModal, setUploadMediaModal] = useState(false);

  return (
    <>
      <div className="custom-content-heading d-flex flex-wrap">
        <h1>Settings</h1>
        <div className=" ml-auto d-flex flex-wrap align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant='outline-primary'
                      size='sm'
                      className='mt-1 mb-2'
                    >
                      Default Content
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#'>Default Content</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
      </div>
      
      <ListMedia />
    </>
  );
};

export default Settings;
