import {
  ADD_DROP_IMAGE,
  DELETE_DROP_IMAGE,
  UPDATE_DROP_IMAGE_SORTING_INDEX,
  UPDATE_DROP_IMAGE_FILTER_KEY,
  CHANGE_DROP_IMAGE,
  SET_DROP_IMAGES,
} from '../actions/dropped-images';
import { arrayMove, setStorage } from '../../app/functions';
const DroppedImages = (state = { data: [] }, action) => {
  switch (action.type) {
    case SET_DROP_IMAGES: {
      let d = action.payload;
      // setStorage('DroopedImages', JSON.stringify(d));
      return d;
    }
    case ADD_DROP_IMAGE: {
      let d = {
        data: [
          ...state.data.filter((v) => {
            return v.id !== action.payload.id;
          }),
          action.payload,
        ],
      };
      setStorage('DroopedImages', JSON.stringify(d));
      return d;
    }
    case DELETE_DROP_IMAGE: {
      let d = {
        data: state.data.filter((v) => {
          return v.id !== action.payload.id;
        }),
      };
      setStorage('DroopedImages', JSON.stringify(d));
      return d;
    }
    case UPDATE_DROP_IMAGE_SORTING_INDEX: {
      let ap = action.payload;
      let d = {
        data: arrayMove(state.data, ap.dragIndex, ap.hoverIndex),
      };
      setStorage('DroopedImages', JSON.stringify(d));
      return d;
    }
    case UPDATE_DROP_IMAGE_FILTER_KEY: {
      let ap = action.payload;
      let d = {
        data: state.data.map((v) => {
          return v.id === ap.id ? { ...v, [ap.key]: ap.value } : v;
        }),
      };
      setStorage('DroopedImages', JSON.stringify(d));
      return d;
    }
    case CHANGE_DROP_IMAGE: {
      let ap = action.payload;
      let d = {
        data: state.data.map((v) => {
          return v.id === ap.id ? { ...v, src: ap.src, id: ap.new_id } : v;
        }),
      };
      setStorage('DroopedImages', JSON.stringify(d));
      return d;
    }

    default:
      return state;
  }
};

export default DroppedImages;
