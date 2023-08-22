const inputText = document.getElementById('inputText');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    
    // Word count
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    wordCount.textContent = words.length;

    // Sentence count
    const sentences = text.split(/[.!?]/).filter(sentence => sentence !== '');
    sentenceCount.textContent = sentences.length;
    // character count
    characterCount.textContent = text.length;
});

/*const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const characterCount = document.getElementById('character-count');
const sentenceCount = document.getElementById('sentence-count');

textInput.addEventListener('input', updateCounts);

function updateCounts() {
    const text = textInput.value;

    const words = text.trim().split(/\s+/).filter(word => word !== '');
    wordCount.textContent = words.length;

    characterCount.textContent = text.length;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
    sentenceCount.textContent = sentences.length;
}*/