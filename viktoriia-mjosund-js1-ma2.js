// question 1
const myFunctionExpression = function () {
    console.log("Viktoriia");

};
myFunctionExpression();

//question 2
const button = document.querySelector(".btn");
function clickButton() {
    console.log("I was clicked");
};
button.addEventListener("click", clickButton);

//question 3
const keyInput = document.querySelector(".input");
function callbackFunction() {
    console.log("A key was pressed");
};
keyInput.addEventListener("keydown", callbackFunction);

//question 4
const button = document.querySelector("button");
function addClass() {
    button.classList.add("hover");
};

button.addEventListener("mouseover", addClass);

//question 5
const button = document.querySelector("button");
function removeClass() {
    button.classList.remove("hover");
};

button.addEventListener("mouseover", removeClass);

// question 6
const hoverText = document.querySelectorAll("li");
for (let i = 0; i < hoverText.length; i++) {
    hoverText[i].addEventListener("mouseover", loadAnimal);
}

function loadAnimal(event) {
    const animalTag = event.target.dataset.animal;
    if (animalTag === "goose") {
        console.dir(hoverText[0].dataset.animal);
    } else if (animalTag === "frog") {
        console.dir(hoverText[1].dataset.animal);
    } else if (animalTag === "elephant") {
        console.dir(hoverText[2].dataset.animal);
    }
}

//question 7
const animal = "cow";
switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

//question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function (sheep) {
    console.log(sheep);
});

//question 9
function logHello() {
    console.log("Hello");
    if (counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 0;
const intervalId = setInterval(logHello, 500);

//question 10
const updateContainer = document.querySelector(".container");
function updateText() {
    updateContainer.innerHTML = "Text updated";

}
setTimeout(updateText, 2000);