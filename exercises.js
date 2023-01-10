// Add IIFE

(function() {
    "use strict";


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
    newArray.unshift(arr1[i]);
}

return newArray;

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
        // Can coerce to true boolean with !!

        if (!arr1[i]) {
            arr1.splice(i,1);
            
        }

    }
    
    return arr1;
    
}








// -----------------------------------------------

// ---------------------
// 4. Define a function that takes an array of nested arrays and returns an object composed of properties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

// Input is an array of nested arrays. Access via array[0][0]...
// Return an object composed of properties equal to each nested array. 

// For example: there is an array containing: [  ['name', 'Charlie],['color','brown'] ];
// Convert from a single big array. 
// To an object containing each array pair as a KEY and then a VALUE. 
// The object.'myArray[0][0]' = myArray.[0][1]
// Get the string. Create the property. Then set the property to the second...etc value. 

function arrayNowObject(inputArray) {

    // Each nested array will only have two values. 
    // inputArray.length = 3. 

    const newObject = {};

    for (let i = 0; i < inputArray.length; i++) {
        // This will place you into the big outer arrays.

        newObject[inputArray[i][0]] = inputArray[i][1];  //Never forget the double brackets.
      
        }

    return newObject;
}










// -----------------------------------------------

// ---------------------
// 5. Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------




// Create a unique output array.
// Cycle through the input array. 
// Add each array element to the new array as long as it does not match anything in the input array. 


function removeDuplicates(inputArray) {

    const uniqueArray = [];

    // Look at the first element in the input array. It is 3. 
    // Now check if that 3 value is ALSO in the uniqueArray. 
    // If the three value is NOT in the uniqueArray, .push that value to the uniqueArray.
    // Move to the next array element. 

    for (let i = 0; i < inputArray.length; i++) {

            if(!uniqueArray.includes(inputArray[i])) {
                uniqueArray.push(inputArray[i]);
            }
    }
    return uniqueArray;
}



/*
The indexOf() method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not found.

*/




// -----------------------------------------------

// ---------------------
// 6. Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

// Order does not matter. 

// Check if the length is the same. If not true, return false.

// Cycle through the two arrays.

// Use the includes function. Same length and each value is included, they must be identical.

// If a single value does not match, set identical to false. 

// This function may not work. Need to add additional check value. 

function identicalArrayCheck(inputArray1, inputArray2){

let identical = true;

if (inputArray1.length != inputArray2.length) { identical = false; }

    // Just calling .sort() will convert your array to strings. 

    inputArray1.sort();
    inputArray2.sort();


    for (let i = 0; i < inputArray1.length; i++) {

        if (inputArray1[i] != inputArray2[i]){
            identical = false;

        }
    }




    
return identical;

}


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
// 7. Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// Input takes in an array. 
// Check for the array length is at each sub array. 
// If greater than 1, then iteratively raise the sub array. Take the values and add to the original array.

function flattenArray(inputArray) {

    const flatArray = [];


    for (i = 0; i < inputArray.length; i++) {

        if (inputArray[i].length > 1){
            // Cycle through the nested array. 
            // Push those values to flatArray.

            for (let j = 0; j < inputArray[i].length; j++){

                flatArray.push(inputArray[i][j])



            }





        } else {
            flatArray.push(inputArray[i]);
        }


    }

    return flatArray;


}










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------


})();
