// donate now button click

const cardTitle1 = document.getElementById("donation-title-1").innerText;
const today = new Date();

document.getElementById("donate-now-1").addEventListener("click", function () {
  const inputMoney1 = getInputFieldValueById("donate-input-1");
  const balanceInnerText1 = getInnerTextById("donate-amount-1");
  const balance = getInnerTextById("balance");

  if (inputMoney1 < 0 || inputMoney1 > balance || isNaN(inputMoney1)) {
    return alert("Invalid Donation Amount");
  } else {
    // adding donation amount in the donate button on top of the cards
    const donateAmount = inputMoney1 + balanceInnerText1;
    document.getElementById("donate-amount-1").innerText = donateAmount;

    // subtracting donation amount from total balance
    const remainingBalance = balance - inputMoney1;
    document.getElementById("balance").innerText = remainingBalance;

    // listing donation history
    document.getElementById(
      "list-of-donation-history"
    ).innerHTML += `<div class="space-y-4 border rounded-2xl p-8">
                    <h1 class="text-black text-xl font-bold">${inputMoney1} Taka is Donated for ${cardTitle1} </h1>
                    <p class="text-dark font-light">${today}</p>
                </div>`;

    // modal
    my_modal_5.showModal();
  }
});

// toggle features
document
  .getElementById("show-donation-section")
  .addEventListener("click", function () {
    showSectionById("donation-section");
    bgColorOfButton("show-donation-section");
  });

document
  .getElementById("show-history-section")
  .addEventListener("click", function () {
    showSectionById("history-section");
    bgColorOfButton("show-history-section");
  });
