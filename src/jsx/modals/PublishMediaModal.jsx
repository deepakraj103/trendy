import { Button, Modal, Row, Col, Badge, Table } from "react-bootstrap";
import cancelIcon from "../../img/cancel-icon.png";
import { useEffect, useState } from "react";
import { getAllScreens, publishMedia } from "../../utils/api";
// import tagCloseIcon from "../../img/tag-close-icon.png";

const PublishMediaModal = ({ setShowPublishPopUp, selected }) => {
  const [allScreens, setAllScreens] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedValues, setCheckedValues] = useState([]);
  // use effect
  useEffect(() => {
    callAllScreenApi();
  }, []);

  const callAllScreenApi = async () => {
    const list = await getAllScreens();
    setAllScreens(list);
  };
 

  const handleCheckboxChange = (event) => {
    const newCheckedItems = { ...checkedItems, [event.target.name]: event.target.checked }
    const selectedScreens = []
    for (const key in newCheckedItems) {
      if (newCheckedItems[key] === true) {
        selectedScreens.push(key);
      }
    }
    setCheckedValues(selectedScreens)
    setCheckedItems(newCheckedItems);
  };

  const handleSelectAllChange = (event) => {
    const newCheckedItems = {};
    allScreens.forEach((item) => {
      newCheckedItems[item._id] = event.target.checked;
    });
   const selectedScreens = []
    for (const key in newCheckedItems) {
      if (newCheckedItems[key] === true) {
        selectedScreens.push(key);
      }
    }
    setCheckedValues(selectedScreens)
    setCheckedItems(newCheckedItems);
  };

const handleSubmit = ()=>{
  publishMedia( {
    mediaId: selected._id,
    screenIds: checkedValues,
    duration: 5,
  })

  // setShowPublishPopUp(false)
}
  return (
    <Modal
      className="fade bd-example-modal-lg mt-4 custom-modal custom-modal-large"
      show={true}
      size="md"
    >
      <Modal.Header>
        <Modal.Title>Add New Tag</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setShowPublishPopUp(false)}
        >
          <img className="cancel-icon" src={cancelIcon} alt="cancel-icon" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Table responsive>
          <thead>
            <tr>
              <th className="width50">
                <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkbox1_exam_all"
                    onChange={handleSelectAllChange}
                    required=""
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox1_exam_all"
                  ></label>
                </div>
              </th>
              <th>Screen</th>
              <th>Last Seen</th>
              <th>Default Composition</th>
              <th>Current Schedule</th>
            </tr>
          </thead>
          <tbody>
            {allScreens !== "" &&
              allScreens.map((screen) => {
                return (
                  <tr>
                    <td>
                      <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={screen._id}
                          name={screen._id}
                          checked={checkedItems[screen._id]}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={screen._id}
                        ></label>
                      </div>
                    </td>

                    <td>
                      <span className="td-content">
                        <strong>{screen.name}</strong>
                        <span>{screen.screenLocation}</span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center">
                        <span className="status status-green"></span>
                        <span className="td-content">
                          <strong>{screen.name}</strong>
                          <span>{screen.screenLocation}</span>
                        </span>
                      </span>
                    </td>
                    <td>Default Compo. </td>
                    <td>No Schedule</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Row className="w-100 m-0">
          <Col lg={6} md={6} sm={6} xs={6} className="pl-0 pr-2">
            <Button className="cancel-btn w-100" variant="outline-light">
              Cancel
            </Button>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className="pl-2 pr-0">
            <Button
            disabled={checkedValues.length === 0}
              variant=""
              type="button"
              className="btn btn-primary btn-block primary-btn"
              onClick={handleSubmit}
            >
              Publish
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default PublishMediaModal;