import React from "react";
import "./PhotoShotsArchive.css";
import { IoIosArrowBack } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

const PhotoShotsArchive = () => {
  return (
    <>
    
      <div className="wrap-archive">
        <div className="back-and-settings-button-area">
          <div className="back-button">
            <IoIosArrowBack />
          </div>
          <div className="settings-button">
            <FiSettings />
          </div>
        </div>
        <div className="archive-grid-area">
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
          <div className="archive-image-div"></div>
        </div>
      </div>
    </>
  );
};

export default PhotoShotsArchive;
