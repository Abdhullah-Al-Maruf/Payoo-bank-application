document.getElementById("cash-out-btn").
    addEventListener("click", function () {
        // step-1 get the input of agent number and validation
        const agentNumberInput = document.getElementById("agent-num")
        const agentNumber = agentNumberInput.value;
        if (agentNumber.length !== 11) {
            alert("Please enter a 11 digit agent Number")
            return;
        }

        //step-2 get the amount and validation
        const withdrawAmount = document.getElementById("amount").value;
        const amount = Number(withdrawAmount);
        const mainBalance = document.getElementById("available-balance")
        const availableBalance = Number(mainBalance.innerText);
        const PinNumber = document.getElementById("withdraw-pass").value;
// step- pin number validation
        if (PinNumber == "1234") {

        //  step-4 get the balance and minus the value with the withdraw amount
            if (availableBalance < amount) {
                alert("insufficient balance")
                return;

            } else if (amount <= 0) {
                alert("invalid amount")
                return;
            }
            
        // step-5 set the updated balance in available balance
            else {
                const updatedBalance = availableBalance - amount;
                mainBalance.innerText = updatedBalance;
                alert(`amount ${amount} taka is withdraw successfully`)
            }


        } else {
            alert("invalid pin number")
        }






 
    })