import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeftImageCard from './left-image-card';
import {
  addDropImage,
  changeDropImage,
} from '../../store/actions/dropped-images';
import { setChangePhoto } from '../../store/actions/change-photo';
import { setSelectedPhoto } from '../../store/actions/selected-photo';
const LeftPanel = () => {
  const dispatch = useDispatch();
  const Images = useSelector((state) => state.Images);
  const ChangePhoto = useSelector((state) => state.ChangePhoto);
  const SelectedPhoto = useSelector((state) => state.SelectedPhoto);
  return (
    <div className="gallery__left">
      <h3 className="gallery__left-heading">Media Panel</h3>
      {ChangePhoto && (
        <div className="gallery__left-actions">
          <button
            className="btn-confirm"
            onClick={() => {
              dispatch(
                changeDropImage({
                  id: ChangePhoto.id,
                  src: SelectedPhoto.src,
                  new_id: SelectedPhoto.id,
                })
              );

              dispatch(setChangePhoto(null));
              dispatch(setSelectedPhoto(null));
            }}
          >
            Confirm
          </button>
          <button
            className="btn-cancel"
            onClick={() => {
              dispatch(setChangePhoto(null));
              dispatch(setSelectedPhoto(null));
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="gallery__left-images">
        {Images.data.map((v, k) => (
          <LeftImageCard
            data={v}
            key={k}
            handleDrop={(id) => {
              console.log(v);
              dispatch(addDropImage(v));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
