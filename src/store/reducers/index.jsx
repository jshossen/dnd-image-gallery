import { combineReducers } from 'redux';
import Images from '../reducers/images';
import DroppedImages from '../reducers/dropped-images';
import ChangePhoto from './change-photo';
import SelectedPhoto from './selected-photo';

const rootReducer = combineReducers({
  Images: Images,
  DroppedImages: DroppedImages,
  ChangePhoto: ChangePhoto,
  SelectedPhoto: SelectedPhoto,
});

export default rootReducer;
