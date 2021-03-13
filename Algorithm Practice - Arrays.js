// Challenge 1 Print Num and Sum

var testArr = [6,3,5,1,2,4]
var addItUp = 0

for(var i = 0; i < testArr.length; i++){
    console.log("Num",testArr[i]);
    addItUp = addItUp + testArr[i];
    console.log("Sum",addItUp);
}


// Challenge 2 Value * Position

var testArr = [6,3,5,1,2,4]
var newArr = []
var temp = 0

for(var i = 0; i < testArr.length; i++){
    temp = testArr[i] * i;
    newArr.push (temp);
}
console.log(newArr);
