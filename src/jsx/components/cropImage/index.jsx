import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Cropper from "react-easy-crop";

import getCroppedImg from "./cropImage";
import { BASE_URL } from "../../../utils/api";

const ImageCroper = ({ imgSrc,zoom,setZoom,setCroppedAreaPixels,croppedAreaPixels }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });




  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);



  return (
    <div className="mainWrapper">
      <div className="crop-container">
        <Cropper
          image={`${BASE_URL}${imgSrc}`}
          crop={crop}
          zoom={zoom}
          aspect={16 / 9}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
        
      </div>

      <div className="controls">
    
     <input
       type="range"
       value={zoom}
       min={1}
       max={3}
       step={0.1}
       aria-labelledby="Zoom"
       onChange={(e) => {
         setZoom(e.target.value)
       }}
       className="zoom-range"
     />
   </div>
    </div>


  );
};

export default ImageCroper;
