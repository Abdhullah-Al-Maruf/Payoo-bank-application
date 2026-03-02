const buttons=document.querySelectorAll(".flex-col")
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        // remove the color class from the all btn 
        buttons.forEach(btn=>btn.classList.remove("btn-primary") )
    

//it will add to the click btn
        button.classList.add("btn-primary")


    

})




})







