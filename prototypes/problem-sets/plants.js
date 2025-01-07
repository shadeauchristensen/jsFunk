const { coloradoPlants } = require('../datasets/plants');

// To run the code you've written in this file, use node prototypes/problem-sets/plants.js

console.log('Running plants.js')

/* Plants Prompts*/

/*
Level 1

Code: 
  Write a function called "findSpringBloomers" that finds how many plants have a blooming season any time in the spring.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findSpringBloomers())
    should print --> 8     


Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢• I created a function called findSpringBloomers to determine how many plants bloom in the spring.
• Inside the function, I created a result variable and used .filter() on the coloradoPlants array, using plant as the parameter for the callback function.
• Within the .filter() callback, I checked the bloomingSeason property of each plant to see if it includes "Spring" using .includes("Spring").
• I used .length on the filtered array to count the number of plants that bloom in the spring and stored that count in the result variable.
• Finally, I returned the result variable and logged the output, which correctly printed 8.⁡

*/

function findSpringBloomers() {
  const result = coloradoPlants.filter(plant => 
    plant.bloomingSeason.includes("Spring")).length
  return result
}

console.log(findSpringBloomers())

/*
Level 2

Code: 
  Write a function called "findAverageHeight" that returns the average height of all the plants.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findAverageHeight())
    should print -->  59.2 ⁡⁣⁢⁣<- this is wrong ⁡62.2 ⁡⁣⁢⁣is correct⁡

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢• I created a function called findAverageHeight to calculate the average height of all the Colorado plants.
• Inside the function, I used .reduce() to calculate the total height by adding an accumulator (acc) and the plant.height for each plant, starting the accumulator at 0.
• I created a variable called averageHeight to calculate the average height by dividing the totalHeight by the number of plants in the array using .length starting at 0.
• I returned the averageHeight to ensure the function produces the expected output.
• Finally, I logged the result of calling findAverageHeight, and it correctly displayed the average height.⁡

*/

function findAverageHeight() {
  const totalHeight = coloradoPlants.reduce((acc, plant) => acc + plant.height, 0)
  const averageHeight = coloradoPlants.length ? totalHeight / coloradoPlants.length : 0
  return averageHeight
}

console.log(findAverageHeight());

/*
Level 3

Code: 
  Refactor your "findAverageHeight" function so that it takes in a habitat and returns the average height of the plants with that habitat. Don't worry about rounding the decimals.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findAverageHeight("meadows"))
    should print -->  18 <- ⁡⁣⁢⁣this is wrong too, should be ⁡28

e.g.
  console.log(findAverageHeight("forests"))
    should print -->  117.33

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁡⁣⁣⁢	1.	I created a function called findAverageHeight to refine its behavior based on habitat data.
	  •	The function calculates the average height of plants either for a specific habitat or for all plants if no habitat is provided.

	2.	I used a let variable for filteredPlants because let allows reassignment, unlike const.
	  •	This flexibility was needed to reassign filteredPlants depending on whether a habitat was specified or not.

	3.	I filtered the plants based on their habitat:
	  •	If a habitat was provided, I used .filter() to ensure plant.habitat === habitat.
	  •	If the filteredPlants array was empty (no plants matched the habitat), I handled this edge case by      returning 0.

	4.	I included a fallback for all plants:
	  •	If no habitat was provided, I set filteredPlants to the entire coloradoPlants array.

	5.	I calculated the total height using .reduce():
	  •	I used a const variable to sum up the heights of all plants in the filteredPlants array.

	6.	I calculated and returned the average height:
	  •	By dividing the totalHeight by filteredPlants.length, the function dynamically produces the average height for either all plants or the specified habitat.⁡

*/

function findAverageHeight(habitat) {
  let filteredPlants
    if (habitat) {
      filteredPlants = coloradoPlants.filter(plant => plant.habitat === habitat)
        if (filteredPlants.length === 0) {
          return 0;
        }
    } else {
    filteredPlants = coloradoPlants
      }
  const totalHeight = filteredPlants.reduce((acc, plant) => acc + plant.height, 0)
  const averageHeight = filteredPlants.length ? totalHeight / filteredPlants.length : 0
  return averageHeight
}

console.log(findAverageHeight("meadows"))
console.log(findAverageHeight("forests"))

/*
Level 4

Code: 
  Write a function called "organizeByHabitat" that returns an object the plants organized by habitat.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(organizeByHabitat())
    should print -->  
    {
      meadows: [ 'Colorado Blue Columbine', 'Alpine Forget-Me-Not', 'Fireweed' ],
      forests: [ 'Aspen Tree', 'Engelmann Spruce', 'Blue Spruce' ],
      moutains: [ 'Columbian Lily' ],
      mountains: [ 'Rocky Mountain Bristlecone Pine', 'Scarlet Gilia' ],
      grasslands: [ 'Indian Paintbrush' ]
    }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

⁡⁣⁣⁢  • I started by creating an organizeByHabitat function to organize plants by their habitats.
  • I used the .reduce method to iterate through the coloradoPlants array and accumulate all the plants into a single object (acc).
  • For each plant, I checked its habitat property:
  •	If the habitat key didn’t already exist in the accumulator (acc), I initialized it as an empty array.
  • I added each plant’s name to the appropriate habitat array:
  •	I used .push() to add the plant.name to the array corresponding to its habitat key.
  • I initialized the accumulator as an empty object ({}) to store the results as key-value pairs (habitat names as keys, arrays of plant names as values).
  • Finally, I returned the organizedHabitat object to log the organized result, which shows arrays of plant names grouped by their matching habitats.⁡


*/

function organizeByHabitat() {
  const organizedHabitat = coloradoPlants.reduce((acc, plant) => {
    if (!acc[plant.habitat]) {
      acc[plant.habitat] = [];
    }
    acc[plant.habitat].push(plant.name);
    return acc;
  }, {});
  return organizedHabitat;
}

console.log(organizeByHabitat())

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the plants prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all plants tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  findSpringBloomers,
  findAverageHeight,
  organizeByHabitat
};  
