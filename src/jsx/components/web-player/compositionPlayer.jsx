import React, { useEffect, useState, useRef } from "react";

import WebVideoPlayer from "./WebVideoPlayer";
import { isBlobUrl } from "../../../utils/UtilsService";
import {  BASE_URL } from "../../../utils/api";
const CompositionPlayer = ({ content, referenceUrl }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef("");
  useEffect(() => {
    if (content[currentIndex + 1]) {
      const timeoutDuration = content[currentIndex].duration * 1000;
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, timeoutDuration);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);



  
  const viewImage = content[currentIndex].fitToScreen
    ? "fitScreen"
    : content[currentIndex].crop
    ? "crop"
    : "aspectRation";
  const url = isBlobUrl(referenceUrl[currentIndex])
    ? referenceUrl[currentIndex]
    : `${BASE_URL}${referenceUrl[currentIndex]}`;

  return (
    <>
      {" "}
      {content[currentIndex] && content[currentIndex].type === "image" && (
        <div className="basic-list-group image-preview-container media-content">
          <img
            className="webplayer-preview-img"
            style={{
              objectFit: `${viewImage === "fitScreen" ? "fill" : "contain"}`,
            }}
            src={url}
            alt="media-img"
          />
        </div>
      )}
      {content[currentIndex] && content[currentIndex].type === "video" && (
        <div className={`basic-list-group video-container media-content ${viewImage === "fitScreen" ? "fitImage" : "containImage"}`}>
          <WebVideoPlayer src={url}></WebVideoPlayer>
        </div>
      )}
    </>
  );
};

export default CompositionPlayer;
