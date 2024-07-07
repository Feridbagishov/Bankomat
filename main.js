let depositButton = document.querySelector('#deposit');
let withdrawButton = document.querySelector('#withdraw');
let moneyInput = document.querySelector('#money');
let userBalance = document.querySelector('#userBalance');

let balance = 0;

function updateBalance() {
    userBalance.textContent = balance;
}

depositButton.addEventListener('click', function() {
    let amount = Number(moneyInput.value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert("Please enter a valid amount to deposit.");
    }
    moneyInput.value = '';
});

withdrawButton.addEventListener('click', function() {
    let amount = Number(moneyInput.value);
    if (amount > 0) {
        if (balance >= amount) {
            balance -= amount;
            updateBalance();
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid amount to withdraw.");
    }
    moneyInput.value = '';
});

updateBalance();
