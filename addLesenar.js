




// const button = document.getElementById("alertBtn")



// button.addEventListener("click", function(){
//     alert("i am hare");
// })


////////////////////////////////////
// const input = document.getElementById("input")
// const output = document.getElementById("output")




// input.addEventListener("input", function() {
//     output.textContent = ("hello   "+ input.value)
// })

//////////////////////////////////


// const tri = document.getElementById("hoverevent");



// tri.addEventListener("mouseover", function(){
//     tri.style.color = "green"
//     tri.style.backgroundColor = "orange"
//      tri.style.transition = "0.3s";
//     tri.textContent = "hover on me"
// })

// tri.addEventListener("mouseout", function(){
//     tri.style.color = ""
//     tri.style.backgroundColor = ""
//     tri.style.transition = "0.3s";
//     tri.textContent = "Bangladesh of the world famus country"
// })

//////////////////////////////////////////


// const inputbox = document.getElementById("inputbox")
// const showbox = document.getElementById("showbox")


// inputbox.addEventListener("keydown" , function(e){

// showbox.textContent = (" key press " + e.key)



// })
///////////////////////////////////////
// document.addEventListener("keydown", function(ent){


// if (ent.key === "Enter"){
//     console.log("you are press Enter")
// }

// if (ent.key === "Shift"){
//     console.log("you press shift")
// }



// } )


const cinput = document.getElementById("cinput")
const coutput = document.getElementById("coutput")



cinput.addEventListener("change", function(){
    coutput.textContent= ("text change" + cinput.value)
})