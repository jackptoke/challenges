function atomic(str){
    // let nums = [];
    let sum = 0;
    let prod = 1;
    let n;
    for(let i = 0; i< str.length; i++){
        n = parseInt(str[i]);
        sum += n;
        prod *= n;
    }
    // console.log(nums);
    return sum === prod;

}

console.log(atomic("1234"));