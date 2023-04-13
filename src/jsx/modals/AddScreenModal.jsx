import { Button, Modal, Row, Col } from "react-bootstrap";
import cancelIcon from "../../img/cancel-icon.png";
import TagInputField from "../components/screen/tagInputField";
import { useState } from "react";
import DeviceBG from "../../img/DeviceBG.png";
import webScreen from "../../img/webScreen.png";
import { v4 as uuidv4 } from 'uuid';

import { addScreen } from "../../utils/api";

const AddScreenModal = ({ setShowScreenModal, callAllScreenApi }) => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [screenLocation, setScreenLocation] = useState("");
  const [googleLocation, setGoogleLocation] = useState("");
  const [tags, setTags] = useState([]);
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const saveScreen = async () => {
    if (step === 1) {
      setStep(2);
      return;
    }
    if(step === 2){
      const finalScreenData = {
        code: code,
        name: name,
        screenLocation: screenLocation,
        googleLocation: googleLocation,
        tags: tags,
      };
      await addScreen(finalScreenData);
      await callAllScreenApi();
      setShowScreenModal(false);
      
    }
    if(step === 4){
      window.open(`/web-player?id=${uuidv4()}`, '_blank');
      setStep(1);
      return;
    }
  };
  return (
    <Modal
      className="fade bd-example-modal-lg mt-4 custom-modal custom-modal-medium"
      show={true}
      size="md"
    >
      <Modal.Header>
        <Modal.Title className={step === 3 ? " font20" : ""}>
          {step === 1 && "Register your screen"}
          {step === 2 && "Add Screen"}
          {step === 3 && "Try following if you don’t have display screen"}
          {step === 4 && "Webplayer"}
        </Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setShowScreenModal(false)}
        >
          <img className="cancel-icon" src={cancelIcon} alt="cancel-icon" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        {step === 1 && (
          <div>
            <div className="relative d-flex align-items-center justify-content-center flex-column">
              <div className="upload-flie-img">
                <div className="image-container">
                  <img className="devicebg" src={DeviceBG} alt="upload-img" />
                  <div className="image-text">Registration Code </div>
                  <div className="image-text2">******</div>
                </div>
              </div>
            </div>
            <div className="screenText">
              Enter the ‘Screen Registration Code’ as shown on your signage
              screen
            </div>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="form-group">
                <input
                  value={code}
                  type="text"
                  className="form-control input-default form-field"
                  placeholder="Enter Code"
                  onChange={handleCodeChange}
                />
              </div>
            </Col>
          </div>
        )}
        {step === 2 && (
          <>
            {" "}
            <div className="add-screen-paragraph">
              <p>
                Want to add new screen? Please fill in some information and
                continue
              </p>
            </div>
            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default form-field"
                    placeholder="Screen Code"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default form-field"
                    placeholder="Screen Location"
                    value={screenLocation}
                    onChange={(event) => {
                      setScreenLocation(event.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default form-field"
                    placeholder="Google Location"
                    value={googleLocation}
                    onChange={(event) => {
                      setGoogleLocation(event.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <TagInputField tags={tags} setTags={setTags} />
              </Col>
            </Row>
          </>
        )}
        {step === 3 && (
          <div className="webBrowserOptionSection" onClick={()=>{
            setStep(4)
          }}>
            <div className="try-card-img">
              <img className="browserImg" src={webScreen} alt="web screen" />
            </div>
            <div className="try-card-info">
              <p className="tryBrowser">Try browser based Webplayer</p>
              <p className="tryBrowserText">Works on all types of browsers</p>
              <p>(Ideal for quick start)</p>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="relative d-flex align-items-center justify-content-center flex-column">
              <div className="upload-flie-img">
                <div className="image-container">
                  <img className="devicebg" src={DeviceBG} alt="upload-img" />
                  <div className="image-text">Registration Code </div>
                  <div className="image-text2">ABDHSG</div>
                </div>
              </div>
            </div>
            <div className="screenText">
              Enter the ‘Screen Registration Code’ as shown on your signage
              screen
            </div>
          </div>
        )}
      </Modal.Body>
      {step !== 3 && (
        <Modal.Footer>
          <Button
            variant=""
            type="button"
            className="btn btn-primary btn-block primary-btn"
            onClick={() => saveScreen()}
          >
            {step === 1 && "Done"}
            {step === 4 && "Okay"}
          </Button>
          {step === 1 && (
            <>
              <div className="alternetTextSection">
                {" "}
                <span>
                  Don’t have a display screen that is ready to use yet?
                </span>
              </div>
              <div className="alternetTextSection">
                <p
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  Try Alternate Options
                </p>
              </div>
            </>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default AddScreenModal;
