const billAmountElement = document.getElementById('bill-amount');
const tipPercentageElement = document.getElementById('tip-percentage');
const totalElement = document.getElementById('total');
const calculateButton = document.getElementById('calculate')

billAmountElement.value = "";
tipPercentageElement.value = "";
totalElement.textContent = 0;

calculateButton.addEventListener('click', displayTotal)

function displayTotal() {
    totalElement.textContent = calculateTotal(Number(billAmountElement.value), Number(tipPercentageElement.value))
}

function calculateTotal(billAmount, tipPercentage) {
    if (billAmount > 0) {
        return (billAmount + (billAmount * (tipPercentage / 100)))
    }
    return billAmount
}