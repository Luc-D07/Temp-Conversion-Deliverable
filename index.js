// let cValue = document.querySelector("CInput")
// cValue = document.getElementById("CInput").value;
function ConvertCtoF(degreesCelsius) {
    // Your code here
    let cValue = document.getElementById("CInput").value;
    //need to import value from text box id=CInput to be used in formula
    // let cValue = document.getElementById("CInput").nodeValue;
    degreesCelsius = cValue;

    let temp = (cValue * (9 / 5)) + 32;

    // ************** MAY NOT NEED CODE BELOW *******
    // if (temp < 32) {
    //     document.getElementById("coldImage").style.visibility = "visible"
    // }
    // else if (temp >= 32 && temp <= 50) {
    //     document.getElementById("coolImage").style.visibility = "visible"
    // }
    // else if (temp > 50) {
    //     document.getElementById("warmImage").style.visibility = "visible"
    // }


    console.log(parseFloat(temp));
    // if (cValue = NaN) {
    //     console.log("This is not a number");
    // }
    // return temp;
};
console.log(ConvertCtoF());


function ConvertFtoC(degreesFahrenheit) {
    // Your code here
    let fValue = document.getElementById("FInput").value;
    //need to import info from text box id=FInput to be used in formula
    degreesFahrenheit = fValue;

    let temp = ((fValue - 32) * 5 / 9);

    //here we connect the corresponding input to the image?
    if (fValue < 32) {
        //display cold image
        document.getElementById("coldImage").style.visibility = "visible"
        console.log(parseFloat(temp));
    }
    else if (fValue >= 32 && fValue <= 50) {
        //display cool image
        document.getElementById("coolImage").style.visibility = "visible"
        console.log(parseFloat(temp));
    }
    else if (fValue > 50) {
        //display warm image
        document.getElementById("warmImage").style.visibility = "visible"
        console.log(parseFloat(temp));
    }
    else if (fValue = NaN) {
        //does this make a statement below convert box?
        console.log("This is not a number")

    }

    return temp;

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

}

document.getElementById("FInput").addEventListener("click", notANumber);
document.getElementById("CInput").addEventListener("click", notANumber);

function notANumber() {
    document.getElementById("ErrDiv").innerHTML = "This is not a number";
    // document.getElementById("CInput").innerHTML = "This is not a number";
}




