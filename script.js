// get the display id

const display = document.getElementById("display");

// display the buttons content in the display input

function appendToDisplay(input){
    display.value += input ;
}

// clear display when C button clicked

function clearDisplay(){
    display.value = "" ;
}

// calculat the display content

function calculate(){
    try{
        display.value = eval(display.value) ;
    }
    catch(error){
        display.value = "Error" ;
    }
}