import { SET_CHANGE_PHOTO } from '../actions/change-photo';
const ChangePhoto = (state = null, action) => {
  switch (action.type) {
    case SET_CHANGE_PHOTO:
      return action.payload;
    default:
      return state;
  }
};

export default ChangePhoto;
