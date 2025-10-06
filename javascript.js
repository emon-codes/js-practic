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

// const taskOne = () => {
//   console.log("task1");
// };

// const dataLoading = () => {
//   console.log("task2. Data loading....");
// };

// const taskTwo = () => {
//   setTimeout(dataLoading, 2000);
// };
// const taskThree = () => {
//   console.log("task3");
// };
// const taskFour = () => {
//   console.log("task4");
// };
// const taskFive = () => {
//   console.log("task5");
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

///////////////////////////////////////////////////////

// let students = ["A", "B", "C"];

// students.forEach((student, idx) => {});

// let all = students.map((std, idx) => {});

// let studentName = ["emon", "rakib", "talha", "sahin", "sefat", "sayem"];

// studentName.forEach((student, index) => {
//   console.log(`this is student name ${student} this is index num ${index}`);
// });

// let studentId = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// studentId.forEach((student, idx, array) => {
//   console.log(`${student}.idx num ${idx} array ${array} `);
// });

// const vl = [1, 2, 3, 4, 5];

// vl.forEach((x, y) => {
//   console.log(`${x} : ${y}`);
// });

// let count = [1, 2, 3, 4, 5];

// let dubole = count.map((m) => m * 2);      // er khanea (m) holo perameter
// console.log(dubole);

const vl = [2, 3, 6, 4, 5, 7, 8];

const duble = vl.map((m) => m * 2);
console.log(duble);
