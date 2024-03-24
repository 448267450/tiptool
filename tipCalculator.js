var billTotal = document.getElementById('inputBill3');
var tipAmount = document.getElementById('disabledTipAmount');
var tipPercentageInput = document.getElementById('customRange3');
var billTotalWithTip = document.getElementById('disabledBillWithTip');

function updateTipAmount(){
    var tipPercentage = parseFloat(tipPercentageInput.value);
    var billValue = parseFloat(billTotal.value);

    var tipValue = billValue * tipPercentage;
    tipAmount.value = tipValue.toFixed(2);

    billTotalWithTip.value = (billValue + tipValue).toFixed(2);
}

function updateTipPercentage(value) {
    var tipPercentageInput = document.getElementById('disabledTextInput');
    tipPercentageInput.value = (value * 100).toFixed(2) + '%';
    updateTipAmount();
}

billTotal.addEventListener('input', function(){
    updateTipAmount();
});
