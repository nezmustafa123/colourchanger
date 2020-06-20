const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function() {
    //change background colour
    //get random number between 0 - 3 colors[0]
    const randomNumber = randomNum();
    
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber] ;
});


function randomNum() {
    return Math.floor(Math.random() * colours.length);
}