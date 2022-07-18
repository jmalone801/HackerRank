// Its base and height are both equal to . It is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .

function staircase(n) {
    
    for(let i = 0; i < n; i++){
    let row = ""
        for(let j = 0; j < n; j++){
            if(i + j > n - 2) {
                row += "#"
            }
            else {
                row += " "
            }
        }
    console.log(row)
    }
}