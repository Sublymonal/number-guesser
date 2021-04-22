const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const roundUp = (ele) => {
  return Math.ceil(Math.random() * ele);
};

console.log(
  "Hello welcome to the Number Guessing Game REDUX EXTREME Gold edition"
);
console.log("Pick your difficulty");
console.log("Easy = 1 - 10 number range");
console.log("Medium = 1 - 100 number range");
console.log("Hard = 1 - 1000 number range");
console.log("Extreme = 1 - 10000 number range");

const guesser = (randNum,count) => {
    console.log('You have '+ count+ ' guesses left' )

    if(count === 0){
        console.log('you suck, you lost')
        rl.close();
        return
    }
    
  rl.question("Pick a Number : ", (answer) => {

    
    
    if (answer < randNum) {
      console.log("too low, try again");
      return guesser(randNum,count-=1);
    } else if (answer > randNum) {
      console.log("too high, try again");
      return guesser(randNum,count-=1);
    } else if (answer == randNum) {
      console.log("congrats, you win cake");
      rl.close();
    } else {
      console.log("pick a valid numer");
      return guesser(randNum,count);
    }
  });
};


const gameUp = () => {rl.question("Pick a difficulty: ", (answer) => {
    if (answer.toLowerCase() == "easy") {
      let randNum = roundUp(10);
      let count = 5
      guesser(randNum,count);
    } else if (answer.toLowerCase() == "medium") {
      let randNum = roundUp(100);
      let count = 10
      guesser(randNum,count);
    } else if (answer.toLowerCase() == "hard") {
      let randNum = roundUp(1000);
      let count = 20
      guesser(randNum,count);
    } else if (answer.toLowerCase() == "extreme") {
      console.log("please buy the DLC");
      gameUp();
    } else {
      console.log("invalid selection");
      gameUp();
    }
  });
  

}

rl.question("Pick a difficulty: ", (answer) => {
  if (answer.toLowerCase() == "easy") {
    let randNum = roundUp(10);
    let count = 5
    guesser(randNum,count);
  } else if (answer.toLowerCase() == "medium") {
    let randNum = roundUp(100);
    let count = 10
    guesser(randNum,count);
  } else if (answer.toLowerCase() == "hard") {
    let randNum = roundUp(1000);
    let count = 20
    guesser(randNum,count);
  } else if (answer.toLowerCase() == "extreme") {
    console.log("please buy the DLC");
    gameUp();
  } else {
    console.log("invalid selection");
    gameUp();
  }
});
