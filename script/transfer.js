document.getElementById("withdraw-btn").addEventListener("click",function(){
    // get all the input
    const userNum=getInputValue("reciver-num")
    const transferMoney= Number( getInputValue("trans-amount"))
    const transferPass=getInputValue("transfer-pass")
    const currentBalance=  getBalance();

    // step 1 num validation

// ^\d{11}$ means:

// ^ → start

// \d → only digits

// {11} → exactly 11 digits

// $ → end

    if(!/^\d{11}$/.test(userNum)){
   alert("Enter a valid 11 digit number");
    return;
    }

// check if the balance over or not   

       if (currentBalance < transferMoney) {
                alert("insufficient balance")
                return;

            } else if (transferMoney <= 0) {
                alert("invalid amount")
                return;

            }  
            
            if (transferPass === "1234") {
                 //step 3 transfer the amount if pin match
              
                const afterTransferBalance =currentBalance-transferMoney;
                setBalance(afterTransferBalance);

                alert(`
                    Money :${transferMoney}
                    transferred to
                    Account Number:${userNum}
                    successfully 
                    Date:${formattedDate}`)
                  // clear the input field
                clear("reciver-num");
                clear("trans-amount");
                clear("transfer-pass")
}
else{
    alert("Invalid pin")
}
        
            

})