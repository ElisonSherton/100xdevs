// Two sum problem on leetcode: https://leetcode.com/problems/two-sum/solutions/3000141/javascript-w-map-time-space-o-n/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity of O(n2)
var twoSum = function(nums, target) {
    let num_len = nums.length;
    for(let i = 0; i < num_len; i++){
        for(let j = i + 1; j < num_len; j++){
            if (nums[i] + nums[j] === target){
                return [i, j];
            } 
        };
    };
    return;
};

// Time Complexity of O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let num_len = nums.length;
    // Create a map to store the current progress
    let complement_set = new Map();

    for (let i = 0; i < num_len; i = i + 1){
        
        complement_number = target - nums[i]
        
        if (complement_set.has(complement_number)) {
            return [i, complement_set.get(complement_number)]
        }

        complement_set.set(nums[i], i)
    }
};