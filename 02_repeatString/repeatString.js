const repeatString = function(word,times) {
    const joinArray = [];
    if(times < 0 ){
        return 'ERROR'
    }else{
        for(let i =  0; i< times; i++){
            joinArray.push(word);
        }
        return joinArray.join("");
    }
};

// Do not edit below this line
module.exports = repeatString;
