// Initializing and assigning an array
let array = [1,"hello",true,3.14];

//printing and array
console.log(array);

// Access by index
console.log(array[2]);
console.log(array[0]);

// Array length
console.log(array.length);

//loop over array
for(let i=0 ; i<array.length ; i++)
{
     console.log(i,array[i]);
}

array.forEach(function(item, index, array)
{
     console.log(index,item);
})

// Add item (at last)
array.push("Jauary");
console.log(array);

// Delete item (from last)
array.pop();
console.log(array);

// Add item at begining
array.unshift(false);
console.log(array);

// Delete item from begining
array.shift();
console.log(array);

// Find index of an item
console.log(array.indexOf(1));
console.log(array.indexOf("hello"));

//concat
let array2 = [20,false,"bye"];
let array3 = array.concat(array2);
console.log(array3);

// Filtering values of array
let char_arr = ["hello","hii","bye"];
let filter_arr = char_arr.filter(char_arr => char_arr.length > 3);
console.log(filter_arr);

//filtering values using function
let num_arr = [2,9,31,4,17,25,11];
function condition(arr_element){
     return arr_element > 10;
}
console.log(num_arr.filter(condition));

// Find first element satisfying given condition
const find_element = num_arr.find(element => element > 30);
console.log(find_element);

// Sort numeric array
let sorted_arr = [9,31,4,25,11];
sorted_arr.sort( (a,b) => a-b );
console.log(sorted_arr);

// Reverse an array
console.log(sorted_arr.reverse())