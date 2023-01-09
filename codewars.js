// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
  
    if (array.length == 0){
      return array;
    }
    
    for (let i = 0; i < array.length; i++){
      array[i] = parseInt(i + 1) + ": " + array[i];
    }
    
    return array;
      
  }


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript




// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
  
    // get the length of drone;
    // create a string that is length long of o
    // concatenate with x of length (lamps - drone.length)

    // Must have condition for when the drone flys past all of the lights.
    
    
    let lampsOn = drone.length;
    let lampsOff = lamps.length - lampsOn;
    
    if (lampsOn > lamps.length) {
      return 'o'.repeat(lamps.length);
    }
    
    return 'o'.repeat(lampsOn) + 'x'.repeat(lampsOff);
  
  }


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript




// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
