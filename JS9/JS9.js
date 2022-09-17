// Try to predict the output of the comparisons before printing them in the console.

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(name == lastname ); // False because Strings should be same including lower and upper cases
console.log(age <= average); // Age is greater or equals to average, so it's true
console.log(firstYearCompleted == lastname); // Boolean value can not be equal to string even if it's "true"
console.log(yearsCompleted == firstYearCompleted); // This is true, the reason of behind this in coding 1 means true when this line starts working JS reads 1 as a true
console.log(firstYearCompleted === yearsCompleted); // This is false because of this is not same way, it starts with boolean value and in second part it reads as a number not a true boolean value
console.log(examsCompleted < age); // Exam count is lower than age, it's true
console.log(isGraduated > yearsCompleted); // Boolean value can not be greater, it's false









