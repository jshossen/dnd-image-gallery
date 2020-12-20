import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import SettingsPanel from './settings-panel/settings-panel';
const style = {
  cursor: 'move',
};
const ShowcaseImage = (props) => {
  const data = props.data;
  const ref = useRef(null);
  const ChangePhoto = useSelector((state) => state.ChangePhoto);
  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card', id: data.id, index: props.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      className={
        'showcase__image' +
        (ChangePhoto && ChangePhoto.id === data.id
          ? ' enable-change-photo'
          : '')
      }
      ref={ref}
      style={{ ...style, opacity }}
    >
      <SettingsPanel data={data} />
      <img
        src={data.src}
        alt="Panel"
        style={{
          filter: `blur(${data.blur ? data.blur : 0}px) grayscale(${
            data.grayscale ? data.grayscale : 0
          }%) brightness(${
            data.brightness ? data.brightness : 100
          }%) contrast(${data.contrast ? data.contrast : 100}%)`,
        }}
      />
    </div>
  );
};

export default ShowcaseImage;
