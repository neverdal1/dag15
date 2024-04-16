const submitValue = document.querySelector("#submitValue");
console.log(submitValue);


// submitvalue viser den konverterte verdien (kalkuleringen)
submitValue.addEventListener("click", () =>{
  
//   queryselector() henter noe fra html
    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue) 
    
    
    //   queryselector() henter noe fra html
    const displayValue = document.querySelector("#displayValue");
console.log(displayValue);


// .value er at vi henter verdi/innhold til element
displayValue.textContent = inputValue;


// .value er at vi henter verdi/innhold til element
const fromValue = document.querySelector("#fromValue").value;
console.log(fromValue);


// .value er at vi henter verdi/innhold til element
const toValue = document.querySelector("#toValue").value;
console.log (toValue);




// formel liste i else if
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
































































































































































































































































    
