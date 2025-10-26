"use strict";

window.addEventListener("DOMContentLoaded", main);

const number = 42;

function main(){
    console.log("Javascript kører!");

    document.querySelector("#btn_guess").addEventListener("click", buttonClicked);
}

function buttonClicked(){
    console.log("Der blev klikket på knappen")

    const guess = document.querySelector("#guess").valueAsNumber;
    console.log(guess);
    if(guess > number){
        console.log("Det er for højt");

        document.querySelector("#guesses").insertAdjacentHTML("beforeend",
            `<li>Du gættede på ${guess} - det var for højt</li>`
        );
    }

    if(guess == number){
        //TODO : skriv også at det er korrekt svar
        document.querySelector("#btn_guess").removeEventListener("click", buttonClicked);
    }
}