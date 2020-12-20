import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChangePhoto } from '../../../store/actions/change-photo';

const SettingsPanelImage = (props) => {
  const dispatch = useDispatch();
  const data = props.data;
  const SelectedPhoto = useSelector((state) => state.SelectedPhoto);
  return (
    <div className="settigs__image">
      <img src={SelectedPhoto ? SelectedPhoto.src : data.src} />
      <div
        className="btn-normal mt-8"
        onClick={() => {
          dispatch(setChangePhoto(data));
        }}
      >
        Change Photo
      </div>
    </div>
  );
};

export default SettingsPanelImage;
