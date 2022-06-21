export default function hasValuesFromArray(set, array) {
  // eslint-disable-next-line no-plusplus
  let value = true;
  for (let i = 0; i <= array.length - 1; i += 1) {
    if (set.has(array[i])) {
      value = true;
    } else {
      value = false;
    }
  }
  return value;
}
