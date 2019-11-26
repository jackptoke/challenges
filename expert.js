let number = 9876;

function maxSubMin(number){

    let strNumber = number.toString();
    //Split the string into an array of character
    let arrNum = strNumber.split("");
    let reg = /,/gi;
    //sort the array => convert it into a string => remove the 'commas' => then convert it into number
    let min = Number(arrNum.sort().toString().replace(reg, ''));
    let max = Number(arrNum.reverse().toString().replace(reg, ''));
    let answer = max - min;
    console.log(`Input: ${number} Max: ${max} Min: ${min} Difference: ${answer}`);
    //return the difference of the two numbers
    return answer;
}

let count = 0;
while(true){
    count += 1;
    result = maxSubMin(number);
    //if the result is the same as the output
    //you are done
    if(result === number){
        break;
    }else{
        //else the result becomes the next input
        number = result;
    }
}

console.log("It took " + count + " times to get the result.");