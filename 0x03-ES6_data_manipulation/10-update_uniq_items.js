/* Create a function named updateUniqueItems
   accepts a map as an argument */
export default function updateUniqueItems(map) {
  // if not an instance of map throws an error
  if (!(map instanceof Map)) throw new Error('Cannot process');
  return map.forEach((val, key) => {
    if (val === 1) map.set(key, 100);
  });
}
