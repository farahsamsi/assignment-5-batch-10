// donate now button click

document.getElementById("donate-now-1").addEventListener("click", function () {
  const inputMoney1 = getInputFieldValueById("donate-input-1");
  const balanceInnerText1 = getInnerTextById("donate-amount-1");
  const balance = getInnerTextById("balance");

  if (inputMoney1 < 0 || inputMoney1 > balance || inputMoney1 !== 'number') {
    return alert("Invalid Donation Amount");
  } else {
    // adding donation amount in the donate button on top of the cards
    const donateAmount = inputMoney1 + balanceInnerText1;
    document.getElementById("donate-amount-1").innerText = donateAmount;

    // subtracting donation amount from total balance
    const remainingBalance = balance - donateAmount;
    document.getElementById("balance").innerText = remainingBalance;
  }
});
