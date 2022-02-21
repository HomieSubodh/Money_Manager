"use strict";

//! DOM object representation
const earning = document.getElementById('earning');
const expenses = document.getElementsByClassName('expenses');
const totalExpenses = document.getElementById('total-expenses');
const calculationBtn = document.getElementById('calculation');
const remainBalance = document.getElementById('remain-balance');
const savingAmount = document.getElementById('saving-amount');
const lastBalance = document.getElementById('last-balance');
const savingPercent = document.getElementById('saving-percent');
const savingAmountBtn = document.getElementById('saving-amount-btn');


//* DOM Events
let costOfExpenses = 0;
calculationBtn.addEventListener('click', function () {
    for (let key of expenses) {
        if (key.value > 0) {
            costOfExpenses = parseFloat(costOfExpenses) + parseFloat(key.value);

            //* error handle in expenses calculation part
            if (earning.value > costOfExpenses) {
                totalExpenses.innerText = costOfExpenses;
                remainBalance.innerText = earning.value - totalExpenses.innerText;
            } else {
                alert('You expenses has surpassed the earning of this month!!!');
                break;
            }
        } else {
            alert('You must enter a value that is positive and greater than 0');
            break;
        }
    }

    //* empty the input fields */
    for (let key of expenses) {
        key.value = '';
        earning.value = '';
    }
});

savingAmountBtn.addEventListener('click', function () {
    if (savingPercent.value > 0) {
        savingAmount.innerText = parseFloat(earning.value) * parseFloat(savingPercent.value) / 100;
        if (remainBalance.innerText > savingAmount.innerText && remainBalance.innerText > 0) {
            lastBalance.innerText = parseFloat(remainBalance.innerText) - parseFloat(savingAmount.innerText);
        } else {
            lastBalance.innerText = '0';
        }
    } else if (savingPercent.value = '') {
        lastBalance.innerText = '0';
    }
    savingPercent.value = '';
});