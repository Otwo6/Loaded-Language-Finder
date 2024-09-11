// ELEMENTS
const textIDElement = document.getElementById("inputText")
const fixedIDElement = document.getElementById("fixedText")
const checkButton = document.getElementById("checkButton")


let fixedPassage = "";
var newPassage;

let rows = [];

let bias = 0;

let currentWordChecking = 0; // Word that is currently being checked

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
    const regex = /\w+|[.,;!?()]/g;
    split = passage.match(regex);
}

function checkText(passage) {
    bias = 0;
    fixedPassage = "";
    splitText(passage);
    
    currentWordChecking = 0;
    while(currentWordChecking < split.length) {
        console.log("Checking: " + split[currentWordChecking]);
        checkCSV(currentWordChecking);
        currentWordChecking++;
    }
    fixedIDElement.value = fixedPassage;
    console.log("Bias words: " + bias);
}

function checkCSV(splitNumber) {
    for(let i = 0; i < rows.length; i++) {
        const columns = rows[i].split(','); // Split each row into columns
        
        let csvWord = columns[0].toLowerCase().split(' ');
        if(csvWord.length > 1)  // Seperate phrases and words in csv file
        {
            // Is a phrase

            let hasPhrase = true;

            for(let i = 0; i < csvWord.length; i++)
                {
                    if(csvWord[i].toLowerCase() == split[splitNumber + i].toLowerCase())
                    {
                    }
                    else
                    {
                        hasPhrase = false;
                        break;
                    }
                }

            if(hasPhrase)
            {
                currentWordChecking = currentWordChecking + csvWord.length - 1;
                console.log("Contains phrase: " + columns[0].toLowerCase());

                let correctPhrase = columns[1].toLowerCase().split(' ');
                for(let i = 0; i < csvWord.length; i++) {
                    split[splitNumber + i] = "";
                }
                split[splitNumber] = columns[1].replace(/(\r\n|\n|\r)/gm,"");
            }
        }
        else
        {
            // Is a word
            
            if (columns[0].toLowerCase() === split[splitNumber].toLowerCase()) { // Check if the word is in column A (index 0)
                console.log("Word Split: " + split[splitNumber]);
                split[splitNumber] = columns[1].replace(/(\r\n|\n|\r)/gm,"");
                bias++;
                break;
            }   
        }
    }
    fixedPassage = fixedPassage.concat(split[splitNumber] + " ");
}

loadCSV();