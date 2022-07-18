// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positive += 1
        }
        else if(arr[i] < 0) {
            negative += 1
        }
        else {
            zero += 1
        }
    }
    let pos = positive / arr.length
    let neg = negative / arr.length
    let zer = zero / arr.length
    
    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(zer.toFixed(6))

}