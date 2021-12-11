function isPalindrome(word) {
  let letters = word.split('')
  for (let i = 0; i < letters.length; i ++ ) {
    if (letters[i] !== letters[letters.length -(i+1)]) {
      return false  
    }
  }
  return true
}


  // Write your algorithm here
  
  //IN MY OWN WORDS:
  // isPalindrome function accepts a string (one word) as an argument;
  //  and returns true if that word/string is a palindrome (reads same forward/backward).
  // Return false if the word/string isn't a palindrome. 
  //  The first letter (string[0]) should be the same as the last (string[string.length-1]); 
  //  second letter should be same as second to last, etc. 
  // String is input; output is boolean (true or false)

/* 
  Add your pseudocode here
*/
// declare function isPalindrome with argument word
    // convert letters of word into array using split
    // for loop using counter i >>> start counter at 0, counter less than word length, counter increment up 1 each time
    //    if word[i] === word[word.length-(i+1)], 
    //      return false
    // return true
    //
    //  e.g. compare first item of array to last, if not same return false, else move on in loop
    // compare second item of array to second to last, third item to third to last, etc.
    // 

/*
  Add written explanation of your solution here
*/
// To determine if it's the same reading front and back, need to compare individual letters. This means we need to be able
// to evaluate letters as individuals and as pairs. Need to split the word into individual letters. 
// Now that it's an array, we can grab individual letters by index. Array length will vary from 
// one word to the next, so using loop with a counter that runs until the length of the word is good way to make sure all letters are compared. 
// Condition only needs to be met for function to return false, so function should look for even just one instance of false, but otherwise return true.
// Some redundancy, since first will be compared to last, and later on last will be compared to first again. Maybe counter could be stopped at length/2? 
// This might make code faster, but may make it harder to read and slower to write. Unsure!

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // ALEX TEXT CASE1
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"))
  // ALEX TEST CASE 2
  console.log("Expecting: false")
  console.log("=>", isPalindrome("metaphor"))



  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
