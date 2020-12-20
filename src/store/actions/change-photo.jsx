/*
 * action types
 */
export const SET_CHANGE_PHOTO = 'SET_CHANGE_PHOTO';

/*
 * action creators
 */

export const setChangePhoto = (data) => {
  return { type: SET_CHANGE_PHOTO, payload: data };
};
