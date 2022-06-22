export default function cleanSet(set, startString) {
  const list = [];
  for (const element of set) {
    list.push(element.slice(startString.length));
  }
  return list.join('-');
}
