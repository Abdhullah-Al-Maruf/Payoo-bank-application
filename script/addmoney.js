// select-bank

document.getElementById("add-money-btn").
    addEventListener("click", function () {
        // step 1 - get the value from select bank
        const bank = getInputValue("select-bank");
        //validation
        if (bank === "Select Bank") {
            alert("please select a bank please!");
            return;
        }

        // step-2 get the account number
        const accNumber = showAccount("bank-acc-num");
        if (accNumber.length !== 11) {
            alert("please  enter 11 digit account number")
            return;
        }

        //step-3 get amount and update according to the correct pin
        const addMoney = Number(getInputValue("amount-to-add"));
        const password = getInputValue("add-money-pass");
        const getMainBalance = getBalance();

        // pin validation
        if (password === "1234") {
            const newAddedBalance = addMoney + getMainBalance;
            setBalance(newAddedBalance);
            

            alert(` 
                Add Money Confirmation
                Amount:${addMoney} taka
                Account:${accNumber}(${bank})
                Date: ${formattedDate}
                Status:Successful
                 `)

             clear("amount-to-add");
             clear("add-money-pass");
             clear("bank-acc-num");

            
        } else {
            alert("enter a valid Pin Number")
            return;
        }






    })