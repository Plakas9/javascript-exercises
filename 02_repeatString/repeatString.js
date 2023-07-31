const repeatString = function(word,times) {
    const joinArray = [];
    for(let i =  0; i< times; i++){
        joinArray.push(word);
    }
    return joinArray.join("")   ;
};

// Do not edit below this line
module.exports = repeatString;
