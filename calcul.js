let display= document.getElementById("inputext");
let Calculation= " ";
    function appendValue(value){
        Calculation+= value;
        display.Value=Calculation;
    }
    function ClearDisplay() {
        Calculation= " ";
        display.Value= Calculation;
    }
    function deleteLastCharacter(){ 
Calculation= Calculation.slice(0,-1);
display.Value= Calculation;

    }  
    function Calculate(){ 
        try{ 
        let result=eval(Calculation);
        display.Value= result;
        Calculation= result.toString();
    }
catch (error){
    display.Value="error";
    Calculation= " ";

}}
document.addEventListener(" keydown", function (event){
    const key=event.key;
    if(/[0-9]/.test(key)){
        appendValue.(key)
    }
                                                else if(key==="+")
} } 