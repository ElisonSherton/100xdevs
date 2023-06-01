// https://leetcode.com/problems/reverse-integer/submissions/961816504/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = -1;
    if (x >= 0){
        sign = 1;
    }
    else{
        sign = -1;
        x = sign * x;
    }

    let number = x;
    let final_number = 0;

    while (number > 0){
        last_dig = number % 10;
        number = Math.floor(number / 10);
        final_number = final_number * 10 + last_dig
    }
    
    final_number = final_number * sign;

    lower_thresh = -1 * Math.pow(2, 31)
    upper_thresh = Math.pow(2, 31) - 1

    if ((final_number < lower_thresh) || (final_number > upper_thresh)){
        return 0;
    }
    return final_number;
};