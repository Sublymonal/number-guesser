const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const roundUp = (ele) => {
    return Math.ceil(Math.random()* ele)
  }
  

      console.log('Hello welcome to the Number Guessing Game REDUX EXTREME Gold edition' )
      console.log('Pick your difficulty')
      console.log('Easy = 1 - 10 number range')
      console.log('Medium = 1 - 100 number range')
      console.log('Hard = 1 - 1000 number range')
      console.log('Extreme = 1 - 10000 number range')
  
 


rl.question("Pick a difficulty: " )