var fibonacci = function(index) {
    let num1 = 0;
    let num2 = 1;
    let fibo = 0;
    
    if (index === 0){
        return num1;
    }
    else if (index === 1){
        return num2;
    }
    else{
        for(let i = 0; i < (index - 1); i++) {
            fibo = num1 + num2;
            temp = num2;
            num1 = num2;
            num2 = fibo;
        }
    }
    
    return fibo;
};

for (let i = 0; i < 10; i++){
    console.log(`Index: ${i} Fibonacci Number: ${fibonacci(i)}`)
}