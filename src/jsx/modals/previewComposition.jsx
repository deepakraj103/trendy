import { Button, Modal } from "react-bootstrap";
import cancelIcon from "../../img/cancel-icon.png";
import { useEffect, useRef, useState } from "react";
import WebVideoPlayer from "../components/web-player/WebVideoPlayer";

const PreviewComposition = ({ setShowPreview, compositions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(true);
  const  timeoutRef =useRef("");;
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (compositions[currentIndex + 1]) {
      const timeoutDuration = compositions[currentIndex].duration * 1000;
      console.log("currentIndex", currentIndex, timeoutDuration)
        timeoutRef.current = setTimeout(() => {
          console.log("iside",currentIndex);
          setCurrentIndex((currentIndex) => currentIndex + 1);
        }, timeoutDuration);
    }
    return ()=> clearTimeout(timeoutRef.current);
  }, [currentIndex]);


  return (
    <Modal
      className="fade bd-example-modal-lg mt-4 custom-modal custom-modal-preview"
      show={true}
      size="xl"
    >
      <Modal.Header>
        {/* <Modal.Title className="mr-auto">Upload Media Files</Modal.Title> */}
        <Button
          variant=""
          className="close"
          onClick={() => setShowPreview(false)}
        >
          <img className="cancel-icon" src={cancelIcon} alt="cancel-icon" />
        </Button>
      </Modal.Header>
      <Modal.Body>          
      {compositions[currentIndex] &&  compositions[currentIndex].type === "image" && (
            <div className="basic-list-group image-preview-container media-content">
              <img
                className="webplayer-preview-img"
                src={compositions[currentIndex].url}
                alt="media-img"
              />
            </div>
          )}
          {compositions[currentIndex] &&  compositions[currentIndex].type === "video" && (
            <div className="basic-list-group video-container media-content">
            <WebVideoPlayer src={compositions[currentIndex].url}></WebVideoPlayer>
              {/* <video
                title="video"
                width="100%"
                height="440px"
                src={}
              ></video> */}
            </div>
          )}</Modal.Body>
          <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewComposition;
