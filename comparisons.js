// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: This console log will convey to the code that 4 is less than 9.

var books = 3;
console.log(4 < books);
// YOU DO: A variable is declared to give books the option of a value, in this case the value is 3. The console.log will atempt to print 4 is less than our number of books but that will print as false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: These lines of code are declaring two different variables, friends and siblings assigning them values of 6 and 2 respectivly. The log is stating there are more friends than siblings which will print True.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Two variables are declared attendees with a value of 9 and meals with a value of 8. the log is stating that meals are not strictly equal to the number of attendees. Which is a problem. 


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay !== lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age)
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// Is numberTeachers greater than numberStudents? false
// Is numberTeachers greater than numberStudents? false
// true
// false
// true
// true
// false
// true
// true
// true
// true
// 1