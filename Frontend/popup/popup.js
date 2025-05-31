// ELEMENTS
const textIDElement = document.getElementById("inputText")
const fixedIDElement = document.getElementById("fixedText")
const checkButton = document.getElementById("checkButton")
const outerCircle = document.querySelector(".outer-circle")
const needle = document.querySelector(".needle")
const label = document.querySelector(".label span")
const radioButton = document.querySelector("input[name='level']")

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

    const percent = data.percentage;
    const rotation = (percent / 100) * 200 - 100;
    needle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  } catch (error) {
    fixedIDElement.value = "Error contacting server.";
    console.error("Failed to analyze:", error);
  }
};
