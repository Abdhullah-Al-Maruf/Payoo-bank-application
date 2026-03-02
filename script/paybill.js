document.getElementById("paybill-btn").addEventListener("click",() => {
            const SelectedBank= getInputValue("select-payment-provider");
            console.log(SelectedBank);

               //validation
        if (SelectedBank === "Select Payment Option") {
            alert("please select a bank please!");
            return;
        }

        // step-2 get the account number
        const billerAccount = showAccount("biller-acc-num");
        isEleven(billerAccount);
        

        // //step-3 get amount and update according to the correct pin
        const amountToPay = getInputValue("amount-to-pay");
        const Password = getInputValue("pay-bill-pass");
        const mainBalance = getBalance();

        // step 3.1 check the amount is valid or not
            if (mainBalance < amountToPay) {
                alert("insufficient balance")
                return;

            } else if (amountToPay <= 0) {
                alert("invalid amount")
                return;

            }  
        // pin validation
        if (Password === "1234") {
            const newAddedBalance = mainBalance -amountToPay;
            setBalance(newAddedBalance);
            

            alert(` 
                PayBill Confirmation
                Amount:${amountToPay} taka
                Account:${billerAccount}(${SelectedBank})
                Date: ${formattedDate}
                Status:Successful
                 `)

             clear("amount-to-pay");
             clear("biller-acc-num")
             clear("pay-bill-pass");

            
        } else {
            alert("enter a valid Pin Number")
            return;
        }




})
