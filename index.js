const currency1 = document.getElementById('currency1');
const currency2 = document.getElementById('currency2');
const input1 = document.getElementById('number-change');
const input2 = document.getElementById('result');
const p = document.getElementById('p');

updateCurrency();
async function updateCurrency(){
const response = await fetch(`https://v6.exchangerate-api.com/v6/a15d05895f99d3670d7e4ca8/latest/${currency1.value}`);

const data = await response.json();
const rate = data.conversion_rates[currency2.value.toUpperCase()];

input2.value = (input1.value * rate).toFixed(2);
p.innerText = `1 ${currency1.value.toUpperCase()} = ${rate.toFixed(2)} ${currency2.value.toUpperCase()}`

  
}

currency1.addEventListener('change', updateCurrency)
currency2.addEventListener('change', updateCurrency)
input1.addEventListener('input', updateCurrency)