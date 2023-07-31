const sumAll = function(number1,number2) {
    let n1 = number1; 
    let n2= number2;
    let total =0;
    if(number1>number2){
        n2 = number1; // n1 will always be the smaller number
        n1=number2;
    }
    if((n1 || n2 )<0){
        return "ERROR"
    }else{
        
        for(let i = n1; i<n2+1; i++){
            total = total + i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
