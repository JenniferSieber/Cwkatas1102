// www.codewars.com
// KATA 1 6kyu "(123) 456-7890"
const createPhoneNumber = numbers => {
  let tnFormat = "(xxx) xxx-xxxx"
  for(let i = 0; i < numbers.length; i++) {
    tnFormat = tnFormat.replace('x', numbers[i]);
  }
  return tnFormat;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// KATA 2 7kyu
const removeSmallest = numbers => {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
}

console.log(removeSmallest( [1,2,3,4,5]));

// KATA 3 7kyu
const solve = string => {
  let up = 0;
  let low = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toLowerCase()) {
      low++;
    } else {
      up++;
    }
  }
  return up <= low ? string.toLowerCase() : string.toUpperCase();
}

console.log(solve('coDe'));
console.log(solve('coDE'));
console.log(solve('cODE'));

