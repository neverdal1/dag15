const submitValue = document.querySelector("#submitValue");
console.log(submitValue);

submitValue.addEventListener("click", () =>{

    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue) 
    
    const displayValue = document.querySelector("#displayValue");
console.log(displayValue);

displayValue.textContent = inputValue;

const fromValue = document.querySelector("#fromValue").value;
console.log(fromValue);

const toValue = document.querySelector("#toValue").value;
console.log (toValue);

let result; 


if (fromValue === "CM"& toValue === "M") {
    // kalkulering 
    result = inputValue / 100;

}
else if (fromValue === "CM" & toValue === "KM") {
    //  kalkulering
    result = inputValue / 100000
    
}
else if(fromValue === "M" & toValue === "CM") {
    // kalkulering
    result = inputValue * 100
}
    

else if (fromValue === "M" & toValue === "KM") {
 // kalkulering
 result = inputValue / 1000
}
   
  
else if (fromValue === "KM" & toValue === "CM") {
     // kalkulering
     result = inputValue * 100000
     
    }
else if (fromValue === "KM" & toValue === "M") {
     // kalkulering
     result = inputValue  * 1000
}
  
else {

    console.log (" choose two different options!")
}

displayValue.textContent = result;
});





































































































































































































































































    
