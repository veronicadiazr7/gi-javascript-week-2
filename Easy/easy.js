/* Create an array of students holding their last name, first name, and age with 3 students. 
To validate, please log a greeting with the first name, last name and age of the 2nd student.
 The output should look like "Hello, my name is John Doe and I'm 19 years old." */

//Option 1
const studentInfo = [
  "Veronica",
  "Diaz",
  "23",
  "Abigail",
  "Ponce",
  "22",
  "Glady",
  "Rodriguez",
  "24",
];

console.log(studentInfo[3]);
console.log(studentInfo[4]);
console.log(studentInfo[5]);

console.log(
  "Hello, my name is " +
    studentInfo[3] +
    " " +
    studentInfo[4] +
    " and I am " +
    studentInfo[5] +
    " years old" +
    "."
);

//Option 2
const studentsFirstName = ["Veronica", "Abigail", "Glady"];
const studentsLastName = ["Diaz", "Ponce", "Rodriguez"];
const studentsAge = ["23", "22", "24"];

console.log(
  "Hello, my name is " +
    studentsFirstName[1] +
    " " +
    studentsLastName[1] +
    " and I am " +
    studentsAge[1] +
    " years old" +
    "."
);
