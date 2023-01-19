function factorial(n) {

if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
let number=1;

if (number > 0) {
    let result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
}