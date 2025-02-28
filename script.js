document.getElementById("display-btn").addEventListener("click", function () {
    // Get the input text
    let inputText = document.getElementById("text-input").value;
    
    // Get selected color
    let selectedColor = document.getElementById("color-select").value;
    
    // Get selected font
    let selectedFont = document.getElementById("font-select").value;
    
    // Get the output text element
    let outputText = document.getElementById("output-text");

    // Display the input text with selected color and font
    outputText.style.color = selectedColor;
    outputText.style.fontFamily = selectedFont;
    outputText.textContent = inputText;
});
