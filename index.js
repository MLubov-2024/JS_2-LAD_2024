console.log ('кот' > 'код', typeof('кот' > 'код')); //true boolean строки в JavaScript сравниваются посимвольно

console.log ('2' + 2 * '2', typeof('2' + 2 * '2')); //24 string конкатенация

console.log (undefined == null, typeof(undefined == null)); //true boolean при нестрогом равенстве эти значения равны друг другу

console.log (undefined != null, typeof(undefined != null)); //false boolean из правила выше

console.log (null == 0, typeof(null == 0)); //false boolean для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому

console.log (2 > "3", typeof(2 > "3")); //false boolean 2>3

console.log (null - false + true, typeof(null - false + true)); //1 number 0-0+1

console.log (1 / "l", typeof(1 / "l"));// NaN number т.к число/строку

console.log ("2" * "3", typeof("2" * "3"));// 6 number 2*3

console.log (4 + 5 + "O", typeof(4 + 5 + "O"));// 9O string бинарный+ и конкатенация

console.log ("l" + 4 + 5, typeof("l" + 4 + 5));// l45 string конкатенация

console.log ("4" - 2, typeof("4" - 2));// 2 number вычитание

console.log ("4" - "4x", typeof("4" - "4x"));// NaN number т.к математические операции не с числами выполняем

console.log ('23' == 23, typeof('23' == 23));// true boolean 23=23

console.log (null == false, typeof(null == false));// false boolean нестрогая проверка на равенство null и undefined с чем угодно другим всегда дает false

console.log (" -4 "/ 0 + 1, typeof(" -4 "/ 0 + 1));// -Infinity number -4/0+1

console.log (null + 1, typeof(null + 1));// 1 number, ничего+1

console.log (undefined + null, typeof(undefined + null));// NaN number, так как матем оп не с числами

console.log (1 === '1', typeof(1 === '1'));// false boolean значение и тип дб строго идентичными при ===

console.log ('2' > 10, typeof('2' > 10));// false boolean 2<10

console.log (NaN == undefined, typeof(NaN == undefined));// false boolean знач null/undefined равны == друг другу и не равны любому др знач
