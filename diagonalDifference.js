// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    return Math.abs(leftSum - rightSum);
}
