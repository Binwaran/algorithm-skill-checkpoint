function findStudentById(students, id) {
  // Your code here
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  } return null;
}

// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
