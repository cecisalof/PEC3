// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.


function printArray(array:Array<number>):void{
	//code to print the array on console
       console.log(array);
       
}

var array = [2, 3, 4];
console.log(array.splice(0, 1)); //2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.splice(2, 1)); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
// /** check if every number is greater than 3 */
var everyisgreater =  array.every(number => number > 3);
console.log(everyisgreater); //false
// /** check if every number is less than 10 */
var everyisless =  array.every(number => number < 10);
console.log(everyisless); //true
console.log(array.sort()); //1,3,4,8
console.log(array.reverse()) //8,4,3,1

