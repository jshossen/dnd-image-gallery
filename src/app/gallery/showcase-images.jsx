import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowcaseImage from './showcase-image';
import { updateDropImageSortingIndex } from '../../store/actions/dropped-images';
const ShowcaseImages = () => {
  const dispatch = useDispatch();
  const DroppedImages = useSelector((state) => state.DroppedImages);
  return (
    <div className="showcase__images">
      {DroppedImages.data.map((v, k) => (
        <ShowcaseImage
          data={v}
          index={k}
          key={k}
          moveCard={(dragIndex, hoverIndex) => {
            // console.log('move card', dragIndex, hoverIndex);
            // let di = [...DroppedImages.data];
            // console.log(di);

            // di = arrayMove(di, dragIndex, hoverIndex);
            // console.log(di);
            dispatch(updateDropImageSortingIndex({ dragIndex, hoverIndex }));
          }}
        />
      ))}
    </div>
  );
};

export default ShowcaseImages;
