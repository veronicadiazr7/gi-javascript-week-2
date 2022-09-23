/* Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month.
For example: if the user enters the number 3, then it should return the month “March.”
 Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12). */

const numberOfMonth = parseInt(prompt("Pick a number from 1 to 12."));

const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

if (numberOfMonth >= 1 && numberOfMonth <= 12) {
  console.log(
    numberOfMonth +
      " corresponds to the month of " +
      monthName[numberOfMonth - 1]
  );
} else {
  alert("Invalid number entered. Try again and enter a number from 1 to 12.");
}
