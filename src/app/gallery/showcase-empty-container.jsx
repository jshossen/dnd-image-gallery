import React from 'react';
import imageIcon from '../../assets/image-icon.svg';
const ShowcaseEmptyContainer = () => {
  return (
    <div className="showcase__empty-container">
      <div className="showcase__empty">
        <div className="showcase__empty-icon">
          <img src={imageIcon} alt="icon" />
        </div>
        <p>Drop an image from Media Panel</p>
      </div>
    </div>
  );
};

export default ShowcaseEmptyContainer;
