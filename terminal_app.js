const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
let answer = rl.question('What did you do yesterday? ', (answer) => {
  // TODO: Log the answer in a database
  answers[0] = answer;
  console.log(`Thank you for your valuable feedback: ${answer}`);
    
    rl.question("What is your favourite colour? ", (color) => {
        answers[1] = color;

        rl.question("What do you want? ", (want) => {
            answers[2] = want;
            for(let a of answers){
                console.log("Answer: " + a);
            }
            rl.close();
        });
    });
  
});
