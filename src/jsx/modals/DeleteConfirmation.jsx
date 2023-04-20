import { Button, Modal, Row, Col, Badge } from "react-bootstrap";
import cancelIcon from "../../img/cancel-icon.png";
import tagCloseIcon from "../../img/tag-close-icon.png";

const DeleteConfirmation = ({ setDeleteModal, callbackFunction }) => {
  return (
    <Modal className="fade" show={true}>
    <Modal.Header>
       <Modal.Title>Confirmation</Modal.Title>
       <Button
          variant=""
          className="close"
          onClick={() => setDeleteModal(false)}
       >
          <span>&times;</span>
       </Button>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete?</Modal.Body>
    <Modal.Footer>
       <Button
          onClick={() => setDeleteModal(false)}
          variant="light"
       >
          Close
       </Button>
       <Button variant="danger" onClick={callbackFunction}>Yes Delete</Button>
    </Modal.Footer>
 </Modal>
  );
};

export default DeleteConfirmation;
