// ELEMENTS
const textIDElement = document.getElementById("inputText")
const checkButton = document.getElementById("checkButton")

var splitPassage;

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
    splitText(passage);
    
    for(let i = 0; i < split.length; i++) {
        checkCSV(split[i])
    }
}

function checkCSV(word) {
    for(let i = 0; i < rows.length; i++) {
        const columns = rows[i].split(','); // Split each row into columns
        if (columns[0].toLowerCase() === word.toLowerCase()) { // Check if the word is in column A (index 0)
            console.log("Word Split: " + word);
            break;
        }    
    }
}

loadCSV();