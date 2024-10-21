/*function number(num)
{
    return num*num;
}
console.log(number(3))*/

/*function sum(a, b)
{
    return a + b;
}
console.log(sum(5, 10))*/

/*function action(a,b,c)
{
    return (a-b)/c;
}
console.log(action(15,5,2))*/

/*function getDay(day)
{
    switch (day)
    {
        case 1: console.log('Пн'); 
        break;
        case 2: console.log('Вт'); 
        break;
        case 3: console.log('Ср'); 
        break;
        case 4: console.log('Чт'); 
        break;
        case 5: console.log('Пт'); 
        break;
        case 6: console.log('Сб'); 
        break;
        case 7: console.log('Вс'); 
        break;
        default:
		console.log('введите верное значение');
	    break;
    }    
    return day;
}
getDay(8);*/

/*function func(a,b)
{
    return a==b;
}
console.log(func(3,3))*/

/*function func(a,b)
{
    return a+b >10;
}
console.log(func(10,3))*/

/*function func(a)
{
    return a < 0;
}
console.log(func(-5))*/

/*function isNumberInRange(a)
{
    return (a > 0 && a <= 10);
}
console.log(isNumberInRange(2))*/

/*let arr = [5,1,2,0,9,10,15,27,5,78,9,25,4,3];
let newArr = [];    
    for (let i = 0; i < arr.length; i++) 
    {
       if (isNumberInRange(arr[i])) 
        {
        newArr.push(arr[i]);
        }
    }    
     console.log(newArr);
     function isNumberInRange (num) 
     {
        return num > 0 && num <= 10;
    }*/

/*function getDigitsSum(num)
{
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) 
        sum += Number(str[i]);
    return sum; 
}
console.log(getDigitsSum(125));*/

/*function getDigitsSum(num) 
{
    let str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) 
    {
        sum += Number(str[i]);
    }
       return sum;
}    
    let years = [];    
    for (let i = 1; i <= 2020; i++) 
    {
        if (getDigitsSum(i) == 13) 
        {
         years.push(i);
        }
    }    
     console.log(years);*/

/*function isEven(num) 
{
    return num % 2 == 0;
}        
console.log(isEven(4));*/

/*let arr = [10,0,5,4,2,3,7,2,8,9,3,6];
let newArr = [];
for (let i = 0; i < arr.length; i++) 
    {
       if (isEven(i)) {
         newArr.push(i);
       }
    }
    console.log(newArr);    
function isEven(num) 
{
    return num % 2 == 0;
}*/

/*function getDivisors(num) 
{
let res = [];
for (let i = 1; i < num; i++) 
{
   if (num % i == 0) 
    {
        res.push(i);
    }
}
return res;
}    
console.log(getDivisors(26));*/

/*let num = 821;
function isSumNumbers(num) 
{
    if (num === 0) return 0;
    return (num - 1) % 9 + 1;
}
console.log(isSumNumbers(num))*/

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    if (rev == str) {
      return true
    } else {
      return false
    }
  }
  console.log(isPalindrome('топот'))
