
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

console.log ('Массив: [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]')
console.log ('1.Сума та кількість позитивних елементів')
let sumPositive = 0
const Positive = []
for (let i=0; i < arr.length; i++){
    if (0 < arr[i]){
        sumPositive += arr[i]
        Positive.push(arr[i])
    }
}

console.log(`\t Сума: ${sumPositive}`)
console.log(`\t Кількість: ${Positive.length}`)
// --------------------------------------------------
// --------------------------------------------------
console.log ('2.Мінімальний елемент масиву та його порядковий номер')
const minEl = Math.min(...arr)
console.log(`\t Мінімальний елемент: ${minEl}`)
console.log(`\t Його порядковий номер: ${arr.indexOf(minEl)}`)
// --------------------------------------------------
// --------------------------------------------------
console.log ('3.Максимальний елемент масиву та його порядковий номер')
const maxEl = Math.max(...arr)
console.log(`\t Максимальний елемент: ${maxEl}`)
console.log(`\t Його порядковий номер: ${arr.indexOf(maxEl)}`)
// --------------------------------------------------
// --------------------------------------------------
console.log ('4.Кількість негативних елементів')
num = 0
const Negativ = []
    for (let i = 0; i < arr.length; i++){
        if(num > arr[i]){
            Negativ.push(arr[i])
        }
        
    }
console.log(`\t ${Negativ.length}`)
// --------------------------------------------------
// --------------------------------------------------
console.log ('5.Кількість парних позитивних елементів')
let PositiveEven = []
    for (let i = 0; i < arr.length; i++){
        if(num < arr[i] && (arr[i] % 2 === 0)){
            PositiveEven.push(arr[i]) 
        }
    }
console.log(`\t ${PositiveEven.length}`)
// --------------------------------------------------
// --------------------------------------------------
console.log ('6.Кількість непарних позитивних елементів')
const PositiveOdd = []
    for (let i = 0; i < arr.length; i++){
        if(num < arr[i] && (arr[i] % 2 !== 0)){
            PositiveOdd.push(arr[i])
        }
    }
console.log(`\t ${PositiveOdd.length}`)

// --------------------------------------------------
// --------------------------------------------------
console.log ('7.Cума парних позитивних елементів') 
let sumPositiveEven = 0
for (let i = 0; i < PositiveEven.length; i++) {
    sumPositiveEven += PositiveEven[i];
}
console.log(`\t ${sumPositiveEven}`)

// --------------------------------------------------
// --------------------------------------------------
console.log ('8.Cума непарних позитивних елементів')
let sumPositiveOdd = 0
for (let i = 0; i < PositiveOdd.length; i++) {
    sumPositiveOdd += PositiveOdd[i];
}
console.log(`\t ${sumPositiveOdd}`)

// --------------------------------------------------
// --------------------------------------------------
console.log ('9.Добуток позитивних елементів')
let multPositiveEven = 1
for (let i = 0; i < PositiveEven.length; i++) {
    multPositiveEven *= PositiveEven[i];
}
console.log(`\t ${multPositiveEven}`)

// --------------------------------------------------
// --------------------------------------------------
console.log ('10.Найбільший серед елементів масиву, остальні обнулені')

arr.splice(19,23)
arr.splice(0,18)
console.log(`\t ${arr}`)

