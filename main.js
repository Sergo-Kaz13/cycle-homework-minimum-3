'use strict'


// ? Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let userRangeOfNumbersStart = true;
let sumRangeOfNumbers = 0;

while (userRangeOfNumbersStart) {
    let userRangeOfNumbers = prompt('Введи діапазон чисел в форматі 0 - 100 \n Числа тільки додатні', '');

    if (userRangeOfNumbers === null) {
        userRangeOfNumbersStart = false;
    } else {
        let arruserRangeOfNumbers = userRangeOfNumbers.split('-');
        console.log(arruserRangeOfNumbers);

        if (arruserRangeOfNumbers.length <= 1 || arruserRangeOfNumbers.length > 2) {
            alert('Дані введені не вірно');
            console.log('Дані введені не вірно');
        } else {

            for (let i = 0; i < arruserRangeOfNumbers.length; i++) {
                arruserRangeOfNumbers[i] = arruserRangeOfNumbers[i].trim();

                if (arruserRangeOfNumbers[i].length === 0) {
                    alert('Дані введені не вірно');
                    console.log('Дані введені не вірно');
                }                    
            }

            if (+arruserRangeOfNumbers[0] !== +arruserRangeOfNumbers[0] || +arruserRangeOfNumbers[1] !== +arruserRangeOfNumbers[1]) {
                alert('Дані введені не вірно');
                console.log('Дані введені не вірно');
            } else if (+arruserRangeOfNumbers[1] < arruserRangeOfNumbers[0]) {
                alert('Діапазон чисел повинен бути від меншого до більшого');
            } else {
                for (let i = +arruserRangeOfNumbers[0]; i <= +arruserRangeOfNumbers[1]; i++) {
                    sumRangeOfNumbers += i;
                }
                alert(`Сума чисел ${sumRangeOfNumbers}`);
                userRangeOfNumbersStart = false;
            }
            console.log(arruserRangeOfNumbers);
        }
    }   
}