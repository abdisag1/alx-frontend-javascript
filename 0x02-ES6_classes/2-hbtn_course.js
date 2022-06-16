export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    } else {
      for (let i = 0; i < students.length; i++) {
        if (typeof students[i] !== 'string') {
          throw new TypeError('students must be an array of strings');
        }
      }
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set lenght(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
