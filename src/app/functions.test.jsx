import { arrayMove, setStorage, getStorage, removeStorage } from './functions';

test('arrayMove(arr, old_index, new_index) => arr = [1,2,3], old_index = 2, new_index = 0 is equal to [3,1,2]', () => {
  expect(arrayMove([1, 2, 3], 2, 0)).toEqual([3, 1, 2]);
});
test('setStorage() = test data, and getStorage() => test data', () => {
  setStorage('Test', 'test data');
  expect(getStorage('Test')).toBe('test data');
});

test('setStorage() = test data, removeStorage() and getStorage() => null', () => {
  setStorage('Test', 'test data');
  removeStorage('Test');
  expect(getStorage('Test')).toBe(null);
});
