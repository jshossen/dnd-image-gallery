import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragSource } from 'react-dnd';
import { setSelectedPhoto } from '../../store/actions/selected-photo';

const itemSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.data;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop();
  },
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
};

const LeftImageCard = (props) => {
  const dispatch = useDispatch();
  const data = props.data;
  const ChangePhoto = useSelector((state) => state.ChangePhoto);
  const SelectedPhoto = useSelector((state) => state.SelectedPhoto);
  const DroppedImages = useSelector((state) => state.DroppedImages);
  const { isDragging, connectDragSource, item } = props;
  const opacity = isDragging ? 0.5 : 1;
  return connectDragSource(
    <div
      className={
        'gallery__left-image' +
        (ChangePhoto && ChangePhoto.id === data.id ? ' active' : '') +
        (SelectedPhoto && SelectedPhoto.id === data.id ? ' selected' : '')
      }
      onClick={() => {
        if (!ChangePhoto) return;
        if (
          DroppedImages.data.filter((v) => {
            return v.id === data.id;
          }).length > 0
        ) {
          alert('Already in canvas');
          return;
        }

        dispatch(setSelectedPhoto(data));
      }}
      style={{ opacity }}
    >
      <img src={props.data.src} alt="Panel image" />
    </div>
  );
};

export default DragSource('item', itemSource, collect)(LeftImageCard);
