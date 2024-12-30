const { students } = require('../datasets/students');

// To run the code you've written in this file, use node prototypes/problem-sets/students.js

console.log('Running students.js')

/* Students Prompts*/

/*
Level 1

Code: 
  Write a function called "findEnrolledStudents" that returns the name of all students who are enrolled.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findEnrolledStudents())
    should print -->      
      ["John", "Bob", "Eve"]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

  • Step 1: Creating a function for returning enrolled students
  • Step 2: Creating an array for enrolled
  • Step 3: Looping through students enrolled and sorting with student names
  • Step 4: Pushing the students who return true enrolled
  • Step 5: Returning the students that are enrolled
  
*/

function findEnrolledStudents() {
  const enrolled = [];

  students.forEach(student => {
    if (student.enrolled === true) {
      enrolled.push(student.name);
    }
  });

  return enrolled;
}
console.log(findEnrolledStudents())

/*
Level 2

Code: 
  Write a function called "getAverageGrade" that takes in a student's name and returns that student's average grade.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageGrade("John"))
    should print -->  86.25

e.g.
  console.log(getAverageGrade("Bob"))
    should print -->  84.5

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

  • Step 1: Created a function for getAverageGrade
  • Step 2: Used .find to find studentName
  • Step 3: Calculate the total of all grades for the student.
            // The `reduce` method is used here to sum up all grades in the student's `grades` array.
            // `sum` starts at 0, and for each `grade`, it's added to `sum`.
  • Step 4: Divided the total of the grades by the length to return expected output

*/

function getAverageGrade(studentName) {
  const student = students.find(student => student.name === studentName);

  const total = student.grades.reduce((sum, grade) => sum + grade, 0);
  return total / student.grades.length;
}

console.log(getAverageGrade("John"))
console.log(getAverageGrade("Alice"))
console.log(getAverageGrade("Eve"))
console.log(getAverageGrade("Bob"))


/*
Level 3

Code: 
  Write a function called "findBestAverageGrade" that returns the name of the student with the highest average grade.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findBestAverageGrade())
    should print -->  "Eve"

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

• Step 1: Created function to findBestAverageGrades
• Step 2: Created Variables to let bestStudent and highestAverage start at 0 or null
• Step 3: Looped through the student grades same as above and reduces to the average
• Step 4: Compared average of students
• Step 5: Found highest average and returned bestStudent 
• Step 6: Returned bestAverage 
• Step 7: Converted bestStudent to a string 

*/
function findBestAverageGrade() {
  let bestStudent = null;
  let highestAverage = 0;

  students.forEach(student => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / student.grades.length;

    if (average > highestAverage) {
      highestAverage = average;
      bestStudent = student.name;
    }
  });

  return bestStudent.toString()
}

console.log(findBestAverageGrade())
/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the students prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all students tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/

module.exports = {
  findEnrolledStudents,
  getAverageGrade,
  findBestAverageGrade
};
