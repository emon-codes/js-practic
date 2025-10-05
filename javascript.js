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
