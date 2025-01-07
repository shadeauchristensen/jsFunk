const { craftSupplies } = require('../datasets/crafting');

// To run the code you've written in this file, use node prototypes/problem-sets/crafting.js

console.log('Running crafting.js')

/* Crafting Prompts*/

/*
Level 1

Code: 
  Write a function called "getSupplyList" that takes in a craft as an argument and returns a list of supplies needed.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getSupplyList("crossStitching"))
    should print -->      
      ['fabric', 'needle', 'thread', 'scissors', hoop]

e.g.
  console.log(getSupplyList("crocheting"))
    should print -->      
      ['hook', 'yarn', 'scissors']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢•	I started by writing a function called getSupplyList that takes in craftName as an argument.
•	I created a craft variable by accessing the craftSupplies object using the craftName key to retrieve the specific array of supplies for that craft.
•	I used .map() on the create craft array and to create a new array containing only the names of the supplies.
•	In the .map() callback, I used project as the parameter to represent each supply object, and I accessed the name property to store each supply name in the new array.
•	Finally, I logged the expected results to confirm the output matched what I was expecting. ⁡

*/

function getSupplyList(craftName) {
  const craft = craftSupplies[craftName]
  return craft ? craft.map((project) => project.name) : [] 
}

console.log(getSupplyList("crossStitching"))
console.log(getSupplyList("crocheting"))


/*
Level 2

Code: 
  Write a function called "getDetailedList" that takes in a craft as an argument and returns a more detailed list of the supplies needed.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getDetailedList("weaving"))
    should print -->   
    [
      'I need 1 loom.',
      'I need 1 needle.',
      'I need 6 yarns.',
      'I need 1 scissor.'
    ]

e.g.
  console.log(getDetailedList("crocheting"))
    should print -->      
      [ 'I need 1 hook.', 'I need 3 yarns.', 'I need 1 scissor.' ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢• I created a function called getDetailedList that takes in craftName as an argument.
• I created a variable called craft and tied it to the craftSupplies object using the craftName key to retrieve the array of supplies for that specific craft.
• I used the ? (ternary operator) as an edge case to handle scenarios where the craft might not exist. If the craft exists, I used .map() to create a new array.
• In the .map() callback, I constructed a string that included the amountNeeded and name of each supply. This ensured the output matched the expected format.
• I used another edge case with amountNeeded > 1 to dynamically add an 's' to the end of plural supply names, or nothing for singular ones.
• Finally, the resulting array was returned and the output matched the expected results.⁡

*/

function getDetailedList(craftName) {
  const craft = craftSupplies[craftName]
  return craft ? craft.map((project) => `I need ${project.amountNeeded} ${project.name}${project.amountNeeded > 1 ? 's' : ''}.`) : []
}

console.log(getDetailedList("weaving"))
console.log(getDetailedList("crocheting"))

/*
Level 3

Test:
  * Uncomment the module.exports below.
  * Unskip the crafting prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all crafting tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  getSupplyList,
  getDetailedList
};
