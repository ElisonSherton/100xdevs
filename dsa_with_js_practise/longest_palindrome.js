// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */

//  str.slice -> Gives slice of the substring between l to r
// -1, -2, ... -> Indexing array from backwards
//  slice also works with one index and captures upto the end of the stringf
//  str.substring -> Gives substring between l to r
var longestPalindrome = function(s) {
    let pal_map = [];
    let palin = s.substring(0, 1);

    // Check for a palindrome of odd length 
    for (let i = 1; i < s.length - 1; i = i + 1) {
        let check_len = Math.min(i, s.length - i) + 1;
        palin = s.substring(i, i + 1);
        // console.log(check_len, palin);

        // Check for same letters on either side of the letter
        for (let j = 1; j < check_len; j = j + 1) {
            let left = i - j;
            let right = i + j; 
            // console.log('Odd Map Logic', s.substring(left, left + 1), s.substring(right, right + 1));

            if (s.substring(left, left + 1) === s.substring(right, right + 1)){
                palin = s.substring(left, right + 1)
                // console.log("Matched in odd map logic for count ${j}")
                continue;
            }
            else {
                break;
            }
        }

        pal_map.push(palin);
        console.log(`In Odd portion| Iteration: ${i} | Palindrome Length: ${palin.length}`);
    };

    let longest_odd_palin = s.substring(0, 1);
    let longest = 1;

    for (let cnt = 0; cnt < pal_map.length; cnt = cnt + 1) {
        if (pal_map[cnt].length > longest) {
            longest = pal_map[cnt].length;
            longest_odd_palin = pal_map[cnt];
        }
    };


    // Check for longest even palindromic substring
    let pal_even_map = [];

    for (let i = 0; i < s.length; i = i + 1) {
        let check_len = Math.min(i, s.length - i) + 1;
        // let palin = s.substring(i, i + 1);
        
        
        let left_starter = s.substring(i, i + 1);
        let right_starter =  s.substring(i + 1, i + 2);
        if (left_starter === right_starter){
            palin = s.substring(i, i + 2);
            // Check for same word on either side of the letter
            for (let j = 1; j < check_len; j = j + 1) {
                let left = i - j;
                let right = i + 1 + j; 
                // console.log(i, j, check_len, "|", left, right, s.substring(left, left + 1), s.substring(right, right + 1));
                if (s.substring(left, left + 1) === s.substring(right, right + 1)){
                    palin = s.substring(left, right + 1);
                    // console.log("Inside check", palin)
                    continue;
                }
                else {
                    break;
                }
            }
        };
        

        // palin = s.substring(i, i + 1);
        pal_even_map.push(palin);
        console.log(`In Even portion| Iteration: ${i} | Palindrome Length: ${palin.length}`);
    }

    let longest_even_palin = s.substring(0, 1);
    longest = 1;

    for (let cnt = 0; cnt < pal_even_map.length; cnt = cnt + 1) {
        if (pal_even_map[cnt].length > longest) {
            longest = pal_even_map[cnt].length;
            longest_even_palin = pal_even_map[cnt];
        }
    };


    // console.log(longest_even_palin, longest_odd_palin)
    if (longest_odd_palin.length > longest_even_palin.length){
        return longest_odd_palin;
    }
    else {
        return longest_even_palin;
    }
    
};