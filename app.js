const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const charLeft = document.getElementById('char-left');

textInput.addEventListener('input', function() {
    const length = textInput.value.length;
    
    charCount.textContent = length;
    charLeft.textContent = 99 - length;
});