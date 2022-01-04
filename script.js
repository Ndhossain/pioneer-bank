const loginButton = document.getElementById('logIn');
const logInArea = document.getElementById('logInField')
const transictionArea = document.getElementById('transictionArea');
loginButton.addEventListener('click', function () {
    logInArea.style.display = 'none';
    transictionArea.style.display = 'block';
})