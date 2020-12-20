import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowcaseEmptyContainer from './showcase-empty-container';
import { DropTarget } from 'react-dnd';
import ShowcaseImages from './showcase-images';
import { getDropImages } from '../../store/actions/dropped-images';

function collect(connect, monitor) {
  console.log(connect, monitor);
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
}

const RightPanel = (props) => {
  const dispatch = useDispatch();
  const { connectDropTarget, hovered, item } = props;
  const backgroundColor = hovered ? 'lightgreen' : 'white';
  const DroppedImages = useSelector((state) => state.DroppedImages);
  const ChangePhoto = useSelector((state) => state.ChangePhoto);
  useEffect(() => {
    dispatch(getDropImages());
  }, []);
  return connectDropTarget(
    <div className="gallery__right" style={{ backgroundColor }}>
      {ChangePhoto && <div className="right-backdrop"></div>}
      <div className="showcase">
        {/* <!-- Empty showcase start --> */}
        {DroppedImages.data.length === 0 && <ShowcaseEmptyContainer />}
        {/* <!-- Empty showcase end --> */}

        {/* <!-- Showcase images start --> */}
        {DroppedImages.data.length > 0 && <ShowcaseImages />}
        {/* <!-- Showcase images end --> */}
      </div>
    </div>
  );
};
export default DropTarget('item', {}, collect)(RightPanel);
