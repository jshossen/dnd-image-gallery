import { SET_IMAGES } from '../actions/images';
const Images = (state = { data: [], loaded: false }, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return { data: action.payload, loaded: true };
    default:
      return state;
  }
};

export default Images;
