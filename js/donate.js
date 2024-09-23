// donate now button click

const cardTitle1 = document.getElementById("donation-title-1").innerText;
const cardTitle2 = document.getElementById("donation-title-2").innerText;
const cardTitle3 = document.getElementById("donation-title-3").innerText;


// card 1
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
    const today = new Date();
    document.getElementById(
      "list-of-donation-history"
    ).innerHTML += `<div class="space-y-4 border rounded-2xl p-8">
                    <h1 class="text-black text-xl font-bold">${inputMoney1} Taka is Donated for ${cardTitle1} </h1>
                    <p class="text-dark font-light">${today}</p>
                </div>`;

    // modal
    my_modal_1.showModal();

    console.log(inputMoney1)

  }
});

// card 2
document.getElementById("donate-now-2").addEventListener("click", function () {
    console.log('btn 2');
  const inputMoney2 = getInputFieldValueById("donate-input-2");
  const balanceInnerText2 = getInnerTextById("donate-amount-2");
  const balance = getInnerTextById("balance");

  if (inputMoney2 < 0 || inputMoney2 > balance || isNaN(inputMoney2)) {
    return alert("Invalid Donation Amount");
  } else {
    // adding donation amount in the donate button on top of the cards
    const donateAmount = inputMoney2 + balanceInnerText2;
    document.getElementById("donate-amount-2").innerText = donateAmount;

    // subtracting donation amount from total balance
    const remainingBalance = balance - inputMoney2;
    document.getElementById("balance").innerText = remainingBalance;

    // listing donation history
    const today = new Date();
    document.getElementById(
      "list-of-donation-history"
    ).innerHTML += `<div class="space-y-4 border rounded-2xl p-8">
                      <h1 class="text-black text-xl font-bold">${inputMoney2} Taka is Donated for ${cardTitle2} </h1>
                      <p class="text-dark font-light">${today}</p>
                  </div>`;

    // modal
    my_modal_2.showModal();
  }
});

// card 3
document.getElementById("donate-now-3").addEventListener("click", function () {
    console.log('btn 3');
  const inputMoney3 = getInputFieldValueById("donate-input-3");
  const balanceInnerText3 = getInnerTextById("donate-amount-3");
  const balance = getInnerTextById("balance");

  if (inputMoney3 < 0 || inputMoney3 > balance || isNaN(inputMoney3)) {
    return alert("Invalid Donation Amount");
  } else {
    // adding donation amount in the donate button on top of the cards
    const donateAmount = inputMoney3 + balanceInnerText3;
    document.getElementById("donate-amount-3").innerText = donateAmount;

    // subtracting donation amount from total balance
    const remainingBalance = balance - inputMoney3;
    document.getElementById("balance").innerText = remainingBalance;

    // listing donation history
    const today = new Date();
    document.getElementById(
      "list-of-donation-history"
    ).innerHTML += `<div class="space-y-4 border rounded-2xl p-8">
                      <h1 class="text-black text-xl font-bold">${inputMoney3} Taka is Donated for ${cardTitle3} </h1>
                      <p class="text-dark font-light">${today}</p>
                  </div>`;

    // modal
    my_modal_3.showModal();
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
