// let arr = [1,2,3];
// let marr = arr.map(i => i*10);
// console.log(arr,marr)

// function makeIterator(array){
// 	let nextIndex = 0;
// 	return {
// 		next: function(){
// 			return nextIndex < array.length ?
// 				{value: array[nextIndex++], done: false} :
// 				{done: true};
// 		}
// 	}
// }

// let it = makeIterator(['yo', 'ya']);
// console.log(it.next().value); // 'yo'
// console.log(it.next().done);
// console.log(it.next().value); // 'ya'
// console.log(it.next().done);  // true*/


function* infinite() {
	let index = 0;
	while (true) {
		yield index++ * 2;
	}
}
const generator = infinite(); // "Generator { }"
console.log(generator.next().value); // 0
console.log(generator.next().value); // 0
console.log(generator.next().value); // 0
console.log(generator.next().value); 