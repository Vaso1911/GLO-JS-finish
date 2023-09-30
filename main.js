// const apiKey = '0fef17090b224d188ae475ece1fc90fd'; 

// const currencySelect = document.getElementById('currency');
// const amountInput = document.getElementById('amount');
// const resultDiv = document.getElementById('result');
// const btn = document.getElementById('convertBtn')
// btn.addEventListener('click', () => {
//     const selectedCurrency = currencySelect.value;
//     const amount = parseFloat(amountInput.value);
//     if (isNaN(amount) || amount <= 0) {
//         resultDiv.textContent = 'Введите корректное количество валюты.';
//         return;
//     }

//     const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             if (data && data.rates && data.rates.RUB && data.rates[selectedCurrency]) {
//                 const rubExchangeRate = data.rates.RUB;
//                 const selectedCurrencyExchangeRate = data.rates[selectedCurrency];
//                 const convertedAmount = ((amount / selectedCurrencyExchangeRate) * rubExchangeRate).toFixed(2);
//                 resultDiv.textContent = `${amount} ${selectedCurrency} равно примерно ${convertedAmount} рублей.`;
//             } else {
//                 resultDiv.textContent = 'Невозможно получить курс обмена. Попробуйте позже.';
//             }
//         })
//         .catch(error => {
//             console.error('Произошла ошибка:', error);
//             resultDiv.textContent = 'Ошибка при получении данных. Попробуйте позже.';
//         });
// });


const apiKey = '0fef17090b224d188ae475ece1fc90fd'; 

const currencySelect = document.getElementById('currency');
const amountInput = document.getElementById('amount');
const rubAmountInput = document.getElementById('rubAmount');
const resultDiv = document.getElementById('result');
const resultDivRub = document.getElementById('resultRub');
const rubBtn = document.getElementById('convertRubBtn');
const btn = document.getElementById('convertBtn')
btn.addEventListener('click', () => {
    const selectedCurrency = currencySelect.value;
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Введите корректное количество валюты.';
        return;
    }

    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.rates && data.rates.RUB && data.rates[selectedCurrency]) {
                const rubExchangeRate = data.rates.RUB;
                const selectedCurrencyExchangeRate = data.rates[selectedCurrency];
                const convertedAmount = ((amount / selectedCurrencyExchangeRate) * rubExchangeRate).toFixed(2);
                resultDiv.textContent = `${amount} ${selectedCurrency} равно примерно ${convertedAmount} рублей.`;
            } else {
                resultDiv.textContent = 'Невозможно получить курс обмена. Попробуйте позже.';
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            resultDiv.textContent = 'Ошибка при получении данных. Попробуйте позже.';
        });
});

rubBtn.addEventListener('click', () => {
    const selectedCurrency = currencySelect.value;
    const rubAmount = parseFloat(rubAmountInput.value);
    if (isNaN(rubAmount) || rubAmount <= 0) {
        resultDiv.textContent = 'Введите корректное количество рублей.';
        return;
    }

    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.rates && data.rates.RUB && data.rates[selectedCurrency]) {
                const rubExchangeRate = data.rates.RUB;
                const selectedCurrencyExchangeRate = data.rates[selectedCurrency];
                const convertedAmount = ((rubAmount / rubExchangeRate) * selectedCurrencyExchangeRate).toFixed(2);
                resultDivRub.textContent = `${rubAmount} рублей равно примерно ${convertedAmount} ${selectedCurrency}.`;
            } else {
                resultDivRub.textContent = 'Невозможно получить курс обмена. Попробуйте позже.';
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            resultDivRub.textContent = 'Ошибка при получении данных. Попробуйте позже.';
        });
});
