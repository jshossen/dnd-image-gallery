import React from 'react';
import LeftPanel from './left-panel';
import RightPanel from './right-panel';

const Content = () => {
  return (
    <div className="gallery">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Content;
