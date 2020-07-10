function ConvertCtoF(degreesCelsius) {
    let cInput = document.getElementById("CInput").value;
    // console.log(cInput);
    if (cInput === "") {
        console.log("empty");
    } else {
        degreesCelsius === cInput;
        // console.log(parseFloat(cValue));
        let cTemp = (cInput * (9 / 5)) + 32;
        document.getElementById("FInput").value = cTemp;
        return cTemp;
    };
    // console.log(parseFloat(cTemp));
};
// console.log(ConvertCtoF());


function ConvertFtoC(degreesFahrenheit) {
    let fInput = document.getElementById("FInput").value;

    degreesFahrenheit === fInput;
    // console.log(fInput);
    let fTemp = ((fInput - 32) * 5 / 9);
    //line of code below is good!!!
    document.getElementById("CInput").value = fTemp;
    //allows finput to be displayed only, clears cinput
    document.getElementById("CInput").value = "";

    return fTemp;
};
// console.log(ConvertFtoC());


// function to have images display based on fahrenheit temp
function fahrenheitImg() {
    let fTemp = document.getElementById("FInput").value;

    if (fTemp < 32) {
        //display cold image
        document.getElementById("coldImage").style.visibility = "visible"
        // console.log(parseFloat(fTemp));
    }
    else if (fTemp >= 32 && fTemp <= 50) {
        //display cool image
        document.getElementById("coolImage").style.visibility = "visible"
        // console.log(parseFloat(fTemp));
    }
    else if (fTemp > 50) {
        //display warm image
        document.getElementById("warmImage").style.visibility = "visible"
        // console.log(parseFloat(fTemp));
    };

}

// ERROR MESSAGE
function fahrenheitErrorMessage() {
    let fahrenheit = document.getElementById("FInput").value;
    let text;

    if (isNaN(fahrenheit)) {
        text = fahrenheit + " is not a number";
    }
    else {
        text = "";
    };

    document.getElementById("ErrDiv").innerHTML = text;
}

function celciusErrorMessage() {
    //this is still taking the input from FInput, just returning NaN
    let celcius = document.getElementById("CInput").value;
    let text;

    if (isNaN(celcius)) {
        text = celcius + " is not a number";
    }
    else {
        text = "";
    };

    document.getElementById("ErrDiv").innerHTML = text;
}


function bodyLoaded() {

    //create a click event that when convert button is clicked, functions will work and return a number
    document.getElementById("ConvertButton").addEventListener("click", ConvertCtoF);
    document.getElementById("ConvertButton").addEventListener("click", ConvertFtoC);

    //this will hear the click and diplay the correct image
    document.getElementById("ConvertButton").addEventListener("click", fahrenheitImg);

    // Error Message if input is NaN
    document.getElementById("ConvertButton").addEventListener("click", celciusErrorMessage);
    document.getElementById("ConvertButton").addEventListener("click", fahrenheitErrorMessage);

    //this hides all of the images until I want them to be displayed
    document.getElementById("warmImage").style.visibility = "hidden";
    document.getElementById("coolImage").style.visibility = "hidden";
    document.getElementById("coldImage").style.visibility = "hidden";
};
