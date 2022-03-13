const numbers = [5, 3, 9, 30];

const multipleElementByTwo = (numbers) => {
  if(!Array.isArray(numbers)){
      return "Input is not an array"
  }
  for(let i=0;i<numbers.length;i++){
      numbers[i]=2*numbers[i];
  }
  return numbers;
};
console.log(multipleElementByTwo(numbers)); // [10, 6, 18, 60]
