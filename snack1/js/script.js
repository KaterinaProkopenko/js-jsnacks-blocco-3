const numbers = [];

let sum = 0;
while (sum < 200) {
    numbers.push(parseInt(prompt('Inserisci un numero')));
    sum += numbers[numbers.length - 1];
    console.log(sum);
}

console.log(numbers);