import { getStorage } from '../../app/functions';

/*
 * action types
 */
export const SET_DROP_IMAGES = 'SET_DROP_IMAGES';
export const ADD_DROP_IMAGE = 'ADD_DROP_IMAGE';
export const DELETE_DROP_IMAGE = 'DELETE_DROP_IMAGE';
export const UPDATE_DROP_IMAGE_SORTING_INDEX =
  'UPDATE_DROP_IMAGE_SORTING_INDEX';
export const UPDATE_DROP_IMAGE_FILTER_KEY = 'UPDATE_DROP_IMAGE_FILTER_KEY';
export const CHANGE_DROP_IMAGE = 'CHANGE_DROP_IMAGE';

/*
 * action creators
 */

export const setDropImages = (data) => {
  return { type: SET_DROP_IMAGES, payload: data };
};
export const addDropImage = (data) => {
  return { type: ADD_DROP_IMAGE, payload: data };
};
export const deleteDropImage = (data) => {
  return { type: DELETE_DROP_IMAGE, payload: data };
};
export const updateDropImageSortingIndex = (data) => {
  return { type: UPDATE_DROP_IMAGE_SORTING_INDEX, payload: data };
};
export const updateDropImageFilterKey = (data) => {
  return { type: UPDATE_DROP_IMAGE_FILTER_KEY, payload: data };
};
export const changeDropImage = (data) => {
  return { type: CHANGE_DROP_IMAGE, payload: data };
};

export const getDropImages = () => {
  return (dispatch) => {
    let di = getStorage('DroopedImages');
    if (di) {
      dispatch(setDropImages(JSON.parse(di)));
    }
  };
};
