var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
console.log('1 - ');
people.forEach(function(item) {
  console.log(item);
});
// 2. Write the command to remove "Greg" from the array.
people.shift();
console.log('2 - ', people);
// 3. Write the command to remove "James" from the array.
people.pop();
console.log('3 - ', people);
// 4. Write the command to add "Matt" to the front of the array.
people.unshift('Matt');
console.log('4 - ', people);
// 5. Write the command to add your name to the end of the array.
people.push('gatesakagi');
console.log('5 - ', people);
// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
console.log('6 Before - ', people);
for (item of people) {
  if (item === 'Mary') break;
  console.log('6 After - ', item);
}
// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let indexOfMaryAtPeople = people.indexOf('Mary');
let newPeople = people.slice(indexOfMaryAtPeople + 1);
console.log('7 - ', newPeople);
// 8. Write the command that gives the indexOf where "Mary" is located.
let indexOfMary = people.indexOf('Mary');
console.log('8 - ', indexOfMary);
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
let indexOfFoo = people.indexOf('Foo');
console.log('9 - ', indexOfFoo);
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
var people = ['Greg', 'Mary', 'Devon', 'James'];
let indexOfDevon = people.indexOf('Devon');
people.splice(indexOfDevon, 1, 'Elizabeth', 'Artie');
console.log('10 - ', people);
