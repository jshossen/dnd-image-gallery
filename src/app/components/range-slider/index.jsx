import React from 'react';
import './style.css';

const RangeSlider = (props) => {
  const min = props.min || props.min === 0 ? props.min : 1;
  const max = props.max || props.max === 0 ? props.max : 100;
  const value = props.value || props.value === 0 ? props.value : 10;
  const className = props.className ? props.className : '';
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      className={`slider ${className}`}
      // draggable
      // onDragStart={(e) => {
      //   e.stopPropagation();
      //   console.log('onDragStart', e.target.value);
      // }}
      onChange={(e) => {
        props.onChange(e);
      }}
      // onDrag={(e) => {
      //   e.stopPropagation();
      // }}
    />
  );
};

export default RangeSlider;
