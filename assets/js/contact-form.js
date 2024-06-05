let fNameInput = document.querySelector('.fNameInput');
let lNameInput = document.querySelector('.lNameInput');
let emailAddressInput = document.querySelector('.emailAddressInput');
let queryTypesInputs = document.querySelectorAll('.queryTypesInput');
let textArea = document.querySelector('.textArea');
let checkbox = document.querySelector('.checkbox');
let submit = document.querySelector('.submit');

let formOutput = document.querySelector('.formOutput');
let fNameOutput = document.querySelector('.fNameOutput');
let lNameOutput = document.querySelector('.lNameOutput');
let emailOutput = document.querySelector('.emailOutput');
let messageOutput = document.querySelector('.messageOutput');
let queryOutput = document.querySelector('.queryOutput');

function handleBtnClick(e) {
  e.preventDefault();

  let selectedQueryType = '';
  for (let i = 0; i < queryTypesInputs.length; i++) {
    if (queryTypesInputs[i].checked) {
      selectedQueryType = queryTypesInputs[i].value;
    }
  }

  fNameOutput.innerHTML = fNameInput.value;
  lNameOutput.innerHTML = lNameInput.value;
  emailOutput.innerHTML = emailAddressInput.value;
  messageOutput.innerHTML = textArea.value;
  queryOutput.innerHTML = selectedQueryType;
}
submit.addEventListener('click', handleBtnClick);