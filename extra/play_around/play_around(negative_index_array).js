//Initializing an array and adding values to its negative index
let a = []
let x = 1
for(let i=0 ; i>-5 ; i--)
{
     console.log("Assigned element in array A: ",a[i] = x);          
     x++;          
}
console.log("Printing array A",a);
console.log("Length of array A",a.length);
console.log("Index of 1 in array A: ",a.indexOf(1));
console.log("Index of 2 in array A: ",a.indexOf(2));
console.log("Index of 3 in array A: ",a.indexOf(3));                 
console.log("Index of 4 in array A: ",a.indexOf(4));
console.log("Index of 5 in array A: ",a.indexOf(5));

console.log("Printing element at -1 Index: ",a[-1]);
console.log("Printing element at -2 Index: ",a[-2]);
console.log("Printing element at -3 Index: ",a[-3]);
console.log("Printing element at -3 Index: ",a[-4]);

console.log("Printing element at 1 Index: ",a[1]);
console.log("Printing element at 2 Index: ",a[2]);
console.log("Printing element at 3 Index: ",a[3]);

// The above program execution have following conclutions:
// - The size of an array with negative index (starting from 0 to -n) is 1
// - The index of every element (excludind the zero'th element) is -1
// - We can access the elements by specifying the negative index only if we know the range
// - Only a single memory allocation is reflected (zero'th), rest negative indexes are not reflected by ".length" function
// - Even the size of a negative indexed array is 1 (provided that zero'th element exist), it still contains the assigned values
// - Printing such array give index value with assigned value (execpt zeroth and positive index)