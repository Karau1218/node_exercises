/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    let word = textInput.length -1 // check from last character

    for ( let i = 0; i < textInput.length / 2; i++) {
        if (textInput[i] !== textInput[word]) { // compare char. from both sides
            return false;
        }
        word--; // start from the end moving backwards
    }
    return true; // if it matches it's a palindrome

}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console
console.log(checkPalindrome(testString));
console.log(checkPalindrome(testString2));