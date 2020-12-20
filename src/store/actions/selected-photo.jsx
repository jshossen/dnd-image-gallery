/*
 * action types
 */
export const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';

/*
 * action creators
 */

export const setSelectedPhoto = (data) => {
  return { type: SET_SELECTED_PHOTO, payload: data };
};
