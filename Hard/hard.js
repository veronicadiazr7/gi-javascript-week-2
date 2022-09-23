/* Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 g
Jerry - 	height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s.
Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
 Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */

//Toms's Information

let tomHeight = 10;
let tomWeight = 8;
let tomBMI = tomWeight / tomHeight ** 2;

console.log(tomBMI);

//Jerry's Information
let jerryHeight = 10;
let jerryWeight = 45;
let jerryBMI = jerryWeight / jerryHeight ** 2;

console.log(jerryBMI);

//Boolean Variable: Does Tom have a higher BMI than Jerry?

let tomHigherBMI = function () {
  if (tomBMI > jerryBMI) {
    console.log(true);
  } else if (tomBMI < jerryBMI) {
    console.log(false);
  } else {
    console.log("They have the same BMI.");
  }
};

console.log(tomBMI > jerryBMI);

console.log("Is Tom's BMI higher than Jerry's? " + false);
