export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const myMap = students.map((element) => element.id);
  const sum = myMap.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
