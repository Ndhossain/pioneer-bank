// all buttons

function buttons(id) {
    return document.getElementById(id);
}


// enter button


const logInArea = document.getElementById('logInField')
const transictionArea = document.getElementById('transictionArea');
buttons('logIn').addEventListener('click', function () {
    logInArea.style.display = 'none';
    transictionArea.style.display = 'block';
})

// deposit button

buttons('depositBtn').addEventListener('click', function () {
    let bal = amount('depoAmount');

    balance('depoBalance', bal);

    balance('totalBalance', bal);

    document.getElementById('depoAmount').value = '';
});

// balance showing controler

function balance(id, NumberOfAmount) {
    let Balance = document.getElementById(id).innerText;
    let BalanceNumber = parseFloat(Balance);
    Balance = NumberOfAmount + BalanceNumber;
    document.getElementById(id).innerText = Balance;
}

// value of amount controler

function amount(id) {
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}

// withdraw button

buttons('withdrawBtn').addEventListener('click', function () {
    let bal = amount('withAmount');

    balance('withBalance', bal);

    balance('totalBalance',-1 * bal);

    document.getElementById('withAmount').value = '';
})