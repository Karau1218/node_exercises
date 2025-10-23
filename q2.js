// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        }
            
    }       
return max
}


// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

// TODO: display the largest number in the array in the console
console.log(findLargest(testArray2));