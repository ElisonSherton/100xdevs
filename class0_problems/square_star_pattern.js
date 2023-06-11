// https://www.tutorialstonight.com/js/javascript-star-pattern
// Pattern 1

function squareStar(n) {

    let final_string = ""

    for (let i = 0; i < n; i++){
        final_string = final_string + "*".repeat(n) + "\n"
    }
    
    console.log(final_string)
}

squareStar(3);
squareStar(5);
squareStar(10);