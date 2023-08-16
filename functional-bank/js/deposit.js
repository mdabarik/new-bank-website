

document.getElementById("btn-deposit").addEventListener('click', function() {
    // deposit functionality
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const prevDepositTotal = getElementValueById('deposit-total');
    const newDeopositTotal = newDepositAmount + prevDepositTotal;
    // validation
    if (isNaN(newDeopositTotal)) {
        alert("invalid input");
        return;
    }
    setTextElementValueById('deposit-total', newDeopositTotal);

    // balance update functionality
    const prevBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = prevBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});