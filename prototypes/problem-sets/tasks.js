const { tasks } = require('../datasets/tasks');

// To run the code you've written in this file, use node prototypes/problem-sets/tasks.js

console.log('Running tasks.js')

/* Tasks Prompts*/

/*
Level 1

Code: 
  Write a function called "getAverageTime" that determines the average time for all tasks.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTime())
    should print -->      
      'The average time for all tasks is 100 minutes.'

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢• Starting by writing a function labeled getAverageTime
• reduced tasks using a callback function (sum/task)
• Starting at initial value of 0 (because its a callback that starts holding accumulated value)
• Adding the sum and task.minutesNeeded gave me totalMinutes
• Using totalMinutes i divided that from tasks.length (to get average)
• Returned quote of the averageTime⁡

*/

function getAverageTime() {
  const totalMinutes = tasks.reduce((sum, task) => sum + task.minutesNeeded, 0)
  const averageTime = totalMinutes / tasks.length
  return `The average time for all tasks is ${averageTime} minutes.`
}
console.log(getAverageTime())

/*
Level 2

Code: 
  Write a function called "getTasksByPerson" that takes in an argument of a person's name and outputs a list of their assigned tasks.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getTasksByPerson("Leta"))
    should print -->  ['write README', 'refactor']

e.g.
  console.log(getTasksByPerson("Travis"))
    should print -->  [ 'debug issue #14', 'add feature #38' ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.

⁡⁣⁣⁢  • Created the function for getTasksByPerson
  • Using the parameter of personName to represent the name of assigned
  • Created a new array for assignees with .filter
  • Using task.assignedTo to check personName
  • Using .map to return new array
  • Returning the result
  • Added edgecase for null ⁡

*/

function getTasksByPerson(personName) {
  if (personName.length === 0) {
    return `not assigned`
  }
  const personTasks = tasks.filter((task) => {
    return task.assignedTo === personName;
  })
  return personTasks.map(task => task.taskName);
}

console.log(getTasksByPerson("Leta"));
console.log(getTasksByPerson("Travis"));

/*
Level 3

Code: 
  Write a function called "getStatusTimes" that returns an object with the total minutes for each status.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getStatusTimes())
    should print --> 
    { 
      inProgress: 180, 
      complete: 350, 
      inTriage: 170 
    }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢  • I created a function called getStatusTimes to calculate the total time for each status.
	•	Inside the function, I used .reduce with an accumulator (acc) and the current task.
	•	For each task, I checked if acc[task.status] existed. If not, I set it to 0 because I needed a starting point.
	•	Then, I added the minutesNeeded for that task to the corresponding status in acc.
	•	After looping through all tasks, I returned the acc object.
	•	Finally, I logged the result, which gave me { inProgress: 180, complete: 350, inTriage: 170 }⁡

*/

function getStatusTimes() {
  const getStatTime = tasks.reduce((acc, task) => {
    if (!acc[task.status]){
      acc[task.status] = 0
    }
    acc[task.status] += task.minutesNeeded
    return acc
  }, {} )
  return getStatTime
}
console.log(getStatusTimes())


/*
Level 4

Code:
  Refactor your "getAverageTime" function so that it takes in a status and returns the average time for tasks with that status.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageTime("complete"))
    should print -->
      'The average time for all complete tasks is 87.5 minutes.'

e.g.
  console.log(getAverageTime("inProgress"))
    should print -->
      'The average time for all inProgress tasks is 90 minutes.'

Annotation:
⁡⁣⁣⁢
	•	I created a function to get the average time for a given status.
	•	I used a variable to find tasks matching the given status, applying the .filter method to check if task.status matches the status argument.
	•	I then created a variable to calculate the total minutes by using .reduce to sum up the minutesNeeded of the filtered tasks, starting the accumulator at 0.
	•	I calculated the average time by dividing the totalMinutes by the length of the filtered tasks (findStatus.length).
	•	I added an edge case using the ? (ternary operator) to handle situations where there are no tasks with the given status, setting the average to 0 in that case.
	•	Finally, I returned the expected string, dynamically including the status and the calculated averageTime, which produced the desired output.⁡

*/


function getAverageTime(status) {
  const findStatus = tasks.filter((task) => task.status === status)
  const totalMinutes = findStatus.reduce((sum, task) => sum + task.minutesNeeded, 0)
  const averageTime = findStatus.length ? totalMinutes / findStatus.length : 0
  return `The average time for all ${status} tasks is ${averageTime} minutes.`
}

console.log(getAverageTime("complete"))
console.log(getAverageTime("inProgress"))

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the tasks prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all tasks tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions.
  Take notes on the error messages that led you to fixing those details.

  ⁡⁢⁣⁣𝗥𝗘𝗠𝗜𝗡𝗗𝗘𝗥 𝗧𝗢 𝗔𝗟𝗪𝗔𝗬𝗦 𝗗𝗢𝗨𝗕𝗟𝗘 𝗖𝗛𝗘𝗖𝗞 𝗧𝗛𝗘 𝗘𝗫𝗣𝗘𝗖𝗧𝗘𝗗 𝗢𝗨𝗧𝗣𝗨𝗧! ERROR CAME BACK AS {
  + expected - actual

      -The average time for complete is 87.5 minutes.
      +The average time for all complete tasks is 87.5 minutes.
  }⁡

*/


module.exports = {
  getAverageTime,
  getTasksByPerson,
  getStatusTimes
};
