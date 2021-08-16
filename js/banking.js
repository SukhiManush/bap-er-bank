//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depostTotal = document.getElementById('deposit-total');
    const previousDepositText = depostTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    depostTotal.innerText = totalDepositAmount;
    //clear the  deposit input field
    depositInput.value = '';

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const totalBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceAmount = totalBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceAmount;
});
//handle withdraw even handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdraw = parseFloat(newWithdrawAmountText);



    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const totalWithdraw = previousWithdrawAmount + newWithdraw;
    withdrawTotal.innerText = totalWithdraw;

    withdrawInput.value = '';


    const totalBanlance = document.getElementById('balance-total');
    const previousBalanceText = totalBanlance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceAmount = previousBalanceAmount - newWithdraw;
    totalBanlance.innerText = newBalanceAmount;


})