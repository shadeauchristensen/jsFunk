const { kitties } = require('../datasets/kitties');
const { puppers } = require('../datasets/puppers');

// To run the code you've written in this file, use node prototypes/problem-sets/kitties.js

console.log('Running kitties.js')

/* Kitty Prompts*/

/*
Level 1

Code: 
  Write a function called "findOrangeNames" that returns an array of just the names of kitties who are orange 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findOrangeNames())
    should print --> ['Tiger', 'Snickers']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

1. first we made and array with kitty.filter
2. mapped over array and turned into a name to return for final result
// */

// function orangeKittyNames () {
//     const orangeKitties = kitties.filter((kitty) => {
//       return kitty.color === 'orange'
//     })
//     const orangeNames = orangeKitties.map((orangeKitty) => {
//       return orangeKitty.name
//     })
//     return orangeNames
// }

// console.log(orangeKittyNames())


/*
Level 2

Code: 
  Write a function called "sortByAge" that returns an array of kitty objects that are sorted from oldest to youngest.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByAge())
    should print -->   
      [{
        name: 'Snickers',
        age: 8,
        color: 'orange'
      },
      {
        name: 'Tiger',
        age: 5,
        color: 'orange'
      },
      {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, 
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
1. sorted the array of kitties
2. using `.sort()` i used that to use oldest and youngest as parameters and used those to return the array in order of oldest to youngest
*/

// function sortByAge () {
//   return kitties.sort((oldest, youngest) => {
//     return youngest.age - oldest.age
//   })
  
// }
// console.log(sortByAge())

/*
Level 3

Code: 
  Write a function called "growUp" that returns an array of kitty objects that have all grown up by 2 years.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(growUp())
    should print -->   
      [{
        name: 'Felicia',
        age: 4,
        color: 'grey'
      },
      {
        name: 'Tiger',
        age: 7,
        color: 'orange'
      },
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

1. Used the `growUp` function to return a new array with updated ages.
2. Used `.map()` to create a new array where each kitty's age is increased by 2 years.

*/
  
// function growUp () {
//   return kitties.map((kitty) => {
//     kitty.age += 2
//     return kitty
//   })
// }
// console.log(growUp())


/*
Level 4

Currently, your functions are probably using the imported `kitties` global  variable from line 1.

Code:
  Refactor the three functions above using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.

Invoke:
  Invoke each refactored function twice, once passing the kitties data as an argument and once passing the puppers data as an argument

e.g.
  console.log(findOrangeNames(kitties)) --> same result as above
  console.log(sortByAge(kitties)) --> same result as above
  console.log(growUp(kitties)) --> same result as above

  console.log(findOrangeNames(puppers)) 
    should return --> ["Hatchet", "Butter"]

  console.log(sortByAge(puppers)) 
    should return --> 
      [{
        name: 'Scout',
        age: 12,
        color: 'grey'
      },
      {
        name: 'Stick',
        age: 6,
        color: 'brown'
      },
      ...etc]

  console.log(growUp(puppers))
    should return --> 
      [{
        name: 'Scout',
        age: 14,
        color: 'grey'
      },
      {
        name: 'Hatchet',
        age: 5,
        color: 'orange'
      },
      ...etc]

Annotation:
  Jot down any takeaways, questions, or reflections about this refactoring.
  	1.	I refactored the functions to accept a parameter, allowing them to work with any dataset passed during invocation.
	  2.	The only place where I specify the dataset is in the console.log() calls, making the function reusable and data-independent.
    3. 	I used .map() to extract the name property from each pet color object.
*/

function findOrangeNames(pets) {
    const orangePets = pets.filter((pet) => {
      return pet.color === 'orange';
    });
    const orangeNames = orangePets.map((orangePet) => {
      return orangePet.name;
    });
    return orangeNames.sort((a, b) => b.localeCompare(a));
};

function sortByAge(pets) {
  return pets.sort((a, b) => b.age - a.age);
};


function growUp(pets) {
  return pets.map((pet) => {
    return { ...pet, age: pet.age + 2 };
  });
}

console.log("Color Orange: ", findOrangeNames(kitties));
console.log("Color Orange: ", findOrangeNames(puppers));
console.log('Sorted, Oldest to Youngest: ', sortByAge(kitties));
console.log('Sorted, Oldest to Youngest: ', sortByAge(puppers));
console.log("Awh, They've grown up! These pets are now: ", growUp(kitties));
console.log("Awh, They've grown up! These pets are now: ", growUp(puppers));


// console.log(findOrangeNames(pet))
// console.log(sortByAge(pet))
// console.log(growUp(pet))

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the 3 Kitty Prompts tests and 3 Kitty Prompts Refactor tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 6 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/
 
// line:185 (I had to refactor with localeCompare), this is a built in method in JS that compares two strings it can take into account language in order to determine order of strings
// line:195 I applied the spread operator { ...pet } in growUp() to return new pet objects without changing the original ones. These changes fixed data mutation issues, ensuring that test expectations remain consistent.


module.exports = {
  findOrangeNames,
  sortByAge,
  growUp
};
