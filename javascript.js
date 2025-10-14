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

// let num = Array.from("Bangladesh");
// console.log(num);



// let students = ["A", "B", "C", "d", ""];

// students.forEach((student, idx, array) => {
//  console.log(`${student}.idx num ${idx} array ${array} `);
//  });

// console.log(students)



















// let studentName = ['rana', 'rakib', 'rony', 'forhad'];



// studentName.forEach((element, idx, arrow) => {
//     console.log(` ${element} index ${idx} arrow ${arrow}`)
// })

























//////////////////////////////////////////////////

let studentName = ['2', '8', '3', 4, '5'];

// student = studentName.map( num => num * 3)
// console.log(student);

// var bagfol = studentName.filter((num) => num % 2  != 0);
// console.log(bagfol)







////////////////////////////////////
/*Parameter	               মানে
accumulator     	আগের ধাপের ফলাফল                    
currentValue	    বর্তমানে যেটা প্রোসেস হচ্ছে                           
initialValue	    প্রথমবারের জন্য শুরুর মান] 
array.reduce(function(accumulator, currentValue, currentIndex, array) {
   // return new accumulator value
}, initialValue);

*/

let number = [10,20,30,40,50];

total = number.reduce((acc, init, idx, sak)  => acc + init+ idx + sak , 2);

console.log(total);

































studentName.push(3,2,1,6,5,4,);

// console.log(studentName)

// pop() sudu lust er akta element remove kora 

// studentName.pop()           
// console.log(studentName)



// studentName.shift()

// console.log(studentName)


// studentName.unshift(10,20,30,40,60,)

// console.log(studentName)




