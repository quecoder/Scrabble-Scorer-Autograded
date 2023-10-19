// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

"-----------------------------------------------------------------------------------"
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   let letterPoints = "";
   word = word.toUpperCase();

   for (let i = 0; i < word.length; i++) {
      for (const pointValue in oldPointStructure) {
         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }
      }
   }
   return letterPoints;
}
"-----------------------------------------------------------------------------------"
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let firstQuestion = input.question("Let's play some scrabble! Enter a word: ");
   return firstQuestion;
};

"-----------------------------------------------------------------------------------"

function simpleScorer (word) {
   word = word.toUpperCase();
  
   let score = 0;
   score = Number(word.length)

   return score;
};

function vowelBonusScorer (word) {
   word = word.toUpperCase();

   let score = 0;
   let vowelScorer = ['A', 'E', 'I', 'O', 'U'];


   for (let i = 0; i < word.length; i++) {

      if (vowelScorer.includes(word[i])) {
         score += 3
      } if (!vowelScorer.includes(word[i])) {
         score += 1
      }

   }
   return score;
};

function scrabbleScorer (word) {
   word = word.toLowerCase();

   let score = 0

   for (let i = 0; i < word.length; i++) {
      score += newPointStructure[word[i]];
      
   }
   return score;
}; 
   
"-----------------------------------------------------------------------------------"
const scoringAlgorithms = [{
      
   name: 'Simple Score',
   description: 'Each letter worth one point.',
   scorerFunction: simpleScorer
   },

   {
   name: 'Bonus Vowels',
   description: 'Vowels are 3 pts, consonants are 1 pt.',
   scorerFunction: vowelBonusScorer
   },

   {
   name: 'Scrabble',
   description: 'The traditional scoring algorithm.',
   scorerFunction: scrabbleScorer
   }
];


function scorerPrompt(word) {
   let scorePrompt = input.question(`Choose Scoring Method\nType "0" for Simple Score\nType "1" for Bonus Vowels\nType "2" for Scrabble Score\nSelect one: `)
   word = word.toLowerCase()

   if (scorePrompt === '0') {
      console.log(`algorithm name: ${scoringAlgorithms[0].name}\nscoringFuntion result: ${scoringAlgorithms[0].scorerFunction(word)}`);
      
   } else if (scorePrompt === '1') {
     console.log(`algorithm name: ${scoringAlgorithms[1].name}\nscoringFuntion result: ${scoringAlgorithms[1].scorerFunction(word)}`);
   
   } else if (scorePrompt === '2') {
      console.log(`algorithm name: ${scoringAlgorithms[2].name}\nscoringFuntion result: ${scoringAlgorithms[2].scorerFunction(word)}`);
      
   } else {
      console.log("Not a valid number, try again.");
   }
   
};
"-----------------------------------------------------------------------------------"
function transform(oldPointStructure) {

   let newPointStructure = {}

for (let points in oldPointStructure) {
   let score = Number(points);

   for (let letter of oldPointStructure[points]) {
      newPointStructure[letter.toLowerCase()] = score;
   }
}
return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);
"-----------------------------------------------------------------------------------"
function runProgram() {
   let userWord = initialPrompt();
   scorerPrompt(userWord);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
