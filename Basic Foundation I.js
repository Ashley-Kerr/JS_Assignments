//  1. Get 1 to 255 (in a single array)
var num= []
for(var i = 1; i < 256; i++){
    num.push(i);
}
console.log(num)

//  2. Get even 1000 (Sum even #'s between 1-1000)
var sum = 0;
for(var i = 1; i < 1001; i++){
    if(i % 2 === 0){
        sum += i;
    }
}
console.log(sum);

//  3. Sum odd 5000 ( Sum odd #'s between 1-5000)
var sum = 0;
for(var i = 1; i < 5001; i++){
    if(i % 2 == 1){
        sum += i;
    }
}
console.log(sum);

//  4. Iterate an array (return the sum of these 2 arrays 1,2,5=8 or -5,2,5,12=14)
function sumIT(){
var sum = 0
    for(var i = 0; i < sumIT.length; i++){
        sum += sumIT[i]
    }
return sum;
}

// 5. Find max (to any array)
function findMax(arr){
    var max = arr[0]; 
    for (var i = 0; i < arr.length; i++){ 
        if (arr[i] > max){
            
            max = arr[i];
        }
    }
    return max;
}

//  6. Find Avg (to any array)
function findAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}

//  7. Array of odd number upto 50
function oddArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}

//  8. Greater than Y (of any array)
function greaterThanY(arr, y){
    var counter = 0;
    for (var i = 0; idx < arr.length; i++){
        if (arr[i] > y){
            counter++;
        }
    }
    return counter;
}

//  9. Squares
function squares(arr){
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx]*arr[idx];
    }
}

//  10. negative
function noNegatives(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}

// 11. Min, max, AVG Combo!
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}

// 12. swap values in an array
function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);


//  13. Negitives to DOjo in string
function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}