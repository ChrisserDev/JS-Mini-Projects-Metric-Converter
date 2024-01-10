// DOM ELEMENTS

const inputValue = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");
const meterResult = document.getElementById("meter-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");
const warning = document.getElementById("input-required");

//INITIALIZING THE VARIABLES

const meterToFeet =  3.281;
const literToGallon =  0.264;
const kiloToPound =  2.204;

//HANDLE CLICKS FUNCTION

function handleClicks(){
    
    const baseValue = inputValue.value;
    const feetResult = (baseValue * meterToFeet).toFixed(3);
    const metersResult = (baseValue / meterToFeet).toFixed(3);
    const gallonsResult = (baseValue * literToGallon).toFixed(3);
    const litersResult = (baseValue / literToGallon).toFixed(3);
    const poundsResult = (baseValue * kiloToPound).toFixed(3);
    const kilosResult = (baseValue / kiloToPound).toFixed(3);

    
    meterResult.textContent = `${baseValue} meters = ${feetResult} feet | ${baseValue} feet = ${metersResult} meters`;
    volumeResult.textContent = `${baseValue} liters = ${gallonsResult} gallons | ${baseValue} gallons = ${litersResult} liters`;
    massResult.textContent = `${baseValue} kilos = ${poundsResult} pounds | ${baseValue} pounds = ${kilosResult} kilos`;

    if(!baseValue){
        warning.style.display = "block"; 
        setTimeout(() => {
            warning.style.display = "none"; 
        }, 2000);
    }
};

//EVENT LISTENER THAT TRIGGERS THE HANDLECLICKS FUNCTION WHEN THE BUTTON IS CLICKED.

convertBtn.addEventListener("click", handleClicks);