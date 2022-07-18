// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    let max = 0
    let count = 0
    
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > max ){
            max = candles[i]
        }
    }
    for(let j = 0; j < candles.length; j++){
        if(candles[j] === max){
            count++
        }
    }
    // return count
    console.log(count)
}
birthdayCakeCandles([3,2,1,3])
// Expected: 2