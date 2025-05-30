// ELEMENTS
const textIDElement = document.getElementById("inputText")
const fixedIDElement = document.getElementById("fixedText")
const checkButton = document.getElementById("checkButton")

checkButton.onclick = async function() {
  const checkText = textIDElement.value;

  fixedIDElement.value = "Loading...";

  try {
    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: checkText })
    });

    const data = await response.json();
    fixedIDElement.value = data.sentiment;
  } catch (error) {
    fixedIDElement.value = "Error contacting server.";
    console.error("Failed to analyze:", error);
  }
};
