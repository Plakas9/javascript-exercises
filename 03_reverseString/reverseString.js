const reverseString = function(word) {

    let arrayLetter = [];
    let wordLength = word.length;
    for(let i = 0; i < word.length; i++){
        arrayLetter.push(word.charAt(wordLength-1));
        wordLength = wordLength-1;
        
    }
    return arrayLetter.join("");
    

};

// Do not edit below this line
module.exports = reverseString;
