// A quiz question constructor
var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

// Create the first question
var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon"); // 1) Add a fifth option

// Create a second question
var question2 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

question2.addOption("Earth");
question2.addOption("Jupiter");
question2.addOption("Saturn");
question2.addOption("Mars");
question2.addOption("Venus");

// Create a third question
var question3 = new QuizQuestion(
    "What is the chemical symbol for water?",
    "H2O"
);

question3.addOption("O2");
question3.addOption("H2O");
question3.addOption("CO2");
question3.addOption("NaCl");
question3.addOption("C6H12O6");

// Show the first question
question1.showQuestion();

// Example usage in console
// Type: question2.showQuestion(); and press Enter
// Type: question2.answer; and press Enter
