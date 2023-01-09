// ---------------------
// 1. Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


// Take in a string and an integer as arguments. 
// Create a new array. 
// Push/print to the new array the string integer times. 


function repeats(str1, reps) {

    const output = [];

    for (let i = 0; i < reps; i++) {
        output.push(str1);
    }


    return output;

}










// -----------------------------------------------

// ---------------------
// 2. Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

// Take in an array and reverse it. The .reverse() method mutates the original array, so you need to make a copy. 

function reverseArray(arr1){

let newArray = []

for (let i = 0; i < arr1.length; i++) {
    newArray[i] = arr1[i];
}

return newArray.reverse();

}


// -----------------------------------------------

// ---------------------
// 3. Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

// Cycle through the array.
// If the value equals false, delete the array element. Not allowed.
// return the modified array.
// Cannot delete.
// Create a duplicate array? 
// Splice the array?


function removeFalse(arr1){

    for (let i = 0; i < arr1.length; i++) {

        if (!arr1[i]) {
            arr1.splice(i,1);
            
        }

    }
    
    return arr1;
    
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
