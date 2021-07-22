/* Написать функции, которые находят минимальный и максимальные элемент массива. В функцию массив передается в качестве аргумента.*/
function findMin(arr) {
    let min = arr[0];
    let min_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            min_index = i;
        }
    }
    console.log("Минимальное значение: " + min + " с индексом: " + min_index);
}

function findMax(arr) {
    let max = arr[0];
    let max_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            max_index = i;
        }
    }
    console.log("Максимальное значение: " + max + " с индексом: " + max_index);
}

/*Написать функции, которые сортируют массив по возрастанию и по убыванию. В функцию массив передается в качестве аргумента. */
function sortInAscendingOrder(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let currenValue = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = currenValue;
    }
    console.log("Массив отсортированный по возрастанию: ", arr);
}

function sortInDescendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] < arr[k + 1]) {
                let l = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = l;
            }
        }
    }
    console.log("Массив отсортированный по убыванию: ", arr);
}

/*
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. 
При этом нужно учитывать пробелы и знаки препинания.
*/
function polindrom(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
//console.log(polindrom('Анна'));

/*
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, 
с такими условиями: вывод fizz вместо чисел, кратных 3; вывод buzz вместо чисел, кратных 5;вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/
function multiplicityOfThreeAndFive(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz')
        } else if (i % 5 == 0) {
            console.log('buzz');
        } else if (i % 3 == 0) {
            console.log('fizz')
        } else {
            console.log(i);
        }
    }
}

/*
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/
function anagram(str1, str2) {
    str1 = str1.replace(/[\s.,!?]/g, "");
    str2 = str2.replace(/[\s.,!?]/g, "");
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}
//console.log(anagram('рано', 'нора'));

/*
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. 
Гласными являются «a», «e», «i», «o», «u». 
*/
function countVowels(str){
    const arr = ["a", "e", "i", "o", "u"];
    let i = 0;
    for (let char of str) {
        if (arr.includes(char)){
            i++;
        }
    }
    return i;
}
//console.log(countVowels('qwe,af'));