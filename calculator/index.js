let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

Barray = Array.from(buttons)
Barray.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            input.value=string;
        }
        else {
            string=string+e.target.innerHTML
            input.value=string;
        }
    })

})


