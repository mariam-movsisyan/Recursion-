// function fib(n: number): number { 
//     if(n <= 1){
//         return n
//     }else{
//         return fib(n-1) + fib(n-2)
//     }
// }
// console.log(fib(7));
// function fibonacci(n: number): number{
//     let firstNumber: number = 0;
//     let secondNumber: number = 1;
//     let result: number = 0;
//     if(n <= 1){
//         return n;
//     }else{
//         for(let i : number = 2; i <= n; i++){
//            result = firstNumber + secondNumber;
//             firstNumber = secondNumber;
//             secondNumber = result;
//         }
//         return result;
//     }
// }
// console.log(fibonacci(7));
function fibonacci_series(n) {
    if (n === 1) {
        return [0, 1];
    }
    else {
        var sequence = fibonacci_series(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}
;
console.log(fibonacci_series(8));
// function hanoi(countOfRings: number, from: number, to: number){
//     if(countOfRings === 1){
//         return ('from ' + from + ' to ' + to);
//     }else{
//         const temporary = 6 - from - to
//         hanoi(countOfRings - 1, from, temporary)
//         console.log('from ' + from + ' to ' + to);
//         hanoi(countOfRings-1, temporary, to);
//     }
// }
// hanoi(5, 1, 2);
// Напишите программу на JavaScript, чтобы получить целые числа в диапазоне (x, y).
// Пример: диапазон (10, 18)
// Ожидаемый результат: [11,12,13,14,15,16,17]
// let arr: number[] = []
// function abc(start:number,end: number): number[]{
//     if(end - start === 2){
//         arr.push(start + 1);
// 	    return arr;
//     }else{
//         abc(start, end-1);
//         arr.push(end-1);
//         return arr;
//     }
// }
// console.log(abc(10, 18));
// function array_sum (array: number[]):number {
//     if (array.length === 1) {
//       return array[0];
//     }
//     else {
//       return array.pop() + array_sum(array);
//     }
// }
// console.log(array_sum([2,3,4,5,6,7]));
function pow(a, b) {
    if (b === 0) {
        return 1;
    }
    else {
        return a * pow(a, b - 1);
    }
}
console.log(pow(3, 5));
