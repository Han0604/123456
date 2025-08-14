const input = document.getElementById("userInput");
const button = document.getElementById("copyBtn");
const output = document.getElementById("outputText");

button.addEventListener("click", () => {
  const text = input.value;
  output.textContent = text || "(No text entered)";
});
