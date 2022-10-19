const strings = ['a','b','c','d']
//4 items 4*4 = 16 bytes of strorage

strings[2]
// push item in the end 
strings.push('e');

//pop remove from the end
strings.pop();
strings.pop();

//unshift add item at the begining
strings.unshift('x');

//splice add or delete item in index
strings.splice(2,1,'alien')

console.log(strings)