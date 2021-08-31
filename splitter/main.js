const $bill = document.getElementById('bill');
const $tipRow = document.getElementById('tipRow');
const $tipAmtPer = document.getElementById('tipAmtPer');
// const $totalAmtPer = document.getElementById('totalAmtPer');

$tipRow.addEventListener('click', function (event) {
  if (parseInt($bill.value) <= 0) {
    $tipAmtPer.textContent = 'Bill Amount Required';
  } else {
    $tipAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format($bill.value * `0.${event.target.value}`);

  }
});
