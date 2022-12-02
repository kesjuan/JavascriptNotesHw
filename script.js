var userName = "jerry_shark";
if (userName === "jerry_shark") {
    console.log(true);
  }

  var password = "hunter2";

// Reassign variable value with a new value
password = "hunter3";

console.log(password);

//The names of variables that are constant, 
//declared with the const keyword, are typically written in all uppercase.

var species = "butterfly";
 
function transform() {
  // Initialize a local, function-scoped variable
  var species = "Catepillar";
  console.log(species);
}

// Log the global and local variable
console.log(species);
//transform();
//console.log(species);

var caccoon = true;

//in this example, the species variable has one value globally butterfly
//and another value locally catepillar

if (caccoon) {
  // Initialize a block-scoped variable
  let species = "Catepillar";
  console.log(`It is in a cacoon species is currently a ${species}.`);
}

console.log(`It is not in a caccoon species is currently a ${species}.`);

// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100; //returns undefined

// How JavaScript interpreted it
// var x;
// console.log(x);
// x = 100;

// Assign value to const
const SPECIES2 = "Catepillar"; 

// Attempt to reassign value
// SPECIES2 = "Butterfly";
//Since const values cannot be reassigned, 
//they need to be declared and initialized at the same time, 
//or will also throw an error.


//console.log(SPECIES2);

//Although const values cannot be reassigned, 
//they are mutable as it is possible to modify the properties of objects declared with const.
const Jar = {
	color: "black",
	price: 15
}

// modify property
Jar.color = "clear";
console.log(Jar);


//We can make an empty object example using both methods 

// Initialize object literal with curly brackets
const objectLiteral = {};

// Initialize object constructor with new Object
const objectConstructor = new Object();

// Initialize object
const gimli = {
	name: "Jared",
	race: "black",
	weapon: "brass",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};
console.log(gimli.greet())
gimli.age = 139;
gimli.weapon = "battle axe";
gimli["age"] = 139;
gimli.fight = function() {
	return gimli.name + ` attacks with a ${this.weapon}.`;
}
console.log(gimli.fight());
console.log(gimli);

//In order to remove a property from an object, you will utilize the delete keyword.
delete gimli.weapon;
console.log(gimli);

// has a built-in type of for loop that is specifically meant for iterating over the properties of an object.
// This is known as the for...in loop.

const gimli2 = {
	name: "Jared",
	race: "black",
	weapon: "brass"
}
for (let key in gimli2) {
    console.log(gimli2[key]);
  }

  for (let key in gimli2) {
    console.log(key.toUpperCase() + ':', gimli2[key]);
  }
  // Initialize method on gimli object to return property keys
let keys = Object.keys(gimli2);
console.log(keys);

//Arrays
// Initialize array of shark species with array literal
let sharks = [
	"Hammerhead",
	"Great White",
	"Tiger",
];

// Initialize array of shark species with array constructor
let sharks2 = new Array(
	"Hammerhead",
	"Great White",
	"Tiger",
);
console.log(sharks.indexOf("Tiger"));
// If an index number is not found, such as for a value that does not exist, the console will return -1.
let mixedData = [
	"Jared",
	null,
	29,
	[
		"another",
		"array",
	],
];
sharks[4] = "whale";
// Append lobster to the end of the sharks array
sharks.push("lobster");
// Append dragonfish to the beginning of the sharks array
sharks.unshift("whale");


console.log(mixedData[0][2]);
console.log(sharks);

//When we want to remove a specific item from an array, we use the splice() method.
            //first param is starting index, second is amount to be removed
sharks.splice(1,1);

let firstArray = sharks.splice(0, 3);
let secondArray = sharks.splice(0, 6); 
console.log(secondArray);
//The pop() method will remove the last item in an array.
secondArray.pop();
console.log(secondArray);

firstArray.concat(secondArray);

// Remove the first item from the seaCreatures array
secondArray.shift();

// Replace seahorse with sea lion using splice method
sharks.splice(3, 1, "sea lion");
console.log(sharks);

// Loop through each 
//We can also use the for...of loop, a newer feature of JavaScript.
for (let sharks of firstArray) {
	console.log(sharks);
}


// Declare variable outside the loop
let i = 0;

// Omit initialization and condition
for (; ; i++) {
	if (i > 3) {
		break;
	}
	console.log(i);
}
// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
	// Update array with variable value
	arrayExample.push(i);
	console.log(arrayExample);
}
const sharky = {
	species: "great white",
	color: "white",
	numberOfTeeth: Infinity
}

for (attribute in sharky) {
	console.log(attribute);
}

// Assign string to a variable
let sharkString = "sharks";

// Iterate through each index in the string
for (let shark of sharkString) {
	console.log(shark);
}

// Initialize add function
function add(x, y) {
	return x + y;
}
console.log(add(20,99));

// Assign add function to sum constant
const sum = function add(x, y) {
	return x + y;
}

console.log(sum(20,50));

// Define multiply function
const multiply = (x, y) => {
	return x * y;
}
console.log(multiply(30, 4));


// Initializing a class with a class expression
const y = class {}

// Initializing a class definition
class Character {
	constructor(name, level) {
		this.name = name;
		this.level = level;
    }
        greet() {
            return `${this.name} says hello.`;
        }
	}
    const character1 = new Character('Varg', 1);
//New constructor functions can be created from the parent using the call() method. 
class Mage extends Character {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
console.log(hero2);


// Initialize an object with properties and methods
const career = {
    position: 'developer',
    type: 'salary',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
// const softwareEngineer = Object.create(job);

// softwareEngineer.position = "softwareEngineer";
// softwareEngineer.showDetails();


// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys6 = Object.keys(employees);

console.log(keys6);

//Object.values() creates an array containing the values of an object.
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};
// Get all values of the object
const values = Object.values(session);

console.log(values);

//Object.entries() creates a nested array of the key/value pairs of an object.
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

//Object.assign() is used to copy values from one object to another.


// Initialize an object
const name23 = {
    firstName: 'jared',
    lastName: 'woane'
};

// Initialize another object
const details23 = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name23, details23);

console.log(character);
   
//Object.freeze() prevents modification to properties and values of an object, 
//and prevents properties from being added or removed from an object.
// Initialize an object
const user12 = {
	username: 'kesjuan',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user12);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

//Object.seal() prevents new properties from being added to an object,
// but allows the modification of existing properties. 
// Initialize an object
const user45 = {
	username: 'jerry',
	password: 'hunter2'
};

// Seal the object
const newUser1 = Object.seal(user45);

newUser.password = '*******';
newUser.active = true;

console.log(newUser1);

//Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, 
//also accessible through the __proto__ property.

const employees55 = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees55);

//Object destructuring allows you to create new variables using an object property as the value.
// Destructure properties into variables
const note = {
    id: 2,
    title: 'My foist note',
    date: '02/02/1970',
  }
const { id, title, date } = note;
console.log(id,title,date);

// const {
//     author,
//     author: { firstName, lastName },
//   } = note2;

  const note3 = {
    title: 'My first note',
    author: {
      firstName: 'Sherlock',
      lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
  }

  //In this example, write the sum function as an anonymous function expression:

const sum1 = function (a, b) {
  return a + b
}
  
//The value of sum is an anonymous function, not a named function.

//An arrow function expression is an anonymous function expression written with the “fat arrow” syntax (=>).

const sumArrow = (a, b) => {
    return a + b
  }

  const printNumbers = {
    phrase: 'Number is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach(function (number) {
        console.log(this.phrase, number)
        //the result of running the function the phrase is actually undefined
      })
    },
}
printNumbers.loop();

    //Use bind to fix the function:

    const printNums = {
        phrase: 'The current value is:',
        numbers: [1, 2, 3, 4],
      
        loop() {
          // Bind the `this` from printNumbers to the inner forEach function
          this.numbers.forEach(
            function (number) {
              console.log(this.phrase, number)
            }.bind(this),
          )
        }
      }
      printNums.loop();

//Arrow functions provide a more direct way of dealing with this.
// Since their this value is determined based on the lexical scope,
// the inner function called in forEach can now access the properties of the outer printNumbers object, as demonstrated:
const printNumsFix2 = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach((number) => {
        console.log(this.phrase, number)
      })
    },
  }
  
  printNumsFix2.loop()

  function myFunction() {
    this.value = 5
  }
  
  // Log the prototype property of myFunction
  console.log(myFunction.prototype)

  const instance = new myFunction()

console.log(instance.value)

    
const myArrowFunction = () => {}

// Attempt to log the prototype property of myArrowFunction
console.log(myArrowFunction.prototype)
// output is undefines

const greety = () => 'Hello!'

console.log(greety());
    

//A built-in API that you can test this with is setTimeout, which sets a timer and performs an action after a specified amount of time. 
//setTimeout needs to be asynchronous, otherwise the entire browser would remain frozen during the waiting, 
//which would result in a poor user experience.

// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }
  //setTimeout takes two arguments: the function it will run asynchronously,
  // and the amount of time it will wait before calling that function.
  // Execute the functions
first()
second()
third()


function fn() {
    console.log('Just a function')
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
  }
  
  // Passing a function
  higherOrderFunction(fn)

 //In this code, you define a function fn, define a function higherOrderFunction that takes a function callback as an argument, 
 //and pass fn as a callback to higherOrderFunction.
 //higherOrderFunction will call the fn function 


 //Here is a demonstration of nested callbacks:
 function pyramidOfDoom() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
  }
  //In this code, each new setTimeout is nested inside a higher order function, creating a pyramid shape of deeper and deeper callbacks
  // Example asynchronous function
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
      return callback(new Error('Whoa! Something went wrong.'))
    } else {
      return setTimeout(
        // Just adding in a random number so it seems like the contrived asynchronous function
        // returned different data
        () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
        500,
      )
    }
  }
  
  // Nested asynchronous requests
  function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest('Second', function second(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
        })
      })
    })
  }
  
  // Execute 
  callbackHell();

  //A promise represents the completion of an asynchronous function. It is an object that might return a value in the future. It accomplishes the same basic goal as a callback function,
  // but with many additional features and a more readable syntax.
  //You can initialize a promise with the new Promise syntax, and you must initialize it with a function. The function that gets passed to a promise has resolve and reject parameters.
  // The resolve and reject functions handle the success and failure of an operation, respectively.


const promise = new Promise((resolve, reject) => {})
console.log(promise);

//The first thing you can do to test out a promise is fulfill the promise by resolving it with a value:
const promise1 = new Promise((resolve, reject) => {
    resolve('We did it!')
  })
console.log(promise1);

//consuming a promise
//Promises have a method called then that will run after a promise reaches resolve in the code. 
//then will return the promise’s value as a parameter.

promise1.then((response) => {
    console.log(response)
  })

  //The following code simulates data returned from an asynchronous request as a promise:  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
  })
  
  // Log the result
  promise2.then((response) => {
    console.log(response)
  })
  //Error Handling
  function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
        if (onSuccess) {
          resolve([
            {id: 1, name: 'Jerry'},
            {id: 2, name: 'Elaine'},
            {id: 3, name: 'George'},
          ])
        } else {
          reject('Failed to fetch data!')
        }
      }, 1000)
    })
  }

  // Run the getUsers function with the false flag to trigger an error
getUsers(false)
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})

// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

//   then()	Handles a resolve. Returns a promise, and calls onFulfilled function asynchronously
// catch()	Handles a reject. Returns a promise, and calls onRejected function asynchronously
// finally()	Called when a promise is settled. Returns a promise, and calls onFinally function asynchronously


//using the fetch api with promises
//fetch is a two-part process, and therefore requires chaining then. 
//This example demonstrates hitting the GitHub API to fetch a user’s data, 
//while also handling any potential error:

// Fetch a user from the GitHub API
fetch('https://api.github.com/users/kesjuan')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
  //The fetch request is sent to the URL, which asynchronously waits for a response.
  // The first then passes the response to an anonymous function that formats the response as JSON data, 
  //then passes the JSON to a second then that logs the data to the console. The catch statement logs any error to the console.

  //An async function allows you to handle asynchronous code in a manner that appears synchronous. 
  //async functions still use promises under the hood, 
  // Create an async function
async function getUser() {
    return {}
  }
  console.log(getUser());
  //you can handle an async function with then in the same way you could handle a promise. 
  //Try this out with the following code:
  getUser().then((response) => console.log(response));
  //await can be used within an async function and will wait until a promise settles before executing the designated code.
  // Handle fetch with async/await
async function getUser() {
    const response = await fetch('https://api.github.com/users/kesjuan')
    const data = await response.json()
  
    console.log(data)
  }
  
  // Execute async function
  getUser()

  // Handling success and errors with async/await
async function getUser() {
    try {
      // Handle success in try
      const response = await fetch('https://api.github.com/users/octocat')
      const data = await response.json()
  
      console.log(data)
    } catch (error) {
      // Handle error in catch
      console.error(error)
    }
  }

