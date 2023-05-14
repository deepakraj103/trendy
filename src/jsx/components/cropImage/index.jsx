import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ImgDialog from "./showImage";
import getCroppedImg from "./cropImage";

const dogImg =
  "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

const ImageCroper = ({ imgSrc,zoom,setZoom,setCroppedAreaPixels,croppedAreaPixels }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropped, setShowCropped] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      fetch(imgSrc, {
  mode: 'cors'
})
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      // do something with the image
    };
    img.src = url;
  })
      //   const croppedImage = await getCroppedImg(
      //     imgSrc,
      //     croppedAreaPixels
      //   )

      // setCroppedImage(croppedImage)
      // setShowCropped(true);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  return (
    <div className="mainWrapper">
      <div className="crop-container">
        <Cropper
          image={imgSrc}
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
