// https://www.tutorialstonight.com/js/javascript-star-pattern#hollow-pyramid-star-pattern

function right_pascal(n) {
    let mid_point = Math.floor(n / 2);
    let pattern = ""


    // Top half
    for(let i = 0; i < mid_point; i++){
        pattern = pattern + "*".repeat(i + 1) + "\n"
    }

    // Middle Line
    pattern = pattern + "*".repeat(mid_point + 1) + "\n"

    // Bottom half
    for(let i = mid_point; i > 0; i--){
        pattern = pattern + "*".repeat(i) + "\n"
    }

    return pattern;
}

for(let i = 1; i < 11; i = i + 2){
    console.log(`Iteration Number: ${i}`);
    console.log(right_pascal(i));
}