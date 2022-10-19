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

//
console.log(strings)

class Player {
		constructor( name, type){
			this.name = name
			this.type = type
    }

    introduce(){
	  console.log("Hi I am ${this.name}. I am a ${this.type}")
  }
}

class Wizard extends Player {
	  constructor(name,type){
   	super(name,type)
  }
  play(){
  	console.log("Weeeeee! I am a ${this.type}")
  }
}

const wizard1 = new Wizard("Shelly", "Healer");



class MyArray{
  constructor(){
    this.length = 0
    this.data = {};
  }

  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop(){
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length -1]
    this.length--;
    return lastItem
  }

  delete(index){
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
  }
}

const newArray = new MyArray();
newArray.push('hello')
newArray.push("you")
newArray.push("!")
newArray.delete(0)
console.log(newArray)