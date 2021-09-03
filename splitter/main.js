const $bill = document.getElementById('bill');
const $tipRow = document.getElementById('tipRow');
const $tipAmtPer = document.getElementById('tipAmtPer');
const $totalAmtPer = document.getElementById('totalAmtPer');
const $numPeople = document.getElementById('numPeople');
const $reset = document.getElementById('reset');
const $custom = document.getElementById('custom');

$tipRow.addEventListener('click', function (event) {
  if ($numPeople.value <= 1) {
    const tipAmt = parseInt($bill.value * `0.${event.target.value.slice(0, 2)}`);
    $tipAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tipAmt);
    const totalAmt = parseInt($bill.value) + parseInt(tipAmt);
    $totalAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmt);
  } else {
    const tipAmt = parseInt($bill.value * `0.${event.target.value.slice(0, 2)}`);
    $tipAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tipAmt / $numPeople.value);
    const totalAmt = parseInt($bill.value) + parseInt(tipAmt);
    $totalAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmt / $numPeople.value);
  }
});

$custom.addEventListener('change', function (event) {
  if ($numPeople.value <= 1) {
    const tipAmt = parseInt($bill.value * `0.${event.target.value.slice(0, 2)}`);
    $tipAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tipAmt);
    const totalAmt = parseInt($bill.value) + parseInt(tipAmt);
    $totalAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmt);
  } else {
    const tipAmt = parseInt($bill.value * `0.${event.target.value.slice(0, 2)}`);
    $tipAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tipAmt / $numPeople.value);
    const totalAmt = parseInt($bill.value) + parseInt(tipAmt);
    $totalAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmt / $numPeople.value);
  }

});

$reset.addEventListener('click', function (event) {
  $tipAmtPer.textContent = '$0.00';
  $totalAmtPer.textContent = '$0.00';
  $bill.value = '0.00';
  $numPeople.value = '1';
  $custom.value = 'Custom';
});
