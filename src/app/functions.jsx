export const setStorage = (name, value) => {
  localStorage.setItem(name, value);
};
export const getStorage = (name) => {
  return localStorage.getItem(name);
};
export const removeStorage = (name) => {
  localStorage.removeItem(name);
};
export const clearStorage = () => {
  localStorage.clear();
};

export const arrayMove = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};
