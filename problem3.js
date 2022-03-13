// Task 1 - Multiply every number by 2
const numbers = [5, 3, 9, 30];
const multiple=[]
//numbers.forEach(val=>multiple.push(val*2))
/*numbers.forEach((val,index,array)=>{
    numbers[index]=val*2;
})*/

const multipleElementByTwo = (numbers) => {
  if(!Array.isArray(numbers)){
      return "Input is not an array"
  }
  return numbers.map((val)=> val*2)
  
  
};


console.log(multipleElementByTwo (numbers)); // [10, 6, 18, 60]