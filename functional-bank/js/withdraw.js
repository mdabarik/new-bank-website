
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const prevWithdrawAmount = getElementValueById('withdraw-total');
    const totalWithdrawAmount = newWithdrawAmount + prevWithdrawAmount;
    setTextElementValueById('withdraw-total', totalWithdrawAmount);

    const prevBalanceTotal = getElementValueById('balance-total');
    const finalBalance = prevBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', finalBalance);
})