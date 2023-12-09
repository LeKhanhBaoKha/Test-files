const students = [
  { name: "allice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" },
];
const groupByGrade = students.reduce((acc, students) => {
  const key = students.grade;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(students);
  return acc;
});
console.log(groupByGrade);
