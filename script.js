// enter button

const loginButton = document.getElementById('logIn');
const logInArea = document.getElementById('logInField')
const transictionArea = document.getElementById('transictionArea');
loginButton.addEventListener('click', function () {
    logInArea.style.display = 'none';
    transictionArea.style.display = 'block';
})

// deposit button

const depositButton = document.getElementById('depositBtn');

depositButton.addEventListener('click', function () {
    const depositAmount = document.getElementById('depoAmount').value;
    const depositAmountNumber = parseFloat(depositAmount);
});

// withdraw button

const withdrawButton = document.getElementById('withdrawBtn');

withdrawButton.addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withAmount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
})