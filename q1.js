// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array) {
    let total = 0; 
 for (let i =0; i < array.length; i++ ) { //array length is for going in each number
    total += array[i]; // for adding each element
 }
return total;
}
// Test for sum array
let testArray = [1, 2, 3, 4, 5]; // 15

// TODO: display the sum of the array in the console
console.log(sumArray(testArray));