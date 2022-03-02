const userNumber = parseInt(prompt('Inserisci un numero'));

while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Inserisci un numero'));
};

if (userNumber >= 500) {
    userNumber = 500;
};

for (let i = 0; i < userNumber; i++) {
    const arrayNumbers = [];
    while (arrayNumbers.length < 10){
        arrayNumbers.push(Math.floor(Math.random() * 4532) + 4);
    };
    console.log(arrayNumbers);
}