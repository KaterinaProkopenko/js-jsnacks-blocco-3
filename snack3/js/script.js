const numbers = [10, 45, 3, 79, 1];

for (let i = 0; i < numbers.length; i++) {
    if (isEven(numbers[i])){
        document.getElementById('red').innerHTML += numbers[i];
    } else {
        document.getElementById('green').innerHTML += numbers[i] + ', ';
    }
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
};
