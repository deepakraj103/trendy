import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import searchIcon from "../../../../img/search.png";
import listIcon from "../../../../img/list-icon.png";
import CompositionTable from "./CompositionTable";
import ZoneInfoTable from "./ZoneInfoTable";
import useSWR from "swr";
import { getAllMedia,  postComposition, putComposition } from "../../../../utils/api";

import PreviewComposition from "../../../modals/previewComposition";
import {useHistory } from "react-router-dom";
import SaveCompositionName from "../../../modals/saveCompositionName";
import UploadMediaModal from "../../../modals/UploadMediaFileModal";
const CommonComposition = ({type,layoutId, composition}) => {
  const [showUploadMediaModal, setUploadMediaModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [name, setName] = useState(composition? composition.name : "");
  const [namePopUp, setOpenNamePopUp] = useState(false);

  const [compositions, setCompositions] = useState(composition? composition.zones[0].content : []);
  const { data: allMedia, mutate } = useSWR(
    "/vendor/display/media",
    getAllMedia
  );
  const history = useHistory();
  
  const addComposition = (media) => {
    setCompositions((prev) => {   
      const meta = JSON.parse(media.properties);
      const content = {
          url: `${media.title}`,
          type: media.type,
          maintainAspectRatio: false,
          fitToScreen: true,
          crop: false,
          duration: meta.length ? meta.length : 10,
          createdBy: media.createdBy.name
      }
      return [...prev, { ...content }];
    });
  };
  const saveComposition = async ()=>{
  const data =   {
      name: name,
      ...(layoutId && { layoutId: layoutId }),
      ...(composition && { compositionId: composition._id
      }),
      zones: [
        {
          name: "zone1",
          zoneId: "644a4d31c8a17ed73a5e3769",
          content:  removeCreatedBy()
        }
      ],
      duration: TotalDuration(), 
      referenceUrl: [
        "image.jpg",
        "image2.jpg",
        "imag3.jpg",
        "image4.jpg"
    ]
  }
  if(type === "create"){
    await postComposition(data);
  } else {
    await putComposition(data)
  }

  history.push("/layout");
}
  const TotalDuration = ()=>{
    let total  =  0;
    compositions.forEach(composition => {
      total += Number(composition.duration);
    });
    return total.toFixed(0);
  }
  function removeCreatedBy() {
    return compositions.map((item) => {

      delete item["createdBy"];
      delete item["_id"];
      return item;
    });
  }
  return (
    <>
      <div className="custom-content-heading d-flex flex-wrap">
        <h1 className="mr-auto">{type === "edit"? "Edit Compostition": "Create Compostition" }</h1>
        <div className="preview-composition d-flex flex-wrap">
          <Button onClick={()=>{
            if(compositions.length){
              setShowPreview(true)
            }
            
          }} className="mr-2 preview-btn" variant="info" disabled={!compositions.length}>
            Preview
          </Button>
          <Button onClick={()=>{
            if(compositions.length){
             setOpenNamePopUp(true)
            }

          }} className="save-composition-btn" variant="info">
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
        {namePopUp && <SaveCompositionName setModalState={setOpenNamePopUp} saveComposition={saveComposition} name={name} setName={setName} />}
      </div>
    </>
  );
};

export default CommonComposition;
