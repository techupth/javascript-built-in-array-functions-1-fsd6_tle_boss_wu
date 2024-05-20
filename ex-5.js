const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  return students.reduce((sum, student) => sum + student.score, 0) / students.length;
}

const averageScore = getAverageStudentScore(students);
console.log(`Score average is ${averageScore}`)
