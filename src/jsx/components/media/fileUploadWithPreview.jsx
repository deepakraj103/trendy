import React, { useState } from "react";
import uploadImg from "../../../img/cloud-computing-icon.png";
function FileUploadWithPreview() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="upload-file-container relative d-flex align-items-center justify-content-center flex-column">
      {!preview && (
        <>
          <div className="upload-flie-img">
            <img className="upload-file" src={uploadImg} alt="upload-img" />
          </div>
          <h6>Click here to upload files</h6>
        </>
      )}

      <div>
        <input
          type="file"
          className="upload-file-textfield"
          onChange={handleFileChange}
        />
        {preview && (
          <img
            style={{ width: "auto", height: "200px", objectFit: "cover" }}
            src={preview}
            alt="Preview"
          />
        )}
      </div>
    </div>
  );
}

export default FileUploadWithPreview;
