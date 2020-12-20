/*
 * action types
 */
export const SET_IMAGES = 'SET_IMAGES';

/*
 * action creators
 */

export const setImages = (data) => {
  return { type: SET_IMAGES, payload: data };
};

export const getImages = () => {
  return (dispatch) => {
    fetch('https://www.breakingbadapi.com/api/characters?limit=20')
      .then((res) => res.json())
      .then(
        (result) => {
          result = result.map((v, k) => {
            return { id: k + 1, src: v.img };
          });
          dispatch(setImages(result));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};
