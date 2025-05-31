// ELEMENTS
const textIDElement = document.getElementById("inputText")
const fixedIDElement = document.getElementById("fixedText")
const checkButton = document.getElementById("checkButton")
const outerCircle = document.querySelector(".outer-circle")
const needle = document.querySelector(".needle")
const label = document.querySelector(".label span")
const radioButton = document.querySelector("input[name='level']")
const percentageElement = document.querySelector(".percentageValue")

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

    // Sets Fixed Text Section
    fixedIDElement.value = data.revisedText;

    // Percentage Gague
    const percent = data.percentage;
    const rotation = (percent / 100) * 200 - 100;
    needle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    percentageElement.textContent  = `${percent}%`;

    // Word List
    const wordListElement = document.getElementById("wordList");
    wordListElement.innerHTML = ""; // Clear previous content

    data.wordList.forEach(({ word, description }) => {
      const wordCard = document.createElement("div");
      wordCard.classList.add("word-card");

      // Use 'title' to show description on hover
      wordCard.innerHTML = `
        <span class="loaded-word" title="${description}">${word}</span>
      `;

      wordListElement.appendChild(wordCard);
    });
  } catch (error) {
    fixedIDElement.value = "Error contacting server.";
    console.error("Failed to analyze:", error);
  }
};
