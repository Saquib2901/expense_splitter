const totalInput = document.getElementById('total');
const peopleInput = document.getElementById('people');
const result = document.getElementById('result');
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');

calculateBtn.addEventListener('click', () => {
  const total = parseFloat(totalInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(total) || isNaN(people) || total <= 0 || people <= 0) {
    result.textContent = "⚠️ Please enter valid numbers.";
    return;
  }

  const perPerson = (total / people).toFixed(2);
  result.textContent = `Each person should pay ₹${perPerson}`;
});

resetBtn.addEventListener('click', () => {
  totalInput.value = '';
  peopleInput.value = '';
  result.textContent = '';
});
