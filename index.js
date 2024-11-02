const input = document.getElementById('fahrenheit');
const button = document.getElementById('btn');

button.addEventListener('click', function () {
  let fahrenheit = input.value;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  const result = document.createElement('p');
  result.textContent = `${fahrenheit}°F is equivalent to ${celsius.toFixed(
    2
  )}°C`;
  document.body.appendChild(result);
});
