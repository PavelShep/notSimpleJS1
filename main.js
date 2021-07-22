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

/*Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.*/
function polindrom(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}