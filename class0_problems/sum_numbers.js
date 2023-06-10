var sum_of_numbers = function(start, end) {
    let sum_of_nums = 0;
    for(let i = start; i < end; i++) {
        sum_of_nums += i;
    }
    return sum_of_nums;
};

let start = 1;
let end = 100;
console.log(`Sum of numbers from ${start} to ${end} is ${sum_of_numbers(start, end)}`)