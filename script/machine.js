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

// this functon get the main balance inner text as number
const getBalance=()=>Number(document.getElementById("available-balance").innerText)


// this function will be set the new balance after withdraw
const setBalance=(value)=>{
  const  balanceElement=document.getElementById("available-balance");
  balanceElement.innerText=value;



}

// show number
const showAccount=id=>document.getElementById(id).value;

// date formating 
const now = new Date();

const formattedDate = now.toLocaleString('en-BD', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});
