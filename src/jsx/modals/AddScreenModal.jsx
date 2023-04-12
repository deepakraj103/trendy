import { Button, Modal, Row, Col } from "react-bootstrap";
import cancelIcon from "../../img/cancel-icon.png";
import TagInputField from "../components/screen/tagInputField";
import { useState } from "react";
import DeviceBG from "../../img/DeviceBG.png";

const AddScreenModal = ({ showScreenModal, setShowScreenModal }) => {
  const [step, setStep] = useState(1);
  return (
    <Modal
      className="fade bd-example-modal-lg mt-4 custom-modal custom-modal-medium"
      show={showScreenModal}
      size="md"
    >
      <Modal.Header>
        <Modal.Title>{step === 1 ? "Register your screen" : "Add Screen"}</Modal.Title>
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
                  <img
                    className="devicebg"
                    src={DeviceBG}
                    alt="upload-img"
                  />
                  <div className="image-text">Registration Code </div>
                  <div className="image-text2">******</div>
                </div>
              </div>
              
            </div>
            <div className="screenText">Enter the ‘Screen Registration Code’ as shown on your signage screen</div>
            <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default form-field"
                    placeholder="Enter Code"
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
                  />
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default form-field"
                    placeholder="Screen Location"
                  />
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-default form-field"
                    placeholder="Google Location"
                  />
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <TagInputField />
              </Col>
            </Row>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant=""
          type="button"
          className="btn btn-primary btn-block primary-btn"
          onClick={() => setStep(2)}
        >
          Add Screen
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddScreenModal;
