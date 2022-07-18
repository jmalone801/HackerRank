// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let sortedArr = arr.sort()
    let min = 0
    let max = 0
    
    for(let i = 0; i < sortedArr.length - 1; i++){
        min = min + sortedArr[i]
    }
    for(let j = 1; j < sortedArr.length; j++){
        max = max + sortedArr[j]
    }
    console.log(min + " " + max)

}
miniMaxSum([1,2,3,4,5])
