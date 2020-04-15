/**
 * Some javascript inbuild functions
 */
const strings = ['a', 'b', 'c', 'd', 'e'];

console.log(strings);

// Push Add new item to ths last of the array
strings.push('f');
console.log(strings)

//Pop Remove last item from the array
strings.pop();
console.log(strings)

//Unshift Add Itme in front of the array
strings.unshift('x')
console.log(strings)

//Splice Add item to the given index of the array
strings.splice(2,0,'x')
console.log(strings)

