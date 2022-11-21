
// You should implement your task here.

module.exports = function towelSort (matrix) {

  // Решение версия 1 ******************************************************************/

  if (matrix === undefined || matrix.length === 0) return [];

  for (let i = 0; i < matrix.length; i++) {
    if (i%2 !== 0 ) matrix[i] = matrix[i].reverse() // если нечётное, то разворачиваем
  }

  return matrix.flat();                             // раскрываем внутренние массивы



  // Решение версия 2 ******************************************************************/

  // let result = []
  // if (matrix === undefined || matrix.length === 0) return result;
  // for (let i = 0; i < matrix.length; i++) {
  //   if (i%2 !== 0 ) matrix[i] = matrix[i].reverse()   // если нечётное, то разворачиваем
  //   result = result.concat(matrix[i])                 // загоняем в результат сразу раскрывая
  // }
  // return result;

}
