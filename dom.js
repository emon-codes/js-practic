
// function changeName(){
//     document.getElementById("name").innerText= "wellcom Shifat"
// }

// const { createElement } = require("react");


    //   const changeText = document.querySelector("#kek");
      
    //   changeText.innerText = "bangladesh";



// const colorChange = document.querySelectorAll(".lorem1");
// colorChange.forEach((p) => {
//     p.style.color = "red";
// })


// const fontChange = document.querySelector

// function click() {
//     document.querySelector(".lorem1").innerText = "paragraph";
// }

    // function click() {
    //   document.querySelector(".lorem1").innerText = "paragraph";
    // }


    const items = document.getElementById("items");

    const fragment = document.createDocumentFragment();



    for (let i= 0 ; i <= 100 ; i++){
      const li = document.createElement("li");

      li.textContent ="items" + i;

      fragment.appendChild(li);


    }

    items.appendChild(fragment);