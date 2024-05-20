const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  console.log(
    students.reduce((acc, cur) => acc + cur.score / students.length, 0)
  );
  return students.reduce((acc, cur) => acc + cur.score / students.length, 0);
}

getAverageStudentScore(students); // Output: 87.5
