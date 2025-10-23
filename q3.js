// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
        let newArray = []; // for making an empty array for the new elements

    for ( let i= 0; i <array.length; i++) {
        // check if element is not in the new array
        if (!newArray.includes(array[i])) {
            // if not in array, it gets added
            newArray.push(array[i]);
        }

    }
return newArray; // new array without duplicates
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console
console.log(removeDuplicates(testArray3));