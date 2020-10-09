let guess;
let hit = 0;
let guesses = 0;

let isSunk = false;

//The location of Ship(3cells 0f 7 possible cells)
let location1 = 4;
let location2 = 5;
let location3 = 6;

while (isSunk == false) {
  guess = prompt("Ready, Aim, Fire! (enter a number 0-6) :");
    if (guess < 0 || guess > 6) {
   alert("Please enter a valid number");
   console.log("Please enter a valid number");
    } else {
       guesses = guesses + 1 ;//number of guesses made to sink the ship
        if (guess == location1 || guess == location2 || guess == location3) { //hits on cells where ship is located Type 1
        alert("HIT!");
        console.log("HIT!");
        hit = hit + 1;
        if (hit == 3) {
        isSunk = true;
        alert(`Well done! You sunk the ship by ${guesses} guesses. And your accuracy is ` + ((3 / guesses) *100).toFixed(1));
        console.log(`Well done! You sunk the ship by ${guesses} guesses. And your accuracy is ` + (3 / guesses));
      }
    } else {
      alert("MISS!");
      console.log("MISS!");
    }
  }
}