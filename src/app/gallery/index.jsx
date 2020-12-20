import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getImages } from '../../store/actions/images';
import { useDispatch } from 'react-redux';
import Content from './content';
const Gallery = () => {
  const dispatch = useDispatch();
  const Images = useSelector((state) => state.Images);
  useEffect(() => {
    dispatch(getImages());
  }, []);
  return <>{Images.loaded ? <Content /> : <h2>Loading...</h2>}</>;
};

export default Gallery;
