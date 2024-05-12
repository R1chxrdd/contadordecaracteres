const textInput = document.getElementById('text-input');
const characterCount = document.getElementById('character-count');

textInput.addEventListener('input', () => {
  const characters = textInput.value.length;
  characterCount.textContent = `${characters} Caracteres`;
});
document.getElementById('clear-text').addEventListener('click', function() {
  document.getElementById('text-input').value = '';
});
