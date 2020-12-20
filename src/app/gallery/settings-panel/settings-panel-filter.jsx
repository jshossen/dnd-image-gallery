import React, { useState } from 'react';
import RangeSlider from '../../components/range-slider';
import { useDispatch } from 'react-redux';
import { updateDropImageFilterKey } from '../../../store/actions/dropped-images';
import GrayscaleIcon from '../../components/icons/grayscale-icon';
import BlurIcon from '../../components/icons/blur-icon';
import BrithnessIcon from '../../components/icons/brithness-icon ';
import ContrastIcon from '../../components/icons/contrast-icon';

const SettingsPanelFilter = (props) => {
  const dispatch = useDispatch();
  const data = props.data;
  return (
    <div className="settings__filter">
      <div className="settings__filter__item">
        <div className="left">
          <GrayscaleIcon />
        </div>
        <RangeSlider
          value={data.grayscale ? data.grayscale : 0}
          min={0}
          max={100}
          onChange={(e) => {
            dispatch(
              updateDropImageFilterKey({
                id: data.id,
                key: 'grayscale',
                value: e.target.value,
              })
            );
          }}
        />
        <div className="right">{data.grayscale ? data.grayscale : 0}%</div>
      </div>

      <div className="settings__filter__item">
        <div className="left">
          <BlurIcon />
        </div>
        <RangeSlider
          value={data.blur ? data.blur : 0}
          min={0}
          max={5}
          onChange={(e) => {
            dispatch(
              updateDropImageFilterKey({
                id: data.id,
                key: 'blur',
                value: e.target.value,
              })
            );
          }}
        />
        <div className="right">{data.blur ? data.blur : 0}%</div>
      </div>

      <div className="settings__filter__item">
        <div className="left">
          <BrithnessIcon />
        </div>
        <RangeSlider
          value={data.brightness ? data.brightness : 100}
          min={0}
          max={100}
          onChange={(e) => {
            dispatch(
              updateDropImageFilterKey({
                id: data.id,
                key: 'brightness',
                value: e.target.value,
              })
            );
          }}
        />
        <div className="right">{data.brightness ? data.brightness : 100}%</div>
      </div>

      <div className="settings__filter__item">
        <div className="left">
          <ContrastIcon />
        </div>
        <RangeSlider
          value={data.contrast ? data.contrast : 100}
          min={0}
          max={100}
          onChange={(e) => {
            dispatch(
              updateDropImageFilterKey({
                id: data.id,
                key: 'contrast',
                value: e.target.value,
              })
            );
          }}
        />
        <div className="right">{data.contrast ? data.contrast : 100}%</div>
      </div>
    </div>
  );
};

export default SettingsPanelFilter;
