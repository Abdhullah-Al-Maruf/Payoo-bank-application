// this function will return the value from input field
// shorter version 
// const getInputValue = id => document.getElementById(id).value;

// longer version
const  getInputValue = (id)=>{
    const input =document.getElementById(id);
    const value =input.value;
    return value;
}


// clear input function
const clear=(id)=>{
    const fieldValue=document.getElementById(id);
    fieldValue.value=""
}