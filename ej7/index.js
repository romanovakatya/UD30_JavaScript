
console.log(factorial(5));

function factorial(number) {

    let factorial = number;

    for (let index = number; index > 1; index--) {
        factorial = factorial * (index - 1);
    }

    return factorial;
}