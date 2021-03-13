// Дан массив с числами. Найдите сумму этих чисел.

// let arr = [5, 8, 23, 7, 13];
// let sum = arr.reduce((acc, item) => acc + item);
// console.log(sum);

// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let number = arr.length;
// let sum = arr.reduce((acc, item, index) => {
//   if (item === 0) {
//     number = index;
//   }
//   if (index < number) {
//     return (acc += item);
//   }
//   return acc;
// });

// console.log(sum);

// Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let number = arr.length;
// let sum = arr.reduce((acc, item, index) => {
//   if (item === 0) {
//     number = index;
//   }
//   if (index > number) {
//     return (acc += item);
//   }
//   return acc;
// }, 0);

// console.log(sum);

// // Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr = [5, 8, 23, 7, 3];
// let sumArr = 0;
// let sum = arr.reduce((acc, item) => {
//   if (sumArr > 10) return acc;
//   else {
//     sumArr += item;
//     return (acc += 1);
//   }
// }, 0);

// console.log(sum);

// Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [5, 8, 23, 7, 3];
// let sumArr = 0;
// let sum = arr.reduceRight((acc, item) => {
//   if (sumArr > 10) return acc;
//   else {
//     sumArr += item;
//     return (acc += 1);
//   }
// }, 0);

// console.log(sum);
