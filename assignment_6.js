/* Assignment #6: Given the below array, create a function which loops through 
each name, comparing the length of each to determine the longest name, 
save that name  to the variable longest_name. Return longest_name to the 
another variable called answer and log the answer variable to the screen.*/

//given array
var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"]

//create a function
function checkNames(arr){

let longest_name = arr[0]

//create a loop
for(let i = 0; i < arr.length; i++){

//will print each name to console and the name length
//console.log(arr[i], arr[i].length)

//compare names to see which is longer
  if (longest_name.length < arr[i].length){

    //save longest name to variable
    longest_name = arr[i]
  }
}
return longest_name
}
//save longest name to answer variable
let answer = checkNames(array)
//log the answer variable to the screen
console.log('The longest name in the given array is ' + answer)