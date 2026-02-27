// sudo code for login page
// 1.add a event listener to the login btn
// 2.then get the value of mobile num and pin and store it in a variable of its value
// 3. then match the pin and number if match we will show a alert
// 4. and  go to the homepage by window.location.assign(/filepath )     a else we will show error  


document.getElementById('login-btn')
   .addEventListener("click",function (){
      const mobileNumber= document.getElementById ('mobile-number');
    const newNumber =mobileNumber.value ;
    const Pin =document.getElementById('password')
    const newPin=Pin.value;
    if(newNumber=="01822524817" && newPin=="1234"){
         alert("Successfully Logged In!")
         window.location.assign("./homepage.html");
    }else{
      alert("Information are Invalid")
      return
    }
      

   })
