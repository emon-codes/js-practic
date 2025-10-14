// class parcon{

//     constructor(name, age, deperntment, roll){
//         this.name = name;
//         this.age = age;
//         this.deperntment = deperntment;
//         this.roll= roll;

//     };
    
// show() {
//     console.log(`name ${this.name} age ${this.age} deperntment ${this.deperntment} roll${this.roll}` )
// };

// };



// const studentOne = new parcon("Emon", 22, "cst", 673505);

// console.log(studentOne);


// const studenttow = new parcon (" rakib", 21, "cst", 673564 );


// console.log(studenttow);

// const studentthree = new parcon (" rony", 23, "cst", 673569 );

// console.log(studentthree);




// studentOne.show();
// studenttow.show();
// studentthree.show();

// class parcon {
//     constructor (name,  roll, dep, section){              /*  constructor new data lucation er moto kaj kora */
//          this.namee = name;

//         this.rolll = roll;
       
//         this.depp = dep;

//         this.sectionn = section;       

//     }
   
//             // coll holo akta function()


//     coll (){
//         console.log(`
//             student info: ${this.namee}
//             roll: ${this.rolll}
//             dep: ${this.depp}
//             section: ${this.sectionn} `)

//     }

// }

// const parcon1 = new parcon("emon", 673505,"cst",  "21-22");
// const parcon2 = new parcon("emo", 673505,"cst",  "21-22");
// const parcon3 = new parcon("em", 673505,"cst",  "21-22");
// const parcon4 = new parcon("e", 673505,"cst",  "21-22");
// const parcon5 = new parcon("0", 673505,"cst",  "21-22");


// parcon1.coll()
// parcon2.coll()
// parcon3.coll()
// parcon4.coll()
// parcon5.coll()


// class father{

// taka(){

// console.log(`father class colled`)


// }



// }


// class son extends father {

// bike(){

// console.log(`son need a bike`)


// }
// }


// const coll = new son()



// coll.bike()
// coll.taka()






// class Father {
//   constructor(name) {
//     this.name = name;
//   }

//   showFather() {
//     console.log(`${this.name} is the father`);
//   }
// }

// class Son extends Father {
//   constructor(name, age) {
//     super(name); // super() বাবার constructor কে ডাকে ata javascript er akta keyword
//     this.age = age;
//   }

//   showSon() {
//     console.log(`Son is ${this.age} years old`);
//   }
// }

// const emon = new Son("Rana", 20);

// emon.showFather(); // Rana is the father
// emon.showSon();    // Son is 20 years old







class player {
    constructor(name, profeshon){
        this.name = name;
        this.profeshon = profeshon;
    }
    player1() {
        console.log(`player one called ${this.name}`)
    }
}


class juniorplayer extends player {

constructor(name, age, profeshon){
    super(name, profeshon);
    this.age = age;
   
}
    player2(){
        console.log(`player two called ${this.age} name ${this.name} profeshon ${this.profeshon}`) // ei khanea name and profeshon player class thika aica
        
    }

}


const playerDetils = new juniorplayer("EMON", 22, "devoloper");


playerDetils.player1()
playerDetils.player2()
