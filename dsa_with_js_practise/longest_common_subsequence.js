// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest_subsequence = "";
    let check_set = new Set();
    let check_element = "";
    let subsequences = [];

    for(let i = 0; i < s.length; i = i + 1){

        longest_subsequence = "";
        check_set = new Set();

        for(let j = i; j < (s.length + 1); j = j + 1){
            
            check_element = s.substring(j, j + 1);
            console.log(check_element);
            
            if (check_set.has(check_element) || (j == s.length)){
                subsequences.push(s.substring(i, j));
                break;
            }  
            else {
                longest_subsequence = `${longest_subsequence}${check_element}`;
                check_set.add(check_element);
            }

            // console.log(i, j, longest_subsequence)
        }

        // console.log(i, longest_subsequence, check_set)
        
    };

    // console.log("Subsequences", subsequences);

    let longest_length = 0;
    for(let i = 0; i < subsequences.length; i = i + 1){
        if (subsequences[i].length > longest_length) {
            longest_length = subsequences[i].length;
            // console.log(subsequences[i], subsequences[i].length);
        }
    };

    return longest_length;

};


// Slightly more optimized solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let longest_subsequence = "";
    let check_set = new Map();
    let check_element = "";
    let subsequences = [];
    let curr = 0;
    let break_while = true;

    while (break_while){


        let check_set = new Map();
        
        for (let start = curr; start < (s.length + 1); start++){
            let curr_letter = s.substring(start, start + 1);
            
            // If a repeated character is encountered break there
            // console.log(start, check_set, curr_letter)
            if (check_set.has(curr_letter)) {
                // console.log(check_set);
                subsequences.push(s.substring(curr, start));
                curr = check_set.get(curr_letter) + 1;
                break;
            }
            else {
                check_set.set(curr_letter, start);
            }

            // In case we reach end of the string
            if (start == s.length) {
                subsequences.push(s.substring(curr, start));
                curr = check_set.get(curr_letter) + 1;
                break_while = false;
            } 
        }

    }

    // console.log(subsequences)

    for (let i = 0; i < subsequences.length; i++){
        if (longest_subsequence.length < subsequences[i].length){
            longest_subsequence = subsequences[i];
        }
    }

    return longest_subsequence.length;

};