/* Assigment 4: Create a loop that compares the array of numbers
provided for the number 25, console log over if it is over and 
under if it is under */

let over_under_array = [1,45,32,21,5,17,43,93]

//create a loop 
for(let i = 0; i < over_under_array.length; i++){

    //compare elements in array to see if over or under 25
    if(over_under_array[i] > 25){

        //if it is over 25 then specify it in console.log
        console.log('Array element in position ' + i + ' is over 25')
    } else if (over_under_array[i] < 25){

        //if it is under 25 then specify it in console.log
        console.log('Array element in position ' + i + ' is under 25')

    } else {
        //otherwise it is equal to 25
        console.log('Array element in position ' + i + ' is equal to 25')
    }
}