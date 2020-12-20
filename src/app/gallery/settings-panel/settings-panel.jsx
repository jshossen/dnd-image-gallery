import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import settingsIcon from '../../../assets/settings.svg';
import trashIcon from '../../../assets/trash.svg';
import { deleteDropImage } from '../../../store/actions/dropped-images';
import HideOnClickOutSide from '../../components/hide-on-click-outside';
import SettingsPanelFilter from './settings-panel-filter';
import SettingsPanelImage from './settings-panel-image';
import SettingsIcon from '../../components/icons/settings-icon';
import TrashIcon from '../../components/icons/trash-icon';

const SettingsPanel = (props) => {
  const showcase__settings = useRef();
  const dispatch = useDispatch();
  const data = props.data;
  const ChangePhoto = useSelector((state) => state.ChangePhoto);
  const [show_panel, setShowPanel] = useState('image');

  const deleteMe = () => {
    if (document.querySelector('.showcase__settings.active')) return;
    dispatch(deleteDropImage(data));
  };
  const showDropDown = () => {
    showcase__settings.current.classList.toggle('active');
  };
  return (
    <HideOnClickOutSide
      onHide={() => {
        showcase__settings.current.classList.remove('active');
      }}
    >
      <div
        className={
          'showcase__settings' +
          (ChangePhoto && ChangePhoto.id === data.id
            ? ' enable-change-photo'
            : '')
        }
        ref={showcase__settings}
        draggable={true}
        onDragStart={(e) => {
          e.stopPropagation();
          e.preventDefault();
          console.log('onDragStart', e.target.value);
        }}
      >
        <div className="settings__icons">
          <div className="setting-icon">
            <span className="settings-image" onClick={showDropDown}>
              <SettingsIcon />
            </span>

            <div className="settings__dropdown">
              <div className="settings__header">
                <div
                  onClick={() => {
                    setShowPanel('image');
                  }}
                  className={`${show_panel === 'image' ? 'active' : ''}`}
                >
                  Image
                </div>
                <div
                  onClick={() => {
                    setShowPanel('filter');
                  }}
                  className={`${show_panel === 'filter' ? 'active' : ''}`}
                >
                  Filter
                </div>
              </div>
              <hr />
              {show_panel === 'image' && <SettingsPanelImage data={data} />}
              {show_panel === 'filter' && <SettingsPanelFilter data={data} />}
            </div>
          </div>
          <div className="line"></div>
          <div className="setting-icon">
            <span className="trash-image" onClick={deleteMe}>
              <TrashIcon />
            </span>
          </div>
        </div>
      </div>
    </HideOnClickOutSide>
  );
};

export default SettingsPanel;
