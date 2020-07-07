
// let farVal = document.querySelector("#FInput");
// let celVal = document.querySelector("#CInput");

//make 4 global values for conversions to call them in the bodyLoaded fnc?
// let cValue = document.getElementById("CInput");
// let cTemp = (cValue * (9 / 5)) + 32;

// let fValue = document.getElementById("FInput");
// let fTemp = ((fValue - 32) * 5 / 9);



function ConvertCtoF(degreesCelsius) {
    // Your code here
    let cValue = document.getElementById("CInput").value;
    // document.getElementById("box").innerHTML = cValue
    //need to import value from text box id=CInput to be used in formula
    // let cValue = document.getElementById("CInput").nodeValue;
    degreesCelsius = cValue;
    // console.log(parseFloat(cValue));

    let cTemp = (cValue * (9 / 5)) + 32;
    // Below allow for result to be diplayed in F Input box
    //when line below is commented out, conversions work BUT celcius conversion isnt being printed in FInput box
    // document.getElementById("FInput").value = temp;

    // document.getElementById("CInput").innerText = temp;

    console.log(parseFloat(cTemp));
    return cTemp;





};
console.log(ConvertCtoF());


function ConvertFtoC(degreesFahrenheit) {
    // Your code here
    let fValue = document.getElementById("FInput").value;
    //need to import info from text box id=FInput to be used in formula
    degreesFahrenheit = fValue;
    // console.log(fValue);

    let fTemp = ((fValue - 32) * 5 / 9);
    //line of code below is good!!!
    document.getElementById("CInput").value = fTemp;

    //here we connect the corresponding input to the image?
    if (fValue < 32) {
        //display cold image
        document.getElementById("coldImage").style.visibility = "visible"
        console.log(parseFloat(fTemp));
    }
    else if (fValue >= 32 && fValue <= 50) {
        //display cool image
        document.getElementById("coolImage").style.visibility = "visible"
        console.log(parseFloat(fTemp));
    }
    else if (fValue > 50) {
        //display warm image
        document.getElementById("warmImage").style.visibility = "visible"
        console.log(parseFloat(fTemp));
    }
    else if (fValue = NaN) {
        //does this make a statement below convert box?
        console.log("This is not a number")

    }

    return fTemp;

}
console.log(ConvertFtoC());


function bodyLoaded() {
    // Your code here 
    // let cValue = document.querySelector("CInput")
    //create a click event that when convert button is clicked, functions will work and return a number
    document.getElementById("ConvertButton").addEventListener("click", ConvertCtoF);
    document.getElementById("ConvertButton").addEventListener("click", ConvertFtoC);
    //this hides all of the images until I want them to be displayed
    document.getElementById("warmImage").style.visibility = "hidden";
    document.getElementById("coolImage").style.visibility = "hidden";
    document.getElementById("coldImage").style.visibility = "hidden";

    //message for bad input?
    // document.getElementById("FInput").innerHTML = String(fValue) + " is not a number"

    // document.getElementById("CInput").innerText = farVal;

}

//if FInput == '', then disable c to f function

document.getElementById("FInput").addEventListener("click", notANumber);
document.getElementById("CInput").addEventListener("click", notANumber);

function notANumber() {
    document.getElementById("ErrDiv").innerHTML = "This is not a number";
    // document.getElementById("CInput").innerHTML = "This is not a number";
}




