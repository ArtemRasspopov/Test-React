import React from "react";
import "./gallery.scss";

export const GalleryItem = ({ subtitle, title }) => {
  return (
    <div className="gallery-item-wrapper">
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
        </div>
        <div className="gallery-item-image"></div>
      </div>
      <div></div>
    </div>
  );
};
