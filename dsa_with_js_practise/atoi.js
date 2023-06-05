// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    // Remove the leading and trailing whitespaces
    s = s.trim();
    let element_pointer = 0;
    let element = "";
    let final_result = 1;
    let final_number = 0;
    let count_of_sign_elements = 0;
    let sign_element_position = 0;

    // Keep reading until the first number is encountered
    while (element_pointer < s.length){
        element = s.substring(element_pointer, element_pointer + 1);
        if (!isNaN(element)) {
            break;
        }
        if (element == "-"){
            final_result = -1 * final_result;
            count_of_sign_elements = count_of_sign_elements + 1;
            sign_element_position = element_pointer;
        }
        else if (element == "+"){
            count_of_sign_elements = count_of_sign_elements + 1;
            sign_element_position = element_pointer;
        }
        element_pointer = element_pointer + 1;
    }

    // If the element preceding the number is anything other than whitespace or + or -, return 0
    let prev_char = s.substring(element_pointer - 1, element_pointer)
    if ((element_pointer > 0) && !(prev_char === "-" || prev_char === "+")) {
        return 0;
    };

    // If there are non numeric characters between sign and first number, return 0
    if (count_of_sign_elements >= 1){
        if (element_pointer - sign_element_position > 1) {
            return 0;
        };
    };
    console.log(sign_element_position, element_pointer);


    // If more than two sign elements are encountered then return false
    if (count_of_sign_elements > 1) {
        return 0;
    }

    // Read the number in i.e. break if you reach end of the number or encounter a non-number character
    while (element_pointer < s.length) {
        element = s.substring(element_pointer, element_pointer + 1);
        if (isNaN(element) || (element === " ")){
            break;
        }
        final_number = final_number * 10 + Number(element);
        element_pointer = element_pointer + 1;
    }

    console.log(final_number);

    // Convert the number to an integer
    let low_lim = -1 * Math.pow(2, 31);
    let upper_lim = Math.pow(2, 31) - 1;

    // Apply the sign before checking for the limits
    final_number = final_result * final_number

    // Check the limits and clamp the number
    if (final_number < low_lim){
        final_number = low_lim;
    }
    else if (final_number > upper_lim){
        final_number = upper_lim;
    }

    return final_number;

};