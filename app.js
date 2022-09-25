const input = document.querySelector(".input");
const results = document.querySelector(".results");
const options = document.querySelectorAll(".keys");
const button = document.querySelector(".clear");
const del = document.querySelector(".on");
const equal = document.getElementById("key");

function doCalculation() {
    if (input.value.includes("sin")) {
        const num = input.value.replace("sin", "");
        results.innerHTML = Math.sin(num * Math.PI / 180);
    } else if (input.value.includes("cos")) {
        const num = input.value.replace("cos", "");

        results.innerHTML = Math.cos(num * Math.PI / 180);
    } else if (input.value.includes("tan")) {
        const num = input.value.replace("tan", "");
        results.innerHTML = Math.tan(num * Math.PI / 180);
    } else {
        results.innerHTML = eval(input.value);
    }
}
equal.addEventListener("click", doCalculation);


for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", (e) => {
        input.value += e.target.value;
    });
}

function clearInput() {

    input.value = "";
    results.innerHTML = "0";
}

button.addEventListener("click", clearInput);

function deleteInput() {
    if (input.value.includes("sin")) {
        input.value = input.value.slice(0, 0);
    } else if (input.value.includes("tan")) {
        input.value = input.value.slice(0, 0);
    } else if (input.value.includes("cos")) {
        input.value = input.value.slice(0, 0);
    } else {
        input.value = input.value.slice(0, -1);
    }
}

del.addEventListener("click", deleteInput);