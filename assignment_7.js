/* Assignment 7: Create a function that takes the below array of names,
and separates them into two arrays one of the names with 
an even number of letters and one with an odd number of letters.

Then take the first letter of each of the names in
the even array and make it the letter "b", take the last letter in 
each of the names in the odd array and make them a "c" 
Print both arrays and then return the even one to a variable 
named even_array and print it again. */

//given array
let names_array = ["bob","jimmy","max b","bernie","jordan","future hendrix"]

//create a function that takes in an array
function separateArrays(array){

    //separate given array into two arrays
    let evenArray = []
    let oddArray = []

    //create a loop that will check the length of each element
    for(let i = 0; i < array.length; i++){

        //if name has even amount of letters push into even array
        //if name has odd amount of letters push into an odd array
        if (array[i].length % 2 === 0){

            //this will push element into evenArray
            evenArray.push(array[i])            

        } else if (array[i].length % 2 === 1){

            //this will push element into oddArray
            oddArray.push(array[i])
 
        }
    }
 
    //take the first letter of each name in the even array and make it the letter 'b'
    evenArray = evenArray.map(word => word = 'b' + word.substring(1))
    //take the last letter of each names in the odd array and make it the letter "c"
    oddArray = oddArray.map(word => word = word.substring(0, word.length-1) + 'c')
 
    //both arrays get printed when function is called
    console.log("Updated even array is: ", evenArray)
    console.log("Updated odd array is: ", oddArray)
 
    //return both arrays
    return {evenArray, oddArray}
} 
//calling the function with names_array in parameter
//should log both arrays to the console
separateArrays(names_array)

//return the even one to a variable named even_array
let even_array = separateArrays(names_array).evenArray

//print it again
console.log(even_array)