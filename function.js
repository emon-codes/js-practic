function coll() {
    console.log("welcome to function part")
}

coll();


// Anonymus function


const hello = function () {
    console.log("Anonymus function example")
}
hello()



// function with paramiter

// "value1, value2" ei gula hoila paramiter

function multiplay(value1, value2) {
    console.log(value1 * value2)
}

multiplay(5, 6);        //ei khanea "5, 6" holo argument






// array function


const squere = () => {
    console.log("this is array function")
}
squere()


const plass = (x, y) => {
    console.log(x*y)
}
plass(20, 2);