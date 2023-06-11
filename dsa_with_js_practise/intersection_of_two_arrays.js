// https://leetcode.com/problems/intersection-of-two-arrays/submissions/968635438/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);

    let intersection = new Set([]);
    s1.forEach(element => {
        if (s2.has(element)){
            intersection.add(element);
        };
    });

    return Array.from(intersection);
};