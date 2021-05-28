/* Assignment 5: create a loop that goes through 
each array item, multiplies it by 7 and then prints 
the result to the screen. */ 

let array = [1,45,32,21,5,17,43,93];

//create a loop
for(let i = 0; i < array.length; i++){

    //have the loop go through each array item 
    //multiply it by 7 and print results to screen
    console.log('The product of '+ array[i] + '*7' + ' equals to ' + array[i] * 7)
}