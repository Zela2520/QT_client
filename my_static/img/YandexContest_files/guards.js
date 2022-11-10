//  Условие:

// Первый пример:
// input:
// 1-ая строка: 5 3       -   первое число(количество плит, по сути высота башни), второе число количество охранников
// 2-ая строка: 7 3 4 2 2 -   длина i-ой плиты в порядке СНИЗУ ВВЕРХ  
// 3-я строка: 3 2 1      -   ширина плеч j-ого добровольца


// _ _
// _ _ 
// _ _ _ _
// _ _ _
// _ _ _ _ _ _ _

// Второй пример:
// input:
// 1-ая строка: 2 1       -   первое число(количество плит, по сути высота башни), второе число количество охранников
// 2-ая строка: 2 10 -   длина i-ой плиты в порядке СНИЗУ ВВЕРХ  
// 3-я строка: 11      -   ширина плеч j-ого добровольца

function deleteSpaces(inputString) {
    return inputString.filter(item => item != ' ')
}

function getMaxNumberOfTowerGuards(inputData) {
    return inputData;
}

let firstArrow = prompt("Enter the number of plates and the number of guards", -1).split("")

console.log(getMaxNumberOfTowerGuards(firstArrow))

