import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import searchIcon from "../../../img/search.png";
import listIcon from "../../../img/list-icon.png";
import emptyMediaImg from "../../../img/layout-img.png";
import CompositionTable from "./CompositionTable";
import ZoneInfoTable from "./ZoneInfoTable";
import useSWR from "swr";
import { getAllMedia, BASE_URL } from "../../../utils/api";
import UploadMediaModal from "../../modals/UploadMediaFileModal";
import { v4 as uuidv4 } from "uuid";
import PreviewComposition from "../../modals/previewComposition";
const CreateComposition = () => {
  const [showUploadMediaModal, setUploadMediaModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [compositions, setCompositions] = useState([]);
  const { data: allMedia, mutate } = useSWR(
    "/vendor/display/media",
    getAllMedia
  );
  const addComposition = (media) => {
    setCompositions((prev) => {   
      const meta = JSON.parse(media.properties);
      const content = {
          id:uuidv4(),
          title: media.title,
          url: `${BASE_URL}${media.title}`,
          type: media.type,
          maintainAspectRatio: false,
          fitToScreen: true,
          crop: false,
          duration: meta.length ? meta.length : 10,
          createdBy: media.createdBy
      }
      return [...prev, { ...content }];
    });
  };

  return (
    <>
      <div className="custom-content-heading d-flex flex-wrap">
        <h1 className="mr-auto">Create Compostition</h1>
        <div className="preview-composition d-flex flex-wrap">
          <Button onClick={()=>{
            if(compositions.length){
              setShowPreview(true)
            }
            
          }} className="mr-2 preview-btn" variant="info" disabled={!compositions.length}>
            Preview
          </Button>
          <Button className="save-composition-btn" variant="info">
            Save Composition
          </Button>
        </div>
      </div>
      <div className="form-head d-flex mb-3 align-items-start">
        <Button
          className="mr-2"
          variant="info add-screen-btn"
          onClick={() => {
            setUploadMediaModal(true);
          }}
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
            <CompositionTable
              allMedia={allMedia}
              addComposition={addComposition}
            />
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" className="pl-0">
            <ZoneInfoTable compositions={compositions} setCompositions={setCompositions}/>
          </Col>
        </Row>
        <UploadMediaModal
          showUploadMediaModal={showUploadMediaModal}
          setUploadMediaModal={setUploadMediaModal}
          callAllMediaApi={mutate}
        />
        {showPreview && <PreviewComposition setShowPreview={setShowPreview} compositions={compositions}/>}

      </div>
    </>
  );
};

export default CreateComposition;
