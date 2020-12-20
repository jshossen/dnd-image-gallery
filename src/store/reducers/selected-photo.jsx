import { SET_SELECTED_PHOTO } from '../actions/selected-photo';
const ChangePhoto = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_PHOTO:
      return action.payload;
    default:
      return state;
  }
};

export default ChangePhoto;
