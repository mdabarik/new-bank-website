

/*
1. add event lister to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to a number type
3. clear the deposit the input field after getting the value
4. get the previous deposit total
5. calculate new deposit balance and set it to the deposit amount

6. get current balance
7. calculate the new balance and set it to the balance total element
*/

// step 1
document.getElementById('btn-deposit').addEventListener('click', function() {
    // step 2
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 3
    depositField.value = "";

    // step 4
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step 6
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceTotalString);

    // step 7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})