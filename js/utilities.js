// common shared functions

// input field value by Id
function getInputFieldValueById(id) {
  const inputMoney = parseFloat(document.getElementById(id).value);
  return inputMoney;
}

// element inner text by Id
function getInnerTextById(id) {
  const innerTextValue = parseFloat(document.getElementById(id).innerText);
  return innerTextValue;
}

// section showing function
function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// bg color of button
function bgColorOfButton(id){
    document.getElementById('show-donation-section').classList.remove('bg-primary', 'text-black');
    document.getElementById('show-donation-section').classList.add('btn-outline', 'text-dark');
    document.getElementById('show-history-section').classList.remove('bg-primary', 'text-black');
    document.getElementById('show-history-section').classList.add('btn-outline', 'text-dark');

    document.getElementById(id).classList.add('bg-primary', 'text-black');
    document.getElementById(id).classList.remove('btn-outline', 'text-dark');
}
