
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const prevWithdrawAmount = getElementValueById('withdraw-total');
    const totalWithdrawAmount = newWithdrawAmount + prevWithdrawAmount;
    if (isNaN(newWithdrawAmount)) {
        alert("Invalid input");
        return;
    }

    const prevBalanceTotal = getElementValueById('balance-total');
    if (newWithdrawAmount > prevBalanceTotal) {
        alert("You can't withdraw more than your balance.");
        return;
    }

    setTextElementValueById('withdraw-total', totalWithdrawAmount);
    const finalBalance = prevBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', finalBalance);
})