const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let sum = students.reduce((acc, cur) =>  acc + cur.score, 0);
  console.log(sum / students.length);
  return sum / students.length
}

getAverageStudentScore(students); // Output: 87.5
