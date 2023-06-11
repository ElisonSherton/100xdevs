/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    // console.log(s);
    let trimmed_string = s.trim();
    console.log(trimmed_string);
    let last_word = trimmed_string.split(" ")
    
    // console.log(last_word)
    last_word = last_word[last_word.length - 1]
    last_word = last_word.trim();
    // console.log(last_word)
    return last_word.length;
};