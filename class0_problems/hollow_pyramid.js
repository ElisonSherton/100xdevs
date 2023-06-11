// https://www.tutorialstonight.com/js/javascript-star-pattern#hollow-pyramid-star-pattern

function get_line(n, total) {
    if (n == 0) {
        return " ".repeat(total) + "*"
    }
    // else if (n == 1) {
    //     return " ".repeat(total - 1) + "**"
    // }
    else {
        spaces = 2 * n - 1;
        line = " ".repeat(total - n) + "*" + " ".repeat(spaces) + "*"
        return line;
    }
}

function hollow_pyramid_pattern(n){
    let pattern = "";

    for (let i = 0; i < n - 1; i++) {
        pattern = pattern + get_line(i, n) + "\n";
    }
    if (n > 2){
        final_line = "*".repeat(2 * n + 1);
        pattern = pattern + final_line;
    }
    console.log(pattern);
}

for (let i = 1; i < 10; i++){
    console.log(`Pyramid Height: ${i}`);
    hollow_pyramid_pattern(i)
}