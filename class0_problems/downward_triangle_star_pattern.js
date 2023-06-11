// https://www.tutorialstonight.com/js/javascript-star-pattern#downward-triangle-star-pattern

function downward_triangle_star(n) {

    let final_string = ""

    for (let i = n; i > 0; i--){
        final_string = final_string + "*".repeat(i) + "\n"
    }
    
    console.log(final_string)
}

downward_triangle_star(3);
downward_triangle_star(5);
downward_triangle_star(10);