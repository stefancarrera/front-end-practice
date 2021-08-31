const $bill = document.getElementById('bill');
const $tipRow = document.getElementById('tipRow');
const $tipAmtPer = document.getElementById('tipAmtPer');
const $totalAmtPer = document.getElementById('totalAmtPer');
const $numPeople = document.getElementById('numPeople');

$tipRow.addEventListener('click', function (event) {
  if (parseInt($bill.value) <= 0) {
    $tipAmtPer.textContent = 'Bill Amount Required';
  } else {
    if ($numPeople.value <= 1) {
      const tipAmt = parseInt($bill.value * `0.${event.target.value}`);
      $tipAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tipAmt);
      console.log('tip', tipAmt);
      const totalAmt = parseInt($bill.value) + parseInt(tipAmt);
      console.log('total', totalAmt);
      $totalAmtPer.textContent = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmt);
    }
  }
});
