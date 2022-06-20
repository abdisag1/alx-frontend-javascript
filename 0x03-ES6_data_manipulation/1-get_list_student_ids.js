export default function getListStudentIds(person) {
  // return an empty array if person is not an array.
  if (!Array.isArray(person)) {
    return [];
  }
  const myMap = person.map((element) => element.id);
  return myMap;
}
