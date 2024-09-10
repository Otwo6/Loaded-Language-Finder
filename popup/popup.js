// ELEMENTS
const textIDElement = document.getElementById("inputText")
const fixedIDElement = document.getElementById("fixedText")
const checkButton = document.getElementById("checkButton")


let fixedPassage = "";
var newPassage;

let rows = [];

function loadCSV() {
    fetch(chrome.runtime.getURL('data.csv'))
    .then(response => response.text())
    .then(text => {
        rows = text.trim().split('\n');
    })
    .catch(error=> console.error('Error loading CSV: ', error));
}

checkButton.onclick = function() {
    checkText(textIDElement.value);   
}

function splitText(passage) {
    split = passage.split(' ');
}

function checkText(passage) {
    fixedPassage = "";
    splitText(passage);
    
    for(let i = 0; i < split.length; i++) {
        checkCSV(split[i]);
    }
    fixedIDElement.value = fixedPassage;
}

function checkCSV(word) {
    for(let i = 0; i < rows.length; i++) {
        const columns = rows[i].split(','); // Split each row into columns
        if (columns[0].toLowerCase() === word.toLowerCase()) { // Check if the word is in column A (index 0)
            console.log("Word Split: " + word);
            word = columns[1];
            break;
        }   
    }
    fixedPassage = fixedPassage.concat(word + " ");
}

loadCSV();