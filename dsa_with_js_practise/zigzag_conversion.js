// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let result = [];

    for(let i = 0; i < numRows; i = i + 1){
        let step1 = 2 * (numRows - 1) - 2 * i;
        let step2 = 2 * i;
        
        if ((step1 === 0) && (step2 === 0)){
            result = s;
            break;
        }

        let counter = i;
        while (counter < s.length){
            
            if (step1 !== 0){
                result = `${result}${s.substring(counter, counter + 1)}`;
                counter = counter + step1;
                // console.log(i, counter, result);
            }

            if (step2 !== 0){
                result = `${result}${s.substring(counter, counter + 1)}`;
                counter = counter + step2;
                // console.log(i, counter, result);
            }
        }

        // console.log("\n");
    }

    return result;
};