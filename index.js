const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const speed = document.getElementById("speed");
const errorMessage = document.getElementById("error-message");
const backgroundLight = document.getElementById("light-bg-btn");
const backgroundDark = document.getElementById("dark-bg-btn");
const container = document.getElementsByClassName("container");
const favBackgroundColor = [];
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 km = 0.621 mph
*/


convertBtn.addEventListener("click", function ()
{
     if (inputEl.value === "")
         errorMessage.innerHTML = "You have to input a value";
    //  else if (typeof inputEl.value === 'string' )
    //  {
    //      errorMessage.innerHTML = "You have to input a number";     
    // }
     else
     {
        meterToFeet();
        littersToGallons();
        kgtoPounds();
         kmToMph();
         errorMessage.innerHTML = "";
     }
})

function meterToFeet()
{
     length.innerHTML =
         `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet
          |
          ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters
         `;
}

function littersToGallons()
{
    volume.innerHTML =
        `
        ${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallon 
        |
        ${inputEl.value} gallon = ${(inputEl.value / 0.264).toFixed(3)} liters
        `;
}


function kgtoPounds()
{
    mass.innerHTML =
        `
        ${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds
        |
        ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos
        `;
}

function kmToMph()
{
    speed.innerHTML =
        `
        ${inputEl.value} km = ${(inputEl.value * 0.621.toFixed(3))} mph
        |
        ${inputEl.value} mph = ${(inputEl.value / 0.621).toFixed(3)} km
        `;
}

backgroundLight.addEventListener("click", function ()
{
    changeBackground("white");
    
})

backgroundDark.addEventListener("click", function ()
{
    changeBackground("black");
})

function changeBackground(color) {
    document.body.style.background = color;
    if (color === "black")
    {
        backgroundDark.style.color = "white";
        backgroundLight.style.color = "white";
        let containerChild = document.querySelector(".bottom-child");
        let itemBox = document.querySelectorAll(".item");
        itemBox.forEach((item) => item.style.backgroundColor = "#273549");
        let header = document.querySelectorAll("h3");
        header.forEach((header) =>  header.style.color = "#CCC1FF");
        containerChild.style.backgroundColor = "#1F2937";
        length.style.color = "#fff";
        volume.style.color = "#fff";
        mass.style.color = "#fff";
        speed.style.color = "#fff";
        localStorage.setItem("favBackgroundColor", "black");
        localStorage.getItem("black");
      
    }
    else
    {
        backgroundDark.style.color = "black";
        backgroundLight.style.color = "black";
        let containerChild = document.querySelector(".bottom-child");
        let itemBox = document.querySelectorAll(".item");
        itemBox.forEach((item) => item.style.backgroundColor = "#fff");
        let header = document.querySelectorAll("h3");
        header.forEach((header) =>  header.style.color = "#5A537B");
        containerChild.style.backgroundColor = "#F4F4F4";
        length.style.color = "#353535";
        volume.style.color = "#353535";
        mass.style.color = "#353535";
        speed.style.color = "#353535";
        localStorage.setItem("favBackgroundColor", "white");
        localStorage.getItem("white");
    }
}




