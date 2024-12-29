const { clubs } = require('../datasets/clubs');

// To run the code you've written in this file, use node prototypes/problem-sets/clubs.js

console.log('Running clubs.js')

/* Clubs Prompts*/

/*
Level 1

Code: 
  Write a function called "findClubMembers" that takes in the clubs data as an argument.  Your function should create an object whose keys are the names of people, and whose values are arrays that include the names of the clubs that person is a part of. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findClubMembers(clubs))
    should print --> 
    {
      Louisa: ['Drama', 'Art'],
      Pam: ['Drama', 'Art', 'Chess'],
      Nathaniel: ['Drama', 'Astronomy'],
      ...etc
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

  // Step 1: Initialize an empty object to store the result
    // This object will eventually have people's names as keys 
    // and arrays of club name values.

  // Step 2: Loop through each club in the provided clubs array
    // Each club is an object with a `club` name and a `members` array.
    // Example of `club`: { club: 'Drama', members: ['Louisa', 'Pam', 'Nathaniel'] }

  // Step 3: Loop through each member of the current club
    club.members.forEach((member) => {

  // Step 4: Check if the member already exists in the members object
      if (!members[member]) {
  // If the member doesn't exist, initialize them with an empty array
        members[member] = [];

  // Step 5: Add the current club's name to the member's array of clubs

  // Step 6: Return the completed members object
    // object now maps each member to an array of club names they belong to


*/
// console.log(clubs);    console.log(members);    console.log(club);


function findClubMembers(clubs) {
  const members = {}; 

  clubs.forEach((club) => {
    club.members.forEach((member) =>{
      if (!members[member]) {
        members[member] = [];
      }
      members[member].push(club.club)
    });
  });
  return members
}

console.log(findClubMembers(clubs))

/*
Level 2

Test:
  *Uncomment the module.exports below.
  *Unskip the 1 Club Prompts test in your prototype-test.js file.
  *Run `npm test` to confirm that your function is passing the test.
  *Refactor as needed until the test is passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  findClubMembers
};
