// https://leetcode.com/problems/missing-number/submissions/968645821/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let all_numbers = new Set([]);
    
    for (let i = 0; i <= nums.length; i++){
        all_numbers.add(i);
    };

    for (let i = 0; i < nums.length; i++){
        all_numbers.delete(nums[i])
    };

    return Array.from(all_numbers)[0];

};