/*var string = "math word sand";

var array1 = string.split(" "); // remove spaces
var changedString = array1.join(""); // change to string

var array2 = changedString.split(""); // array of letters

var array3 = []; // array for storage

console.log("Changed String: " + changedString);
console.log("Array 2: " + array2);

var squareRoot = Math.sqrt(noSpacesString.length);
var rows = Math.floor(squareRoot);
var columns = (noSpacesString.length / rows);

//// this saves all the entries into another array.
//// it should only insert once i == 8 or more
for (i=0; i<rows.length; i++) {
 if (i > columns.length) {
 array3.push(array2[i+4]);
 }
}

 console.log("Array 3: " + array3); */

 var string = "dont";
 var capArray = string.split(" ");
 var stringHolder = capArray.join("");
 var toLetters = stringHolder.split("");

 console.log(toLetters);

var squareRoot = Math.sqrt(stringHolder.length);
var rows = Math.floor(squareRoot);
var columns = (stringHolder.length / rows);
columns = Math.round(columns);
console.log("Rows: " + rows + " Columns: " + columns);

var array1 = [];

if(columns === 2) {
  var slice = stringHolder.slice(0, 2);
  // if columns === 5, arrayA.push(string.length / 5 columns)
  array1.push(slice);
}

var tempString = array1.join("");
var tempArray = tempString.split("");
console.log(tempArray);

// var arrayOne = ["d", "o"];
// var arrayTwo = ["g", "e"];

// var arrayA = ["d", "o", "n", "t", "c", "o", "m", "p"];
// var arrayB = ["a", "r", "e", "y", "o", "u", "r", "s"];
// var arrayC = ["e", "l", "f", "t", "o", "o", "t", "h"];
// var arrayD = ["d", "o", "n", "t", "c", "o", "m", "p"];
// var arrayE = ["a", "r", "e", "y", "o", "u", "r", "s"];
// var arrayF = ["e", "l", "f", "t", "o", "o", "t", "h"];
// var arrayG = ["d", "o", "n", "t", "c", "o", "m", "p"];
// var arrayH = ["a", "r", "e", "y", "o", "u", "r", "s"];
// var arrayI = ["e", "l", "f", "t", "o", "o", "t", "h"];
var finalArray = [];

for (i=0; i < arrayA.length; i++) {
  var letterStorage = arrayA[i] + arrayB[i] + arrayC[i] + arrayD[i] + arrayE[i] + arrayF[i] + arrayG[i] + arrayH[i] + arrayI[i];
 	finalArray.push(letterStorage);
}

//for ()

var finalString = finalArray.join("");

//console.log("Final array " + finalArray);
//console.log("Final String " + finalString);

// Function to insert a space after every five characters
function fivespace(string, n) {
    var result = [];

    for(i = 0; i < string.length; i += n) {
       result.push(string.substr(i, n))
    }

    return result
};

console.log(fivespace(finalString, 5).join(' '));
