import { Button, Modal } from "react-bootstrap";
import cancelIcon from "../../img/cancel-icon.png";
import { useEffect, useRef, useState } from "react";
import WebVideoPlayer from "../components/web-player/WebVideoPlayer";
import { BASE_URL } from "../../utils/api";
import { isBlobUrl } from "../../utils/UtilsService";
const PreviewComposition = ({ setShowPreview, content, layout, referenceUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const  timeoutRef =useRef("");;
  useEffect(() => {
    if (content[currentIndex + 1]) {
      const timeoutDuration = content[currentIndex].duration * 1000;
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex((currentIndex) => currentIndex + 1);
        }, timeoutDuration);
    }
    return ()=> clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const viewImage = content[currentIndex].fitToScreen
  ? "fitScreen"
  : content[currentIndex].crop
  ? "crop"
  : "aspectRation";
  const url  = isBlobUrl(referenceUrl[currentIndex]) ? referenceUrl[currentIndex] : `${BASE_URL}${referenceUrl[currentIndex]}`

  return (
    <Modal
      className={`fade bd-example-modal-lg mt-4 custom-modal custom-modal-large custom-modal-preview ${layout.screenType}-view`}
      show={true}
      size="xl"
    >
      <Modal.Header>
        <Modal.Title className="mr-auto">Preview</Modal.Title>
        <Button
          variant=""
          className="close"
          onClick={() => setShowPreview(false)}
        >
          <img className="cancel-icon" src={cancelIcon} alt="cancel-icon" />
        </Button>
      </Modal.Header>
      <Modal.Body>          
      {content[currentIndex] &&  content[currentIndex].type === "image" && (
       
            <div className="basic-list-group image-preview-container media-content">
              <img
                className="webplayer-preview-img"
                style={{
               
               objectFit: `${
                 viewImage === "fitScreen" ? "fill" : "contain"
               }`,
             }}
                src= {url}
                alt="media-img"
              />
            </div>
          )}
          {content[currentIndex] &&  content[currentIndex].type === "video" && (
            <div className="basic-list-group video-container media-content">
            <WebVideoPlayer src= {url}></WebVideoPlayer>
            </div>
          )}</Modal.Body>
          <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewComposition;
