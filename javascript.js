// for (count= 1; count<=5; count+1 ){
//     console.log("apna collage")
// }

// for (count = 1; count <= 500; count++) {
//     console.log("apna collage");
// }

// for(let count = 1; count <= 10; count++){{
//     console.log(count);
// }
// for(let i= 1; i <= 20; i++){
// console.log("2 x "+ i +"=" +(2*i));

// }

// for(let k= 1; k<= 50; k++){
// console.log("2 x" + k+ "=" + (k*2));
// }

// for(let a=10; a>=1; a--){
// console.log(a)

// }

// for (let i = 5; i >= 1; i--) {
//    console.log(i);
// }

// for (let i = 1; i <= 5000; i++) {
//    console.log("Apna College" +i);
// }

// for(d = 1; d <=100; d++){
//     console.log(d)
// }

// let gameNumber = 10;

// let userNum = prompt("Guess the game number:");

// while ( userNum != gameNumber){
// userNum= prompt("inter right number")
// };
// console.log("congration u are right")

///////////////////////////////////////////
// function sefat() {
//   console.log("welcome");
// }

// sefat();

// const greet = () => {
//   console.log("wellcome");
// };
// greet();

///////////////////////////

// function squre(x) {
//   console.log(`squre of ${x}: ${x * x}`);
// }

// squre(10);

// const y = squre;
// y(300);

// function higherOrderFunction(num, callback) {
//   callback(num);
// }

// higherOrderFunction(6, squre);

const taskOne = () => {
  console.log("task1");
};

const dataLoading = () => {
  console.log("task2. Data loading....");
};

const taskTwo = () => {
  setTimeout(dataLoading, 2000);
};
const taskThree = () => {
  console.log("task3");
};
const taskFour = () => {
  console.log("task4");
};
const taskFive = () => {
  console.log("task5");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
