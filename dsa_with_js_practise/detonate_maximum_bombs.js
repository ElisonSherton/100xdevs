// https://leetcode.com/problems/detonate-the-maximum-bombs/

/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let max_detonations = 1;

    for(let i = 0; i < bombs.length; i++){
        // Set has linear search time, hence maintain a set for checking membership
        // Set can't be indexed and we want a queue datastructure for this, hence keep a list to track exploded bombs as well
        let exploded_bombs = [i];
        let exploded_bombs_to_search = new Set();
        exploded_bombs_to_search.add(i);
        let queue_pointer = 0;
        
        // Start with ith bomb and check for all bombs in it's vicinity, then in the 
        // vicinity of the neighbours of ith bomb which would explode and so on...
        while (queue_pointer < exploded_bombs.length){
            for(let j = 0; j < bombs.length; j++){
                if(j !== i){
                    
                    let will_explode = checkLocality(bombs[exploded_bombs[queue_pointer]], bombs[j]);

                    if (will_explode) {
                        if (!exploded_bombs_to_search.has(j)){
                            exploded_bombs.push(j);
                            exploded_bombs_to_search.add(j);
                        };
                    };
                };
            };
            queue_pointer = queue_pointer + 1;
        };

        // If everything has exploded so far, return and break the for loop right there
        if (exploded_bombs.length === bombs.length) {
            return bombs.length;
        }
        // Update the max explosions seen so far...
        else if (exploded_bombs.length > max_detonations) {
            max_detonations = exploded_bombs.length;
        }
    }
    return max_detonations;
};

var checkLocality = function(detonated_bomb, other_bomb){
    let lhs = Math.pow(other_bomb[0] - detonated_bomb[0], 2) + Math.pow(other_bomb[1] - detonated_bomb[1], 2);
    let rhs = detonated_bomb[2] * detonated_bomb[2]
    // Check membership for circle i.e. (x-x1)sq + (y-y1)sq <= rsq --> c1 lies within vicinity of c
    if (lhs <= rhs) {
        return true;
    };
    return false;
};

let bombs = [[2,1,3],[6,1,4]];
console.log(bombs.length);
console.log(maximumDetonation(bombs))