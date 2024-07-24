
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [21, 26, true, 'hello', null, { prop: 20 }, 50, undefined, '123', function(){ }, 10];


function averageOfNumbers () {

    const numbers = array.filter(function(element) {
        return typeof element === 'number'
    });

    const sum = numbers.reduce(function(total, number) {
        return total + number;
    }, 0);

    const average = sum / numbers.length;

    return average;
}

console.log(averageOfNumbers());