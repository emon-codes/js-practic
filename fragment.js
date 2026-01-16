    const items = document.getElementById("items");

    const fragment = document.createDocumentFragment();



    for (let i= 0 ; i <= 100 ; i++){
      const li = document.createElement("li");

      li.textContent ="items" + i;

      fragment.appendChild(li);


    }

    items.appendChild(fragment);